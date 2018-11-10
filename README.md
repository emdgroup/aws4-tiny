[![Build Status](https://img.shields.io/travis/emdgroup/pipeline-changes/master.svg?style=flat-square)](https://travis-ci.org/emdgroup/pipeline-changes)
[![GitHub license](https://img.shields.io/github/license/emdgroup/pipeline-changes.svg?style=flat-square)](https://github.com/emdgroup/pipeline-changes/blob/master/LICENSE)
[![sponsored by](https://img.shields.io/badge/gzip-6kb-blue.svg?style=flat-square)](http://emdgroup.com)
[![sponsored by](https://img.shields.io/badge/sponsored%20by-emdgroup.com-ff55aa.svg?style=flat-square)](http://emdgroup.com)

# aws4-tiny

Minimal browser bundle with zero dependencies for signing requests using Amazon's
[AWS Signature Version 4](http://docs.amazonwebservices.com/general/latest/gr/signature-version-4.html).

This package is largely based off of the excellent work of [@mhart's](https://github.com/mhart) [aws4](https://github.com/mhart/aws4). While using `aws4` in the browser is possible, its footprint is rather large (325kb, or 100kb gzipped) due to the number of polyfills that need to be pulled in. `aws4-tiny` provides a few hand-crafted polyfills that were optimized for use with `aws4`.

`aws4-tiny` supports all modern browsers and IE 10+ at just 6kb (gzipped).

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

```js
var credentials = {
  accessKeyId: '',
  secretAccessKey: '',
  sessionToken: '', // only required for temporary credentials
};

var signature = aws4.sign({
  service: 'execute-api',
}, credentials);

fetch({
  headers: signature,
}).then(res => res.json()).then(res => console.log(res));
```

## Tests

`aws4-tiny` passes the AWS Sig V4 Test Suite. You can run it youself at [emdgroup.github.io/aws4-tiny/](https://emdgroup.github.io/aws4-tiny/) (open the dev console to see the test results). We also run automated tests on Browser Stack.

## FAQ

**Can I use `aws4-tiny` with NodeJS?**

Yes, but it's not recommended. The [aws4](https://github.com/mhart/aws4) package is actually much smaller and faster in a Node environment than `aws4-tiny`.

## Thanks

Thanks to [@mhart](https://github.com/mhart) for [aws4](https://github.com/mhart/aws4) which made this package possible.

Automated browser testing proudly supported by

<a href="https://www.browserstack.com/"><img alt="Browser Stack" src="https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" width="200" /></a>
