(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aws4"] = factory();
	else
		root["aws4"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/** @fileOverview Javascript cryptography implementation.
 *
 * Crush to remove comments, shorten variable names and
 * generally reduce transmission size.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/*jslint indent: 2, bitwise: false, nomen: false, plusplus: false, white: false, regexp: false */

/*global document, window, escape, unescape, module, require, Uint32Array */

/**
 * The Stanford Javascript Crypto Library, top-level namespace.
 * @namespace
 */

var sjcl = {
  /**
   * Symmetric ciphers.
   * @namespace
   */
  cipher: {},

  /**
   * Hash functions.  Right now only SHA256 is implemented.
   * @namespace
   */
  hash: {},

  /**
   * Key exchange functions.  Right now only SRP is implemented.
   * @namespace
   */
  keyexchange: {},

  /**
   * Cipher modes of operation.
   * @namespace
   */
  mode: {},

  /**
   * Miscellaneous.  HMAC and PBKDF2.
   * @namespace
   */
  misc: {},

  /**
   * Bit array encoders and decoders.
   * @namespace
   *
   * @description
   * The members of this namespace are functions which translate between
   * SJCL's bitArrays and other objects (usually strings).  Because it
   * isn't always clear which direction is encoding and which is decoding,
   * the method names are "fromBits" and "toBits".
   */
  codec: {},

  /**
   * Exceptions.
   * @namespace
   */
  exception: {
    /**
     * Ciphertext is corrupt.
     * @constructor
     */
    corrupt: function corrupt(message) {
      this.toString = function () {
        return "CORRUPT: " + this.message;
      };

      this.message = message;
    },

    /**
     * Invalid parameter.
     * @constructor
     */
    invalid: function invalid(message) {
      this.toString = function () {
        return "INVALID: " + this.message;
      };

      this.message = message;
    },

    /**
     * Bug or missing feature in SJCL.
     * @constructor
     */
    bug: function bug(message) {
      this.toString = function () {
        return "BUG: " + this.message;
      };

      this.message = message;
    },

    /**
     * Something isn't ready.
     * @constructor
     */
    notReady: function notReady(message) {
      this.toString = function () {
        return "NOT READY: " + this.message;
      };

      this.message = message;
    }
  }
};
/** @fileOverview HMAC implementation.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/** HMAC with the specified hash function.
 * @constructor
 * @param {bitArray} key the key for HMAC.
 * @param {Object} [Hash=sjcl.hash.sha256] The hash function to use.
 */

sjcl.misc.hmac = function (key, Hash) {
  this._hash = Hash = Hash || sjcl.hash.sha256;
  var exKey = [[], []],
      i,
      bs = Hash.prototype.blockSize / 32;
  this._baseHash = [new Hash(), new Hash()];

  if (key.length > bs) {
    key = Hash.hash(key);
  }

  for (i = 0; i < bs; i++) {
    exKey[0][i] = key[i] ^ 0x36363636;
    exKey[1][i] = key[i] ^ 0x5C5C5C5C;
  }

  this._baseHash[0].update(exKey[0]);

  this._baseHash[1].update(exKey[1]);

  this._resultHash = new Hash(this._baseHash[0]);
};
/** HMAC with the specified hash function.  Also called encrypt since it's a prf.
 * @param {bitArray|String} data The data to mac.
 */


sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function (data) {
  if (!this._updated) {
    this.update(data);
    return this.digest(data);
  } else {
    throw new sjcl.exception.invalid("encrypt on already updated hmac called!");
  }
};

sjcl.misc.hmac.prototype.reset = function () {
  this._resultHash = new this._hash(this._baseHash[0]);
  this._updated = false;
};

sjcl.misc.hmac.prototype.update = function (data) {
  this._updated = true;

  this._resultHash.update(data);
};

sjcl.misc.hmac.prototype.digest = function () {
  var w = this._resultHash.finalize(),
      result = new this._hash(this._baseHash[1]).update(w).finalize();

  this.reset();
  return result;
};
/** @fileOverview Javascript SHA-256 implementation.
 *
 * An older version of this implementation is available in the public
 * domain, but this one is (c) Emily Stark, Mike Hamburg, Dan Boneh,
 * Stanford University 2008-2010 and BSD-licensed for liability
 * reasons.
 *
 * Special thanks to Aldo Cortesi for pointing out several bugs in
 * this code.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/**
 * Context for a SHA-256 operation in progress.
 * @constructor
 */


sjcl.hash.sha256 = function (hash) {
  if (!this._key[0]) {
    this._precompute();
  }

  if (hash) {
    this._h = hash._h.slice(0);
    this._buffer = hash._buffer.slice(0);
    this._length = hash._length;
  } else {
    this.reset();
  }
};
/**
 * Hash a string or an array of words.
 * @static
 * @param {bitArray|String} data the data to hash.
 * @return {bitArray} The hash value, an array of 16 big-endian words.
 */


sjcl.hash.sha256.hash = function (data) {
  return new sjcl.hash.sha256().update(data).finalize();
};

sjcl.hash.sha256.prototype = {
  /**
   * The hash's block size, in bits.
   * @constant
   */
  blockSize: 512,

  /**
   * Reset the hash state.
   * @return this
   */
  reset: function reset() {
    this._h = this._init.slice(0);
    this._buffer = [];
    this._length = 0;
    return this;
  },

  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update: function update(data) {
    if (typeof data === "string") {
      data = sjcl.codec.utf8String.toBits(data);
    }

    var i,
        b = this._buffer = sjcl.bitArray.concat(this._buffer, data),
        ol = this._length,
        nl = this._length = ol + sjcl.bitArray.bitLength(data);

    if (nl > 9007199254740991) {
      throw new sjcl.exception.invalid("Cannot hash more than 2^53 - 1 bits");
    }

    if (typeof Uint32Array !== 'undefined') {
      var c = new Uint32Array(b);
      var j = 0;

      for (i = 512 + ol - (512 + ol & 511); i <= nl; i += 512) {
        this._block(c.subarray(16 * j, 16 * (j + 1)));

        j += 1;
      }

      b.splice(0, 16 * j);
    } else {
      for (i = 512 + ol - (512 + ol & 511); i <= nl; i += 512) {
        this._block(b.splice(0, 16));
      }
    }

    return this;
  },

  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 8 big-endian words.
   */
  finalize: function finalize() {
    var i,
        b = this._buffer,
        h = this._h; // Round out and push the buffer

    b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1, 1)]); // Round out the buffer to a multiple of 16 words, less the 2 length words.

    for (i = b.length + 2; i & 15; i++) {
      b.push(0);
    } // append the length


    b.push(Math.floor(this._length / 0x100000000));
    b.push(this._length | 0);

    while (b.length) {
      this._block(b.splice(0, 16));
    }

    this.reset();
    return h;
  },

  /**
   * The SHA-256 initialization vector, to be precomputed.
   * @private
   */
  _init: [],

  /*
  _init:[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],
  */

  /**
   * The SHA-256 hash key, to be precomputed.
   * @private
   */
  _key: [],

  /*
  _key:
    [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
     0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
     0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
     0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
     0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
     0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
     0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
     0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2],
  */

  /**
   * Function to precompute _init and _key.
   * @private
   */
  _precompute: function _precompute() {
    var i = 0,
        prime = 2,
        factor,
        isPrime;

    function frac(x) {
      return (x - Math.floor(x)) * 0x100000000 | 0;
    }

    for (; i < 64; prime++) {
      isPrime = true;

      for (factor = 2; factor * factor <= prime; factor++) {
        if (prime % factor === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        if (i < 8) {
          this._init[i] = frac(Math.pow(prime, 1 / 2));
        }

        this._key[i] = frac(Math.pow(prime, 1 / 3));
        i++;
      }
    }
  },

  /**
   * Perform one cycle of SHA-256.
   * @param {Uint32Array|bitArray} w one block of words.
   * @private
   */
  _block: function _block(w) {
    var i,
        tmp,
        a,
        b,
        h = this._h,
        k = this._key,
        h0 = h[0],
        h1 = h[1],
        h2 = h[2],
        h3 = h[3],
        h4 = h[4],
        h5 = h[5],
        h6 = h[6],
        h7 = h[7];
    /* Rationale for placement of |0 :
     * If a value can overflow is original 32 bits by a factor of more than a few
     * million (2^23 ish), there is a possibility that it might overflow the
     * 53-bit mantissa and lose precision.
     *
     * To avoid this, we clamp back to 32 bits by |'ing with 0 on any value that
     * propagates around the loop, and on the hash state h[].  I don't believe
     * that the clamps on h4 and on h0 are strictly necessary, but it's close
     * (for h4 anyway), and better safe than sorry.
     *
     * The clamps on h[] are necessary for the output to be correct even in the
     * common case and for short inputs.
     */

    for (i = 0; i < 64; i++) {
      // load up the input word for this round
      if (i < 16) {
        tmp = w[i];
      } else {
        a = w[i + 1 & 15];
        b = w[i + 14 & 15];
        tmp = w[i & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i & 15] + w[i + 9 & 15] | 0;
      }

      tmp = tmp + h7 + (h4 >>> 6 ^ h4 >>> 11 ^ h4 >>> 25 ^ h4 << 26 ^ h4 << 21 ^ h4 << 7) + (h6 ^ h4 & (h5 ^ h6)) + k[i]; // | 0;
      // shift register

      h7 = h6;
      h6 = h5;
      h5 = h4;
      h4 = h3 + tmp | 0;
      h3 = h2;
      h2 = h1;
      h1 = h0;
      h0 = tmp + (h1 & h2 ^ h3 & (h1 ^ h2)) + (h1 >>> 2 ^ h1 >>> 13 ^ h1 >>> 22 ^ h1 << 30 ^ h1 << 19 ^ h1 << 10) | 0;
    }

    h[0] = h[0] + h0 | 0;
    h[1] = h[1] + h1 | 0;
    h[2] = h[2] + h2 | 0;
    h[3] = h[3] + h3 | 0;
    h[4] = h[4] + h4 | 0;
    h[5] = h[5] + h5 | 0;
    h[6] = h[6] + h6 | 0;
    h[7] = h[7] + h7 | 0;
  }
};
/** @fileOverview Arrays of bits, encoded as arrays of Numbers.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/**
 * Arrays of bits, encoded as arrays of Numbers.
 * @namespace
 * @description
 * <p>
 * These objects are the currency accepted by SJCL's crypto functions.
 * </p>
 *
 * <p>
 * Most of our crypto primitives operate on arrays of 4-byte words internally,
 * but many of them can take arguments that are not a multiple of 4 bytes.
 * This library encodes arrays of bits (whose size need not be a multiple of 8
 * bits) as arrays of 32-bit words.  The bits are packed, big-endian, into an
 * array of words, 32 bits at a time.  Since the words are double-precision
 * floating point numbers, they fit some extra data.  We use this (in a private,
 * possibly-changing manner) to encode the number of bits actually  present
 * in the last word of the array.
 * </p>
 *
 * <p>
 * Because bitwise ops clear this out-of-band data, these arrays can be passed
 * to ciphers like AES which want arrays of words.
 * </p>
 */

