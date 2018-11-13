import sjcl from './sjcl';

export function byteLength(str) {
  return sjcl.bitArray.bitLength(sjcl.codec.utf8String.toBits(str)) / 8;
}
