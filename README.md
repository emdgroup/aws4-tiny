[![Build Status](https://img.shields.io/travis/emdgroup/pipeline-changes/master.svg?style=flat-square&logo=travis)](https://travis-ci.org/emdgroup/pipeline-changes)
[![GitHub license](https://img.shields.io/github/license/emdgroup/pipeline-changes.svg?style=flat-square)](https://github.com/emdgroup/pipeline-changes/blob/master/LICENSE)
[![sponsored by](https://img.shields.io/badge/size-7kb%20gzipped-blue.svg?style=flat-square)](http://emdgroup.com)
[![sponsored by](https://img.shields.io/badge/sponsored%20by-emdgroup.com-ff55aa.svg?style=flat-square)](http://emdgroup.com)

# aws4-tiny

Minimal browser bundle with zero dependencies for signing requests using Amazon's
[AWS Signature Version 4](http://docs.amazonwebservices.com/general/latest/gr/signature-version-4.html).

This package is largely based off of the excellent work of [@mhart's](https://github.com/mhart) [aws4](https://github.com/mhart/aws4). While using `aws4` in the browser is possible, its footprint is rather large (325kb, or 100kb gzipped) due to the number of polyfills that need to be pulled in. `aws4-tiny` provides a few hand-crafted polyfills that were optimized for use with `aws4`.

`aws4-tiny` supports all modern browsers and IE 10+ at just under 7kb (gzipped). The following browser versions are supported:

| Browser | Version |
| ------- | ------- |
| IE | 10+ |
| Edge | 15+ |
| Firefox | 47+ |
| Chrome | 49+ |


## Installation

The package is available as UMD build which let's you include the bundle directly using a `<script>` tag or you can use your preferred module loader.

```bash
npm install --save aws4
```

```html
<script src="https://unpkg.com/aws4-tiny@1.0.0/dist/aws4.js">
<script>
  aws4.sign(opts, credentials);
</script>
```

```js
import aws4 from 'aws4-tiny';

aws4.sign(opts, credentials)
```

## Usage

**aws4.sign(opts, credentials)**

See [aws4 API](https://github.com/mhart/aws4#API) for details on the `opts` object.

Example using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):

```js
var credentials = {
  accessKeyId: '',
  secretAccessKey: '',
  sessionToken: '', // only required for temporary credentials
};

var request = aws4.sign({
  service: 'execute-api',
  region: 'us-east-2',
  host: 'avkqerpv.execute-api.us-east-2.amazonaws.com',
  path: '/v1/items',
}, credentials);

fetch('https://avkqerpv.execute-api.us-east-2.amazonaws.com/v1/items', request);
```


### aws4.fetch

**aws4.fetch(url [, opts], credentials)**

**aws4.fetch(opts, credentials)**

`aws4.fetch` is a convenience wrapper around signing a request with `aws4` and then sending it off using `fetch`.

```js
aws4.fetch('https://avkqerpv.execute-api.us-east-2.amazonaws.com/v1/items', {
  service: 'execute-api',
  region: 'us-east-2',
}, credentials);


aws4.fetch({
  service: 'sqs',
  region: 'us-east-2',
  path: '/?Action=ListQueues',
}, credentials);
```

**aws4.fetch(Request, credentials)**

## Tests

`aws4-tiny` passes the AWS Sig V4 Test Suite. You can run it youself at [emdgroup.github.io/aws4-tiny/](https://emdgroup.github.io/aws4-tiny/) (open the dev console to see the test results). We also run automated tests on Browser Stack.

## FAQ

**Can I use `aws4-tiny` with NodeJS?**

Yes, but it's not recommended. The [aws4](https://github.com/mhart/aws4) package is actually much smaller and faster in a Node environment.

## Thanks

Thanks to [@mhart](https://github.com/mhart) for [aws4](https://github.com/mhart/aws4) which made this package possible.

Automated browser testing proudly supported by

<a href="https://www.browserstack.com/"><img alt="Browser Stack" src="https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" width="200" /></a>