sjcl.bitArray = {
  /**
   * Array slices in units of bits.
   * @param {bitArray} a The array to slice.
   * @param {Number} bstart The offset to the start of the slice, in bits.
   * @param {Number} bend The offset to the end of the slice, in bits.  If this is undefined,
   * slice until the end of the array.
   * @return {bitArray} The requested slice.
   */
  bitSlice: function bitSlice(a, bstart, bend) {
    a = sjcl.bitArray._shiftRight(a.slice(bstart / 32), 32 - (bstart & 31)).slice(1);
    return bend === undefined ? a : sjcl.bitArray.clamp(a, bend - bstart);
  },

  /**
   * Extract a number packed into a bit array.
   * @param {bitArray} a The array to slice.
   * @param {Number} bstart The offset to the start of the slice, in bits.
   * @param {Number} blength The length of the number to extract.
   * @return {Number} The requested slice.
   */
  extract: function extract(a, bstart, blength) {
    // FIXME: this Math.floor is not necessary at all, but for some reason
    // seems to suppress a bug in the Chromium JIT.
    var x,
        sh = Math.floor(-bstart - blength & 31);

    if ((bstart + blength - 1 ^ bstart) & -32) {
      // it crosses a boundary
      x = a[bstart / 32 | 0] << 32 - sh ^ a[bstart / 32 + 1 | 0] >>> sh;
    } else {
      // within a single word
      x = a[bstart / 32 | 0] >>> sh;
    }

    return x & (1 << blength) - 1;
  },

  /**
   * Concatenate two bit arrays.
   * @param {bitArray} a1 The first array.
   * @param {bitArray} a2 The second array.
   * @return {bitArray} The concatenation of a1 and a2.
   */
  concat: function concat(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return a1.concat(a2);
    }

    var last = a1[a1.length - 1],
        shift = sjcl.bitArray.getPartial(last);

    if (shift === 32) {
      return a1.concat(a2);
    } else {
      return sjcl.bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
    }
  },

  /**
   * Find the length of an array of bits.
   * @param {bitArray} a The array.
   * @return {Number} The length of a, in bits.
   */
  bitLength: function bitLength(a) {
    var l = a.length,
        x;

    if (l === 0) {
      return 0;
    }

    x = a[l - 1];
    return (l - 1) * 32 + sjcl.bitArray.getPartial(x);
  },

  /**
   * Truncate an array.
   * @param {bitArray} a The array.
   * @param {Number} len The length to truncate to, in bits.
   * @return {bitArray} A new array, truncated to len bits.
   */
  clamp: function clamp(a, len) {
    if (a.length * 32 < len) {
      return a;
    }

    a = a.slice(0, Math.ceil(len / 32));
    var l = a.length;
    len = len & 31;

    if (l > 0 && len) {
      a[l - 1] = sjcl.bitArray.partial(len, a[l - 1] & 0x80000000 >> len - 1, 1);
    }

    return a;
  },

  /**
   * Make a partial word for a bit array.
   * @param {Number} len The number of bits in the word.
   * @param {Number} x The bits.
   * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
   * @return {Number} The partial word.
   */
  partial: function partial(len, x, _end) {
    if (len === 32) {
      return x;
    }

    return (_end ? x | 0 : x << 32 - len) + len * 0x10000000000;
  },

  /**
   * Get the number of bits used by a partial word.
   * @param {Number} x The partial word.
   * @return {Number} The number of bits used by the partial word.
   */
  getPartial: function getPartial(x) {
    return Math.round(x / 0x10000000000) || 32;
  },

  /**
   * Compare two arrays for equality in a predictable amount of time.
   * @param {bitArray} a The first array.
   * @param {bitArray} b The second array.
   * @return {boolean} true if a == b; false otherwise.
   */
  equal: function equal(a, b) {
    if (sjcl.bitArray.bitLength(a) !== sjcl.bitArray.bitLength(b)) {
      return false;
    }

    var x = 0,
        i;

    for (i = 0; i < a.length; i++) {
      x |= a[i] ^ b[i];
    }

    return x === 0;
  },

  /** Shift an array right.
   * @param {bitArray} a The array to shift.
   * @param {Number} shift The number of bits to shift.
   * @param {Number} [carry=0] A byte to carry in
   * @param {bitArray} [out=[]] An array to prepend to the output.
   * @private
   */
  _shiftRight: function _shiftRight(a, shift, carry, out) {
    var i,
        last2 = 0,
        shift2;

    if (out === undefined) {
      out = [];
    }

    for (; shift >= 32; shift -= 32) {
      out.push(carry);
      carry = 0;
    }

    if (shift === 0) {
      return out.concat(a);
    }

    for (i = 0; i < a.length; i++) {
      out.push(carry | a[i] >>> shift);
      carry = a[i] << 32 - shift;
    }

    last2 = a.length ? a[a.length - 1] : 0;
    shift2 = sjcl.bitArray.getPartial(last2);
    out.push(sjcl.bitArray.partial(shift + shift2 & 31, shift + shift2 > 32 ? carry : out.pop(), 1));
    return out;
  },

  /** xor a block of 4 words together.
   * @private
   */
  _xor4: function _xor4(x, y) {
    return [x[0] ^ y[0], x[1] ^ y[1], x[2] ^ y[2], x[3] ^ y[3]];
  },

  /** byteswap a word array inplace.
   * (does not handle partial words)
   * @param {sjcl.bitArray} a word array
   * @return {sjcl.bitArray} byteswapped array
   */
  byteswapM: function byteswapM(a) {
    var i,
        v,
        m = 0xff00;

    for (i = 0; i < a.length; ++i) {
      v = a[i];
      a[i] = v >>> 24 | v >>> 8 & m | (v & m) << 8 | v << 24;
    }

    return a;
  }
};
/** @fileOverview Bit array codec implementations.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/**
 * UTF-8 strings
 * @namespace
 */

