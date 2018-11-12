const assert = require("assert");

const tests = require("./aws-sig-v4-test-suite.json");

const CREDENTIALS = {
  accessKeyId: "AKIDEXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY"
};

const SERVICE = "service";

module.exports = (aws4, log = () => {}) => {
  const RequestSigner = aws4.RequestSigner;
  const results = tests
    .map(({ test, request, canonicalString, stringToSign, outputAuth }, idx) => {
      try {
        const signer = new RequestSigner(request, CREDENTIALS);
        if (signer.datetime == null && request.headers["x-amz-date"]) {
          signer.datetime = request.headers["x-amz-date"];
        }
        assert.equal(signer.canonicalString(), canonicalString);
        assert.equal(signer.stringToSign(), stringToSign);
        assert.equal(signer.sign().headers.Authorization, outputAuth);
        log(`${idx + 1} .. ok (${test})`);
        return { name: test, success: true };
      } catch (e) {
        log(`${idx + 1} .. not ok (${test})`);
        log(e.message);
        return { name: test, success: false, error: e.message };
      }
    })
    .filter(i => i);

  if (!results.filter(t => !t.success).length) log("pass");
  else log("failed");

  return results;
};
