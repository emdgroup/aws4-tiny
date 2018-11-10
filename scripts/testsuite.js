const path = require("path");
const fs = require("fs");

var CREDENTIALS = {
  accessKeyId: "AKIDEXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY"
};
var SERVICE = "service";

var suiteDir = path.join(__dirname, "../test/aws-sig-v4-test-suite");
var ignoreDirs = ["get-header-value-multiline"]; // too annoying to parse multiline
var tests = fs.readdirSync(suiteDir);
tests = tests
  .concat(
    ...tests.map(file => {
      if (file.indexOf(".") > -1) return null; // if file
      return fs.readdirSync(path.join(suiteDir, file)).map(d => path.join(file, d));
    })
  )
  .filter(function(t) {
    return !~t.indexOf(".") && !~ignoreDirs.indexOf(t);
  });

const job = tests.sort().map(function(test) {
  var files = fs.readdirSync(path.join(suiteDir, test));
  if(!files.find(f => f.indexOf('.req') !== -1)) return;
  var readFile = function(regex) {
    var file = path.join(suiteDir, test, files.filter(regex.test.bind(regex))[0]);
    return fs.readFileSync(file, "utf8").replace(/\r/g, "");
  };
  var request = readFile(/\.req$/);
  var canonicalString = readFile(/\.creq$/);
  var stringToSign = readFile(/\.sts$/);
  var outputAuth = readFile(/\.authz$/);

  var reqLines = request.split("\n");
  var req = reqLines[0].split(" ");
  var method = req[0];
  var pathname = req.slice(1, -1).join(" ");
  var headers = {};
  for (var i = 1; i < reqLines.length; i++) {
    if (!reqLines[i]) break;
    var colonIx = reqLines[i].indexOf(":");
    var header = reqLines[i].slice(0, colonIx).toLowerCase();
    var value = reqLines[i].slice(colonIx + 1);
    if (headers[header]) {
      headers[header] = headers[header].split(",");
      headers[header].push(value);
      headers[header] = headers[header].join(",");
    } else {
      headers[header] = value;
    }
  }
  var body = reqLines.slice(i + 1).join("\n");

  var signer = {
    service: SERVICE,
    method: method,
    path: pathname,
    headers: headers,
    body: body,
    doNotModifyHeaders: true,
    doNotEncodePath: true
  };

  return {
    test,
    request: signer,
    canonicalString,
    stringToSign,
    outputAuth
  };

  // signer.canonicalString().should.equal(canonicalString);
  // signer.stringToSign().should.equal(stringToSign);
  // signer.sign().headers.Authorization.should.equal(outputAuth);
}).filter(f => f);

fs.writeFileSync(path.join(__dirname, "../test/aws-sig-v4-test-suite.json"), JSON.stringify(job, null, 2));
console.log(`${job.length} tests exported`);