sjcl.codec.utf8String = {
  /** Convert from a bitArray to a UTF-8 string. */
  fromBits: function fromBits(arr) {
    var out = "",
        bl = sjcl.bitArray.bitLength(arr),
        i,
        tmp;

    for (i = 0; i < bl / 8; i++) {
      if ((i & 3) === 0) {
        tmp = arr[i / 4];
      }

      out += String.fromCharCode(tmp >>> 8 >>> 8 >>> 8);
      tmp <<= 8;
    }

    return decodeURIComponent(escape(out));
  },

  /** Convert from a UTF-8 string to a bitArray. */
  toBits: function toBits(str) {
    str = unescape(encodeURIComponent(str));
    var out = [],
        i,
        tmp = 0;

    for (i = 0; i < str.length; i++) {
      tmp = tmp << 8 | str.charCodeAt(i);

      if ((i & 3) === 3) {
        out.push(tmp);
        tmp = 0;
      }
    }

    if (i & 3) {
      out.push(sjcl.bitArray.partial(8 * (i & 3), tmp));
    }

    return out;
  }
};
/** @fileOverview Bit array codec implementations.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/**
 * Hexadecimal
 * @namespace
 */

sjcl.codec.hex = {
  /** Convert from a bitArray to a hex string. */
  fromBits: function fromBits(arr) {
    var out = "",
        i;

    for (i = 0; i < arr.length; i++) {
      out += ((arr[i] | 0) + 0xF00000000000).toString(16).substr(4);
    }

    return out.substr(0, sjcl.bitArray.bitLength(arr) / 4); //.replace(/(.{8})/g, "$1 ");
  },

  /** Convert from a hex string to a bitArray. */
  toBits: function toBits(str) {
    var i,
        out = [],
        len;
    str = str.replace(/\s|0x/g, "");
    len = str.length;
    str = str + "00000000";

    for (i = 0; i < str.length; i += 8) {
      out.push(parseInt(str.substr(i, 8), 16) ^ 0);
    }

    return sjcl.bitArray.clamp(out, len * 4);
  }
};

