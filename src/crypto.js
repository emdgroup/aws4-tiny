/* eslint new-cap: 0 */

import sjcl from './sjcl';

export function createHmac(algorithm, key) {
  const mac = new sjcl.misc.hmac(typeof key === 'string' ? sjcl.codec.utf8String.toBits(key) : key);
  return {
    update: (data) => {
      mac.update(data);
      return {
        digest: (encoding) => {
          let result = mac.digest();
          result = encoding === 'hex' ? sjcl.codec.hex.fromBits(result) : result;
          return result;
        },
      };
    },
  };
}

export function createHash() {
  const hash = new sjcl.hash.sha256();
  return {
    update: (data) => {
      hash.update(data);
      return {
        digest: () => sjcl.codec.hex.fromBits(hash.finalize()),
      };
    },
  };
}
