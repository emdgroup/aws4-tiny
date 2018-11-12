const assert = require('assert');

const aws4 = require('../dist/aws4');
const testSuite = require('./aws-sig-v4-test-suite.json');

describe('run browser test in node', () => {
  const run = require('./index.js');
  const results = run(aws4);
  test('size of test result matches test suite', () => expect(results).toHaveLength(testSuite.length));
  results.forEach(t => test(t.name, () => expect(t.success).toBeTruthy()));
});