if ( true && module.exports) {
  module.exports = sjcl;
}

if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return sjcl;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var aws4 = exports,
    url = __webpack_require__(4),
    querystring = __webpack_require__(5),
    crypto = __webpack_require__(8),
    lru = __webpack_require__(9),
    credentialsCache = lru(1000)

// http://docs.amazonwebservices.com/general/latest/gr/signature-version-4.html

function hmac(key, string, encoding) {
  return crypto.createHmac('sha256', key).update(string, 'utf8').digest(encoding)
}

function hash(string, encoding) {
  return crypto.createHash('sha256').update(string, 'utf8').digest(encoding)
}

// This function assumes the string has already been percent encoded
function encodeRfc3986(urlEncodedString) {
  return urlEncodedString.replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

// request: { path | body, [host], [method], [headers], [service], [region] }
// credentials: { accessKeyId, secretAccessKey, [sessionToken] }
function RequestSigner(request, credentials) {

  if (typeof request === 'string') request = url.parse(request)

  var headers = request.headers = (request.headers || {}),
      hostParts = this.matchHost(request.hostname || request.host || headers.Host || headers.host)

  this.request = request
  this.credentials = credentials || this.defaultCredentials()

  this.service = request.service || hostParts[0] || ''
  this.region = request.region || hostParts[1] || 'us-east-1'

  // SES uses a different domain from the service name
  if (this.service === 'email') this.service = 'ses'

  if (!request.method && request.body)
    request.method = 'POST'

  if (!headers.Host && !headers.host) {
    headers.Host = request.hostname || request.host || this.createHost()

    // If a port is specified explicitly, use it as is
    if (request.port)
      headers.Host += ':' + request.port
  }
  if (!request.hostname && !request.host)
    request.hostname = headers.Host || headers.host

  this.isCodeCommitGit = this.service === 'codecommit' && request.method === 'GIT'
}

RequestSigner.prototype.matchHost = function(host) {
  var match = (host || '').match(/([^\.]+)\.(?:([^\.]*)\.)?amazonaws\.com(\.cn)?$/)
  var hostParts = (match || []).slice(1, 3)

  // ES's hostParts are sometimes the other way round, if the value that is expected
  // to be region equals ‘es’ switch them back
  // e.g. search-cluster-name-aaaa00aaaa0aaa0aaaaaaa0aaa.us-east-1.es.amazonaws.com
  if (hostParts[1] === 'es')
    hostParts = hostParts.reverse()

  return hostParts
}

// http://docs.aws.amazon.com/general/latest/gr/rande.html
RequestSigner.prototype.isSingleRegion = function() {
  // Special case for S3 and SimpleDB in us-east-1
  if (['s3', 'sdb'].indexOf(this.service) >= 0 && this.region === 'us-east-1') return true

  return ['cloudfront', 'ls', 'route53', 'iam', 'importexport', 'sts']
    .indexOf(this.service) >= 0
}

RequestSigner.prototype.createHost = function() {
  var region = this.isSingleRegion() ? '' :
        (this.service === 's3' && this.region !== 'us-east-1' ? '-' : '.') + this.region,
      service = this.service === 'ses' ? 'email' : this.service
  return service + region + '.amazonaws.com'
}

RequestSigner.prototype.prepareRequest = function() {
  this.parsePath()

  var request = this.request, headers = request.headers, query

  if (request.signQuery) {

    this.parsedPath.query = query = this.parsedPath.query || {}

    if (this.credentials.sessionToken)
      query['X-Amz-Security-Token'] = this.credentials.sessionToken

    if (this.service === 's3' && !query['X-Amz-Expires'])
      query['X-Amz-Expires'] = 86400

    if (query['X-Amz-Date'])
      this.datetime = query['X-Amz-Date']
    else
      query['X-Amz-Date'] = this.getDateTime()

    query['X-Amz-Algorithm'] = 'AWS4-HMAC-SHA256'
    query['X-Amz-Credential'] = this.credentials.accessKeyId + '/' + this.credentialString()
    query['X-Amz-SignedHeaders'] = this.signedHeaders()

  } else {

    if (!request.doNotModifyHeaders && !this.isCodeCommitGit) {
      if (request.body && !headers['Content-Type'] && !headers['content-type'])
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'

      if (request.body && !headers['Content-Length'] && !headers['content-length'])
        headers['Content-Length'] = Buffer.byteLength(request.body)

      if (this.credentials.sessionToken && !headers['X-Amz-Security-Token'] && !headers['x-amz-security-token'])
        headers['X-Amz-Security-Token'] = this.credentials.sessionToken

      if (this.service === 's3' && !headers['X-Amz-Content-Sha256'] && !headers['x-amz-content-sha256'])
        headers['X-Amz-Content-Sha256'] = hash(this.request.body || '', 'hex')

      if (headers['X-Amz-Date'] || headers['x-amz-date'])
        this.datetime = headers['X-Amz-Date'] || headers['x-amz-date']
      else
        headers['X-Amz-Date'] = this.getDateTime()
    }

    delete headers.Authorization
    delete headers.authorization
  }
}

RequestSigner.prototype.sign = function() {
  if (!this.parsedPath) this.prepareRequest()

  if (this.request.signQuery) {
    this.parsedPath.query['X-Amz-Signature'] = this.signature()
  } else {
    this.request.headers.Authorization = this.authHeader()
  }

  this.request.path = this.formatPath()

  return this.request
}

RequestSigner.prototype.getDateTime = function() {
  if (!this.datetime) {
    var headers = this.request.headers,
      date = new Date(headers.Date || headers.date || new Date)

    this.datetime = date.toISOString().replace(/[:\-]|\.\d{3}/g, '')

    // Remove the trailing 'Z' on the timestamp string for CodeCommit git access
    if (this.isCodeCommitGit) this.datetime = this.datetime.slice(0, -1)
  }
  return this.datetime
}

RequestSigner.prototype.getDate = function() {
  return this.getDateTime().substr(0, 8)
}

RequestSigner.prototype.authHeader = function() {
  return [
    'AWS4-HMAC-SHA256 Credential=' + this.credentials.accessKeyId + '/' + this.credentialString(),
    'SignedHeaders=' + this.signedHeaders(),
    'Signature=' + this.signature(),
  ].join(', ')
}

RequestSigner.prototype.signature = function() {
  var date = this.getDate(),
      cacheKey = [this.credentials.secretAccessKey, date, this.region, this.service].join(),
      kDate, kRegion, kService, kCredentials = credentialsCache.get(cacheKey)
  if (!kCredentials) {
    kDate = hmac('AWS4' + this.credentials.secretAccessKey, date)
    kRegion = hmac(kDate, this.region)
    kService = hmac(kRegion, this.service)
    kCredentials = hmac(kService, 'aws4_request')
    credentialsCache.set(cacheKey, kCredentials)
  }
  return hmac(kCredentials, this.stringToSign(), 'hex')
}

RequestSigner.prototype.stringToSign = function() {
  return [
    'AWS4-HMAC-SHA256',
    this.getDateTime(),
    this.credentialString(),
    hash(this.canonicalString(), 'hex'),
  ].join('\n')
}

RequestSigner.prototype.canonicalString = function() {
  if (!this.parsedPath) this.prepareRequest()

  var pathStr = this.parsedPath.path,
      query = this.parsedPath.query,
      headers = this.request.headers,
      queryStr = '',
      normalizePath = this.service !== 's3',
      decodePath = this.service === 's3' || this.request.doNotEncodePath,
      decodeSlashesInPath = this.service === 's3',
      firstValOnly = this.service === 's3',
      bodyHash

  if (this.service === 's3' && this.request.signQuery) {
    bodyHash = 'UNSIGNED-PAYLOAD'
  } else if (this.isCodeCommitGit) {
    bodyHash = ''
  } else {
    bodyHash = headers['X-Amz-Content-Sha256'] || headers['x-amz-content-sha256'] ||
      hash(this.request.body || '', 'hex')
  }

  if (query) {
    queryStr = encodeRfc3986(querystring.stringify(Object.keys(query).sort().reduce(function(obj, key) {
      if (!key) return obj
      obj[key] = !Array.isArray(query[key]) ? query[key] :
        (firstValOnly ? query[key][0] : query[key].slice().sort())
      return obj
    }, {})))
  }
  if (pathStr !== '/') {
    if (normalizePath) pathStr = pathStr.replace(/\/{2,}/g, '/')
    pathStr = pathStr.split('/').reduce(function(path, piece) {
      if (normalizePath && piece === '..') {
        path.pop()
      } else if (!normalizePath || piece !== '.') {
        if (decodePath) piece = decodeURIComponent(piece)
        path.push(encodeRfc3986(encodeURIComponent(piece)))
      }
      return path
    }, []).join('/')
    if (pathStr[0] !== '/') pathStr = '/' + pathStr
    if (decodeSlashesInPath) pathStr = pathStr.replace(/%2F/g, '/')
  }

  return [
    this.request.method || 'GET',
    pathStr,
    queryStr,
    this.canonicalHeaders() + '\n',
    this.signedHeaders(),
    bodyHash,
  ].join('\n')
}

RequestSigner.prototype.canonicalHeaders = function() {
  var headers = this.request.headers
  function trimAll(header) {
    return header.toString().trim().replace(/\s+/g, ' ')
  }
  return Object.keys(headers)
    .sort(function(a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1 })
    .map(function(key) { return key.toLowerCase() + ':' + trimAll(headers[key]) })
    .join('\n')
}

RequestSigner.prototype.signedHeaders = function() {
  return Object.keys(this.request.headers)
    .map(function(key) { return key.toLowerCase() })
    .sort()
    .join(';')
}

RequestSigner.prototype.credentialString = function() {
  return [
    this.getDate(),
    this.region,
    this.service,
    'aws4_request',
  ].join('/')
}

RequestSigner.prototype.defaultCredentials = function() {
  var env = process.env
  return {
    accessKeyId: env.AWS_ACCESS_KEY_ID || env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY || env.AWS_SECRET_KEY,
    sessionToken: env.AWS_SESSION_TOKEN,
  }
}

RequestSigner.prototype.parsePath = function() {
  var path = this.request.path || '/',
      queryIx = path.indexOf('?'),
      query = null

  if (queryIx >= 0) {
    query = querystring.parse(path.slice(queryIx + 1))
    path = path.slice(0, queryIx)
  }

  // S3 doesn't always encode characters > 127 correctly and
  // all services don't encode characters > 255 correctly
  // So if there are non-reserved chars (and it's not already all % encoded), just encode them all
  if (/[^0-9A-Za-z!'()*\-._~%/]/.test(path)) {
    path = path.split('/').map(function(piece) {
      return encodeURIComponent(decodeURIComponent(piece))
    }).join('/')
  }

  this.parsedPath = {
    path: path,
    query: query,
  }
}

RequestSigner.prototype.formatPath = function() {
  var path = this.parsedPath.path,
      query = this.parsedPath.query

  if (!query) return path

  // Services don't support empty query string keys
  if (query[''] != null) delete query['']

  return path + '?' + encodeRfc3986(querystring.stringify(query))
}

aws4.RequestSigner = RequestSigner

aws4.sign = function(request, credentials) {
  return new RequestSigner(request, credentials).sign()
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var aws4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws4__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (aws4__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Buffer; });
/* harmony import */ var _sjcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _sjcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sjcl__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Buffer =
/*#__PURE__*/
function () {
  function Buffer() {
    _classCallCheck(this, Buffer);
  }

  _createClass(Buffer, null, [{
    key: "byteLength",
    value: function byteLength(str) {
      return _sjcl__WEBPACK_IMPORTED_MODULE_0___default.a.bitArray.bitLength(_sjcl__WEBPACK_IMPORTED_MODULE_0___default.a.codec.utf8String.toBits(str)) / 8;
    }
  }]);

  return Buffer;
}();



/***/ }),
/* 4 */
/***/ (function(module, exports) {

var urlParseRE = /^(?:(?:(([^:\/#\?]+:)?(?:(?:\/\/)(?:(?:(?:([^:@\/#\?]+)(?:\:([^:@\/#\?]*))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/

module.exports.parse = function (url) {
  var matches = urlParseRE.exec(url)
  return {
    href: matches[0],
    origin: matches[1],
    protocol: matches[2],
    username: matches[3],
    password: matches[4],
    host: matches[5],
    hostname: matches[6],
    port: matches[7],
    pathname: matches[8],
    search: matches[9],
    hash: matches[10]
  }
}

module.exports.format = function (url) {
  var protocol = url.protocol ? (url.protocol + '//') : ''
  var port = url.port ? (':' + url.port) : ''
  var origin = ''
  if (url.origin) origin = url.origin
  else if (url.host) origin = protocol + url.host
  else if (url.hostname) origin = protocol + url.hostname + port
  var pathname = url.pathname || ''
  var search = url.search || ''
  var hash = url.hash || ''
  return origin + pathname + search + hash
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(6);
exports.encode = exports.stringify = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHmac", function() { return createHmac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHash", function() { return createHash; });
/* harmony import */ var _sjcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _sjcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sjcl__WEBPACK_IMPORTED_MODULE_0__);
/* eslint new-cap: 0 */

function createHmac(algorithm, key) {
  var mac = new _sjcl__WEBPACK_IMPORTED_MODULE_0___default.a.misc.hmac(typeof key === 'string' ? _sjcl__WEBPACK_IMPORTED_MODULE_0___default.a.codec.utf8String.toBits(key) : key);
  return {
    update: function update(data) {
      mac.update(data);
      return {
        digest: function digest(encoding) {
          var result = mac.digest();
          result = encoding === 'hex' ? _sjcl__WEBPACK_IMPORTED_MODULE_0___default.a.codec.hex.fromBits(result) : result;
          return result;
        }
      };
    }
  };
}
function createHash() {
  var hash = new _sjcl__WEBPACK_IMPORTED_MODULE_0___default.a.hash.sha256();
  return {
    update: function update(data) {
      hash.update(data instanceof Int8Array ? _sjcl__WEBPACK_IMPORTED_MODULE_0___default.a.codec.arrayBuffer.toBits(data.buffer) : data);
      return {
        digest: function digest() {
          return _sjcl__WEBPACK_IMPORTED_MODULE_0___default.a.codec.hex.fromBits(hash.finalize());
        }
      };
    }
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(size) {
  return new LruCache(size)
}

function LruCache(size) {
  this.capacity = size | 0
  this.map = Object.create(null)
  this.list = new DoublyLinkedList()
}

LruCache.prototype.get = function(key) {
  var node = this.map[key]
  if (node == null) return undefined
  this.used(node)
  return node.val
}

LruCache.prototype.set = function(key, val) {
  var node = this.map[key]
  if (node != null) {
    node.val = val
  } else {
    if (!this.capacity) this.prune()
    if (!this.capacity) return false
    node = new DoublyLinkedNode(key, val)
    this.map[key] = node
    this.capacity--
  }
  this.used(node)
  return true
}

LruCache.prototype.used = function(node) {
  this.list.moveToFront(node)
}

LruCache.prototype.prune = function() {
  var node = this.list.pop()
  if (node != null) {
    delete this.map[node.key]
    this.capacity++
  }
}


function DoublyLinkedList() {
  this.firstNode = null
  this.lastNode = null
}

DoublyLinkedList.prototype.moveToFront = function(node) {
  if (this.firstNode == node) return

  this.remove(node)

  if (this.firstNode == null) {
    this.firstNode = node
    this.lastNode = node
    node.prev = null
    node.next = null
  } else {
    node.prev = null
    node.next = this.firstNode
    node.next.prev = node
    this.firstNode = node
  }
}

DoublyLinkedList.prototype.pop = function() {
  var lastNode = this.lastNode
  if (lastNode != null) {
    this.remove(lastNode)
  }
  return lastNode
}

DoublyLinkedList.prototype.remove = function(node) {
  if (this.firstNode == node) {
    this.firstNode = node.next
  } else if (node.prev != null) {
    node.prev.next = node.next
  }
  if (this.lastNode == node) {
    this.lastNode = node.prev
  } else if (node.next != null) {
    node.next.prev = node.prev
  }
}


function DoublyLinkedNode(key, val) {
  this.key = key
  this.val = val
  this.prev = null
  this.next = null
}


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=aws4.js.map