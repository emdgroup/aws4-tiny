const assert = require('assert');

const aws4 = require('../dist/aws4');
const testSuite = require('./aws-sig-v4-test-suite.json');

describe.skip('run browser test in node', () => {
  const run = require('./index.js');
  const results = run(aws4);
  test('size of test result matches test suite', () => expect(results).toHaveLength(testSuite.length));
  results.forEach(t => test(t.name, () => expect(t.success).toBeTruthy()));
});

describe('aws4.fetch', () => {
  const fetch = jest.fn((x, y) => [x, y]);
  window.fetch = fetch;

  test('fetch is called once', () => {
    aws4.fetch({ service: 'codepipeline', region: 'eu-west-1' });
    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toBe('https://codepipeline.eu-west-1.amazonaws.com');
    expect(fetch.mock.calls[0][1]).toMatchObject({
      headers: {
        Host: 'codepipeline.eu-west-1.amazonaws.com',
        Authorization: expect.stringMatching(/^AWS4-HMAC-SHA256/),
      },
    });
  });
});
