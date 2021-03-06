const path = require('path');
const fs = require('fs');

const SERVICE = 'service';

const testsDir = path.join(__dirname, '../test');

const suiteDirs = [
  path.join(testsDir, 'aws-sig-v4-test-suite'),
  path.join(testsDir, 'aws4-tiny-test-suite'),
];
const ignoreDirs = ['aws-sig-v4-test-suite/get-header-value-multiline']; // too annoying to parse multiline
let tests = [].concat(...suiteDirs.map(s => fs.readdirSync(s).map(f => path.join(s, f))));
tests = tests
  .concat(
    ...tests.map((file) => {
      if (file.indexOf('.') > -1) return null; // if file
      return fs.readdirSync(file).map(d => path.join(file, d));
    }),
  )
  .filter(t => t.indexOf('.') === -1 && ignoreDirs.indexOf(path.relative(testsDir, t)) === -1);

const job = tests
  .sort()
  .map((test) => {
    const files = fs.readdirSync(test);
    if (!files.find(f => f.indexOf('.req') !== -1)) return;
    const readFile = (regex) => {
      const file = path.join(test, files.filter(regex.test.bind(regex))[0]);
      return fs.readFileSync(file, 'utf8').replace(/\r/g, '');
    };
    const request = readFile(/\.req$/);
    const canonicalString = readFile(/\.creq$/);
    const stringToSign = readFile(/\.sts$/);
    const outputAuth = readFile(/\.authz$/);

    const reqLines = request.split('\n');
    const req = reqLines[0].split(' ');
    const method = req[0];
    const pathname = req.slice(1, -1).join(' ');
    const headers = {};
    let i;
    for (i = 1; i < reqLines.length; i++) {
      if (!reqLines[i]) break;
      const colonIx = reqLines[i].indexOf(':');
      const header = reqLines[i].slice(0, colonIx).toLowerCase();
      const value = reqLines[i].slice(colonIx + 1);
      if (headers[header]) {
        headers[header] = headers[header].split(',');
        headers[header].push(value);
        headers[header] = headers[header].join(',');
      } else {
        headers[header] = value;
      }
    }
    const body = reqLines.slice(i + 1).join('\n');

    const signer = {
      service: SERVICE,
      method,
      path: pathname,
      headers,
      body,
      doNotModifyHeaders: !!test.match(/urlencoded/),
      doNotEncodePath: true,
    };

    return {
      test: path.relative(path.join(__dirname, '../test'), test),
      request: signer,
      canonicalString,
      stringToSign,
      outputAuth,
    };
  })
  .filter(f => f);

fs.writeFileSync(
  path.join(__dirname, '../test/aws-sig-v4-test-suite.json'),
  JSON.stringify(job, null, 2),
);
console.log(`${job.length} tests exported`);
