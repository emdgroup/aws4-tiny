const assert = require('assert');

window = {};
const aws4 = require('../dist/aws4');
//const aws4 = require('../aws4/aws4');
const RequestSigner = aws4.RequestSigner;

const tests = require('./aws-sig-v4-test-suite.json');


const CREDENTIALS = {
  accessKeyId: 'AKIDEXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
};

const SERVICE = 'service';

const results = tests.map(({ test, request, canonicalString, stringToSign, outputAuth }, idx) => {
  try {
    const signer = new RequestSigner(request, CREDENTIALS);
    if (signer.datetime == null && request.headers['x-amz-date']) {
      signer.datetime = request.headers['x-amz-date']
    }
    assert.equal(signer.canonicalString(), canonicalString);
    assert.equal(signer.stringToSign(),stringToSign);
    assert.equal(signer.sign().headers.Authorization, outputAuth);
    console.log(`${idx + 1} .. ok (${test})`);
    return null;
  } catch(e) {
    console.log(`${idx + 1} .. not ok (${test})`);
    console.error(e.message);
    return e;
  }
}).filter(i => i);

if(!results.length) console.log('pass');
else {
  console.error('fail');
  process && process.exit(1);
}
