import aws4, { RequestSigner } from 'aws4';

import urllib from 'url';

aws4.fetch = (...args) => {
  if (!('fetch' in window)) throw new Error('fetch is not defined');
  let signer;
  if (typeof args[0] === 'string') {
    const {
      protocol, host, port, pathname, search,
    } = urllib.parse(args[0]);
    if (args.length === 2) {
      signer = new RequestSigner(
        {
          host,
          port,
          path: `${pathname}${search || ''}`,
          protocol,
        },
        args[1],
      );
    } else {
      const [, opts, credentials] = args;
      signer = new RequestSigner(
        {
          host,
          port,
          path: `${pathname}${search || ''}`,
          protocol,
          ...opts,
        },
        credentials,
      );
    }
  } else {
    signer = new RequestSigner(...args);
    signer.request.protocol = 'https:';
  }
  const { pathname, search } = urllib.parse('path' in signer.request ? signer.request.path : '');
  const url = urllib.format({
    pathname,
    search,
    ...signer.request,
  });
  signer.sign();
  return fetch(url, signer.request);
};

export default aws4;
