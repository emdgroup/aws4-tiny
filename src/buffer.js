import sjcl from "./sjcl";

export default class Buffer {
  static byteLength(str) {
    return sjcl.bitArray.bitLength(sjcl.codec.utf8String.toBits(str)) / 8;
  }
}
