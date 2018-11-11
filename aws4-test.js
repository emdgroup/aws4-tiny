(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aws4test"] = factory();
	else
		root["aws4test"] = factory();
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
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const assert = __webpack_require__(3);

window = {};
const aws4 = __webpack_require__(7);
//const aws4 = require('../aws4/aws4');
const RequestSigner = aws4.RequestSigner;

const tests = __webpack_require__(8);


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(4);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
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

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(5);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(6);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){"use strict";var n,i={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};i.misc.hmac=function(t,e){this._hash=e=e||i.hash.sha256;var r,n=[[],[]],s=e.prototype.blockSize/32;for(this._baseHash=[new e,new e],t.length>s&&(t=e.hash(t)),r=0;r<s;r++)n[0][r]=909522486^t[r],n[1][r]=1549556828^t[r];this._baseHash[0].update(n[0]),this._baseHash[1].update(n[1]),this._resultHash=new e(this._baseHash[0])},i.misc.hmac.prototype.encrypt=i.misc.hmac.prototype.mac=function(t){if(this._updated)throw new i.exception.invalid("encrypt on already updated hmac called!");return this.update(t),this.digest(t)},i.misc.hmac.prototype.reset=function(){this._resultHash=new this._hash(this._baseHash[0]),this._updated=!1},i.misc.hmac.prototype.update=function(t){this._updated=!0,this._resultHash.update(t)},i.misc.hmac.prototype.digest=function(){var t=this._resultHash.finalize(),e=new this._hash(this._baseHash[1]).update(t).finalize();return this.reset(),e},i.hash.sha256=function(t){this._key[0]||this._precompute(),t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset()},i.hash.sha256.hash=function(t){return(new i.hash.sha256).update(t).finalize()},i.hash.sha256.prototype={blockSize:512,reset:function(){return this._h=this._init.slice(0),this._buffer=[],this._length=0,this},update:function(t){"string"==typeof t&&(t=i.codec.utf8String.toBits(t));var e,r=this._buffer=i.bitArray.concat(this._buffer,t),n=this._length,s=this._length=n+i.bitArray.bitLength(t);if(s>9007199254740991)throw new i.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!=typeof Uint32Array){var o=new Uint32Array(r),a=0;for(e=512+n-(512+n&511);e<=s;e+=512)this._block(o.subarray(16*a,16*(a+1))),a+=1;r.splice(0,16*a)}else for(e=512+n-(512+n&511);e<=s;e+=512)this._block(r.splice(0,16));return this},finalize:function(){var t,e=this._buffer,r=this._h;for(t=(e=i.bitArray.concat(e,[i.bitArray.partial(1,1)])).length+2;15&t;t++)e.push(0);for(e.push(Math.floor(this._length/4294967296)),e.push(0|this._length);e.length;)this._block(e.splice(0,16));return this.reset(),r},_init:[],_key:[],_precompute:function(){var t,e,r=0,n=2;function i(t){return 4294967296*(t-Math.floor(t))|0}for(;r<64;n++){for(e=!0,t=2;t*t<=n;t++)if(n%t==0){e=!1;break}e&&(r<8&&(this._init[r]=i(Math.pow(n,.5))),this._key[r]=i(Math.pow(n,1/3)),r++)}},_block:function(t){var e,r,n,i,s=this._h,o=this._key,a=s[0],u=s[1],c=s[2],h=s[3],p=s[4],f=s[5],l=s[6],d=s[7];for(e=0;e<64;e++)e<16?r=t[e]:(n=t[e+1&15],i=t[e+14&15],r=t[15&e]=(n>>>7^n>>>18^n>>>3^n<<25^n<<14)+(i>>>17^i>>>19^i>>>10^i<<15^i<<13)+t[15&e]+t[e+9&15]|0),r=r+d+(p>>>6^p>>>11^p>>>25^p<<26^p<<21^p<<7)+(l^p&(f^l))+o[e],d=l,l=f,f=p,p=h+r|0,h=c,c=u,a=r+((u=a)&c^h&(u^c))+(u>>>2^u>>>13^u>>>22^u<<30^u<<19^u<<10)|0;s[0]=s[0]+a|0,s[1]=s[1]+u|0,s[2]=s[2]+c|0,s[3]=s[3]+h|0,s[4]=s[4]+p|0,s[5]=s[5]+f|0,s[6]=s[6]+l|0,s[7]=s[7]+d|0}},i.bitArray={bitSlice:function(t,e,r){return t=i.bitArray._shiftRight(t.slice(e/32),32-(31&e)).slice(1),void 0===r?t:i.bitArray.clamp(t,r-e)},extract:function(t,e,r){var n=Math.floor(-e-r&31);return(-32&(e+r-1^e)?t[e/32|0]<<32-n^t[e/32+1|0]>>>n:t[e/32|0]>>>n)&(1<<r)-1},concat:function(t,e){if(0===t.length||0===e.length)return t.concat(e);var r=t[t.length-1],n=i.bitArray.getPartial(r);return 32===n?t.concat(e):i.bitArray._shiftRight(e,n,0|r,t.slice(0,t.length-1))},bitLength:function(t){var e,r=t.length;return 0===r?0:(e=t[r-1],32*(r-1)+i.bitArray.getPartial(e))},clamp:function(t,e){if(32*t.length<e)return t;var r=(t=t.slice(0,Math.ceil(e/32))).length;return e&=31,r>0&&e&&(t[r-1]=i.bitArray.partial(e,t[r-1]&2147483648>>e-1,1)),t},partial:function(t,e,r){return 32===t?e:(r?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(i.bitArray.bitLength(t)!==i.bitArray.bitLength(e))return!1;var r,n=0;for(r=0;r<t.length;r++)n|=t[r]^e[r];return 0===n},_shiftRight:function(t,e,r,n){var s,o,a;for(void 0===n&&(n=[]);e>=32;e-=32)n.push(r),r=0;if(0===e)return n.concat(t);for(s=0;s<t.length;s++)n.push(r|t[s]>>>e),r=t[s]<<32-e;return o=t.length?t[t.length-1]:0,a=i.bitArray.getPartial(o),n.push(i.bitArray.partial(e+a&31,e+a>32?r:n.pop(),1)),n},_xor4:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]},byteswapM:function(t){var e,r;for(e=0;e<t.length;++e)r=t[e],t[e]=r>>>24|r>>>8&65280|(65280&r)<<8|r<<24;return t}},i.codec.utf8String={fromBits:function(t){var e,r,n="",s=i.bitArray.bitLength(t);for(e=0;e<s/8;e++)0==(3&e)&&(r=t[e/4]),n+=String.fromCharCode(r>>>8>>>8>>>8),r<<=8;return decodeURIComponent(escape(n))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,r=[],n=0;for(e=0;e<t.length;e++)n=n<<8|t.charCodeAt(e),3==(3&e)&&(r.push(n),n=0);return 3&e&&r.push(i.bitArray.partial(8*(3&e),n)),r}},i.codec.hex={fromBits:function(t){var e,r="";for(e=0;e<t.length;e++)r+=(0xf00000000000+(0|t[e])).toString(16).substr(4);return r.substr(0,i.bitArray.bitLength(t)/4)},toBits:function(t){var e,r,n=[];for(r=(t=t.replace(/\s|0x/g,"")).length,t+="00000000",e=0;e<t.length;e+=8)n.push(0^parseInt(t.substr(e,8),16));return i.bitArray.clamp(n,4*r)}},t.exports&&(t.exports=i),void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)},function(t,e,r){(function(t){var n=e,i=r(2),s=r(5),o=r(8),a=r(9)(1e3);function u(t,e,r){return o.createHmac("sha256",t).update(e,"utf8").digest(r)}function c(t,e){return o.createHash("sha256").update(t,"utf8").digest(e)}function h(t){return t.replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function p(t,e){"string"==typeof t&&(t=i.parse(t));var r=t.headers=t.headers||{},n=this.matchHost(t.hostname||t.host||r.Host||r.host);this.request=t,this.credentials=e||this.defaultCredentials(),this.service=t.service||n[0]||"",this.region=t.region||n[1]||"us-east-1","email"===this.service&&(this.service="ses"),!t.method&&t.body&&(t.method="POST"),r.Host||r.host||(r.Host=t.hostname||t.host||this.createHost(),t.port&&(r.Host+=":"+t.port)),t.hostname||t.host||(t.hostname=r.Host||r.host),this.isCodeCommitGit="codecommit"===this.service&&"GIT"===t.method}p.prototype.matchHost=function(t){var e=((t||"").match(/([^\.]+)\.(?:([^\.]*)\.)?amazonaws\.com(\.cn)?$/)||[]).slice(1,3);return"es"===e[1]&&(e=e.reverse()),e},p.prototype.isSingleRegion=function(){return["s3","sdb"].indexOf(this.service)>=0&&"us-east-1"===this.region||["cloudfront","ls","route53","iam","importexport","sts"].indexOf(this.service)>=0},p.prototype.createHost=function(){var t=this.isSingleRegion()?"":("s3"===this.service&&"us-east-1"!==this.region?"-":".")+this.region;return("ses"===this.service?"email":this.service)+t+".amazonaws.com"},p.prototype.prepareRequest=function(){this.parsePath();var e,r=this.request,n=r.headers;r.signQuery?(this.parsedPath.query=e=this.parsedPath.query||{},this.credentials.sessionToken&&(e["X-Amz-Security-Token"]=this.credentials.sessionToken),"s3"!==this.service||e["X-Amz-Expires"]||(e["X-Amz-Expires"]=86400),e["X-Amz-Date"]?this.datetime=e["X-Amz-Date"]:e["X-Amz-Date"]=this.getDateTime(),e["X-Amz-Algorithm"]="AWS4-HMAC-SHA256",e["X-Amz-Credential"]=this.credentials.accessKeyId+"/"+this.credentialString(),e["X-Amz-SignedHeaders"]=this.signedHeaders()):(r.doNotModifyHeaders||this.isCodeCommitGit||(!r.body||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/x-www-form-urlencoded; charset=utf-8"),!r.body||n["Content-Length"]||n["content-length"]||(n["Content-Length"]=t.byteLength(r.body)),!this.credentials.sessionToken||n["X-Amz-Security-Token"]||n["x-amz-security-token"]||(n["X-Amz-Security-Token"]=this.credentials.sessionToken),"s3"!==this.service||n["X-Amz-Content-Sha256"]||n["x-amz-content-sha256"]||(n["X-Amz-Content-Sha256"]=c(this.request.body||"","hex")),n["X-Amz-Date"]||n["x-amz-date"]?this.datetime=n["X-Amz-Date"]||n["x-amz-date"]:n["X-Amz-Date"]=this.getDateTime()),delete n.Authorization,delete n.authorization)},p.prototype.sign=function(){return this.parsedPath||this.prepareRequest(),this.request.signQuery?this.parsedPath.query["X-Amz-Signature"]=this.signature():this.request.headers.Authorization=this.authHeader(),this.request.path=this.formatPath(),this.request},p.prototype.getDateTime=function(){if(!this.datetime){var t=this.request.headers,e=new Date(t.Date||t.date||new Date);this.datetime=e.toISOString().replace(/[:\-]|\.\d{3}/g,""),this.isCodeCommitGit&&(this.datetime=this.datetime.slice(0,-1))}return this.datetime},p.prototype.getDate=function(){return this.getDateTime().substr(0,8)},p.prototype.authHeader=function(){return["AWS4-HMAC-SHA256 Credential="+this.credentials.accessKeyId+"/"+this.credentialString(),"SignedHeaders="+this.signedHeaders(),"Signature="+this.signature()].join(", ")},p.prototype.signature=function(){var t=this.getDate(),e=[this.credentials.secretAccessKey,t,this.region,this.service].join(),r=a.get(e);return r||(r=u(u(u(u("AWS4"+this.credentials.secretAccessKey,t),this.region),this.service),"aws4_request"),a.set(e,r)),u(r,this.stringToSign(),"hex")},p.prototype.stringToSign=function(){return["AWS4-HMAC-SHA256",this.getDateTime(),this.credentialString(),c(this.canonicalString(),"hex")].join("\n")},p.prototype.canonicalString=function(){this.parsedPath||this.prepareRequest();var t,e=this.parsedPath.path,r=this.parsedPath.query,n=this.request.headers,i="",o="s3"!==this.service,a="s3"===this.service||this.request.doNotEncodePath,u="s3"===this.service,p="s3"===this.service;return t="s3"===this.service&&this.request.signQuery?"UNSIGNED-PAYLOAD":this.isCodeCommitGit?"":n["X-Amz-Content-Sha256"]||n["x-amz-content-sha256"]||c(this.request.body||"","hex"),r&&(i=h(s.stringify(Object.keys(r).sort().reduce(function(t,e){return e?(t[e]=Array.isArray(r[e])?p?r[e][0]:r[e].slice().sort():r[e],t):t},{})))),"/"!==e&&(o&&(e=e.replace(/\/{2,}/g,"/")),"/"!==(e=e.split("/").reduce(function(t,e){return o&&".."===e?t.pop():o&&"."===e||(a&&(e=decodeURIComponent(e)),t.push(h(encodeURIComponent(e)))),t},[]).join("/"))[0]&&(e="/"+e),u&&(e=e.replace(/%2F/g,"/"))),[this.request.method||"GET",e,i,this.canonicalHeaders()+"\n",this.signedHeaders(),t].join("\n")},p.prototype.canonicalHeaders=function(){var t=this.request.headers;return Object.keys(t).sort(function(t,e){return t.toLowerCase()<e.toLowerCase()?-1:1}).map(function(e){return e.toLowerCase()+":"+function(t){return t.toString().trim().replace(/\s+/g," ")}(t[e])}).join("\n")},p.prototype.signedHeaders=function(){return Object.keys(this.request.headers).map(function(t){return t.toLowerCase()}).sort().join(";")},p.prototype.credentialString=function(){return[this.getDate(),this.region,this.service,"aws4_request"].join("/")},p.prototype.defaultCredentials=function(){var t=process.env;return{accessKeyId:t.AWS_ACCESS_KEY_ID||t.AWS_ACCESS_KEY,secretAccessKey:t.AWS_SECRET_ACCESS_KEY||t.AWS_SECRET_KEY,sessionToken:t.AWS_SESSION_TOKEN}},p.prototype.parsePath=function(){var t=this.request.path||"/",e=t.indexOf("?"),r=null;e>=0&&(r=s.parse(t.slice(e+1)),t=t.slice(0,e)),/[^0-9A-Za-z!'()*\-._~%/]/.test(t)&&(t=t.split("/").map(function(t){return encodeURIComponent(decodeURIComponent(t))}).join("/")),this.parsedPath={path:t,query:r}},p.prototype.formatPath=function(){var t=this.parsedPath.path,e=this.parsedPath.query;return e?(null!=e[""]&&delete e[""],t+"?"+h(s.stringify(e))):t},n.RequestSigner=p,n.sign=function(t,e){return new p(t,e).sign()}}).call(this,r(4))},function(t,e){var r=/^(?:(?:(([^:\/#\?]+:)?(?:(?:\/\/)(?:(?:(?:([^:@\/#\?]+)(?:\:([^:@\/#\?]*))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/;t.exports.parse=function(t){var e=r.exec(t);return{href:e[0],origin:e[1],protocol:e[2],username:e[3],password:e[4],host:e[5],hostname:e[6],port:e[7],pathname:e[8],search:e[9],hash:e[10]}},t.exports.format=function(t){var e=t.protocol?t.protocol+"//":"",r=t.port?":"+t.port:"",n="";return t.origin?n=t.origin:t.host?n=e+t.host:t.hostname&&(n=e+t.hostname+r),n+(t.pathname||"")+(t.search||"")+(t.hash||"")}},function(t,e,r){"use strict";r.r(e);var n=r(1),i=r.n(n),s=r(2),o=r.n(s);function a(t,e,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&u(i,r.prototype),i}).apply(null,arguments)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){h(t,e,r[e])})}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}i.a.fetch=function(){if(!1 in window)throw"fetch is not defined";for(var t,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];if("string"==typeof r[0]){var s=o.a.parse(r[0]),u=s.protocol,h=s.host,p=s.port,f=s.pathname,l=s.search;if(console.log(u),2==r.length)t=new n.RequestSigner({host:h,port:p,path:"".concat(f).concat(l||""),protocol:u},r[1]);else{var d=r[1],y=r[2];t=new n.RequestSigner(c({host:h,port:p,path:"".concat(f).concat(l||""),protocol:u},d),y)}}else t=a(n.RequestSigner,r);var g=o.a.parse(t.request.path),m=g.pathname,v=g.search,b=o.a.format(c({pathname:m,search:v},t.request));return t.sign(),fetch(b,t.request)},e.default=i.a},function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return o});var n=r(0),i=r.n(n);function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,r){e&&s(t.prototype,e),r&&s(t,r)}(t,null,[{key:"byteLength",value:function(t){return i.a.bitArray.bitLength(i.a.codec.utf8String.toBits(t))/8}}]),t}()},function(t,e,r){"use strict";e.decode=e.parse=r(6),e.encode=e.stringify=r(7)},function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,s){e=e||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var a=/\+/g;t=t.split(e);var u=1e3;s&&"number"==typeof s.maxKeys&&(u=s.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var h=0;h<c;++h){var p,f,l,d,y=t[h].replace(a,"%20"),g=y.indexOf(r);g>=0?(p=y.substr(0,g),f=y.substr(g+1)):(p=y,f=""),l=decodeURIComponent(p),d=decodeURIComponent(f),n(o,l)?i(o[l])?o[l].push(d):o[l]=[o[l],d]:o[l]=d}return o};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?s(o(t),function(o){var a=encodeURIComponent(n(o))+r;return i(t[o])?s(t[o],function(t){return a+encodeURIComponent(n(t))}).join(e):a+encodeURIComponent(n(t[o]))}).join(e):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var o=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e,r){"use strict";r.r(e),r.d(e,"createHmac",function(){return s}),r.d(e,"createHash",function(){return o});var n=r(0),i=r.n(n);function s(t,e){var r=new i.a.misc.hmac("string"==typeof e?i.a.codec.utf8String.toBits(e):e);return{update:function(t){return r.update(t),{digest:function(t){var e=r.digest();return e="hex"===t?i.a.codec.hex.fromBits(e):e}}}}}function o(){var t=new i.a.hash.sha256;return{update:function(e){return t.update(e instanceof Int8Array?i.a.codec.arrayBuffer.toBits(e.buffer):e),{digest:function(){return i.a.codec.hex.fromBits(t.finalize())}}}}}},function(t,e){function r(t){this.capacity=0|t,this.map=Object.create(null),this.list=new n}function n(){this.firstNode=null,this.lastNode=null}t.exports=function(t){return new r(t)},r.prototype.get=function(t){var e=this.map[t];if(null!=e)return this.used(e),e.val},r.prototype.set=function(t,e){var r=this.map[t];if(null!=r)r.val=e;else{if(this.capacity||this.prune(),!this.capacity)return!1;r=new function(t,e){this.key=t,this.val=e,this.prev=null,this.next=null}(t,e),this.map[t]=r,this.capacity--}return this.used(r),!0},r.prototype.used=function(t){this.list.moveToFront(t)},r.prototype.prune=function(){var t=this.list.pop();null!=t&&(delete this.map[t.key],this.capacity++)},n.prototype.moveToFront=function(t){this.firstNode!=t&&(this.remove(t),null==this.firstNode?(this.firstNode=t,this.lastNode=t,t.prev=null,t.next=null):(t.prev=null,t.next=this.firstNode,t.next.prev=t,this.firstNode=t))},n.prototype.pop=function(){var t=this.lastNode;return null!=t&&this.remove(t),t},n.prototype.remove=function(t){this.firstNode==t?this.firstNode=t.next:null!=t.prev&&(t.prev.next=t.next),this.lastNode==t?this.lastNode=t.prev:null!=t.next&&(t.next.prev=t.prev)}}]).default});

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = [{"test":"get-header-key-duplicate","request":{"service":"service","method":"GET","path":"/","headers":{"host":"example.amazonaws.com","my-header1":"value2,value2,value1","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nmy-header1:value2,value2,value1\nx-amz-date:20150830T123600Z\n\nhost;my-header1;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\ndc7f04a3abfde8d472b0ab1a418b741b7c67174dad1551b4117b15527fbe966c","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;my-header1;x-amz-date, Signature=c9d5ea9f3f72853aea855b47ea873832890dbdd183b4468f858259531a5138ea"},{"test":"get-header-value-order","request":{"service":"service","method":"GET","path":"/","headers":{"host":"example.amazonaws.com","my-header1":"value4,value1,value3,value2","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nmy-header1:value4,value1,value3,value2\nx-amz-date:20150830T123600Z\n\nhost;my-header1;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n31ce73cd3f3d9f66977ad3dd957dc47af14df92fcd8509f59b349e9137c58b86","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;my-header1;x-amz-date, Signature=08c7e5a9acfcfeb3ab6b2185e75ce8b1deb5e634ec47601a50643f830c755c01"},{"test":"get-header-value-trim","request":{"service":"service","method":"GET","path":"/","headers":{"host":"example.amazonaws.com","my-header1":" value1","my-header2":" \"a   b   c\"","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nmy-header1:value1\nmy-header2:\"a b c\"\nx-amz-date:20150830T123600Z\n\nhost;my-header1;my-header2;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\na726db9b0df21c14f559d0a978e563112acb1b9e05476f0a6a1c7d68f28605c7","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;my-header1;my-header2;x-amz-date, Signature=acc3ed3afb60bb290fc8d2dd0098b9911fcaa05412b367055dee359757a9c736"},{"test":"get-unreserved","request":{"service":"service","method":"GET","path":"/-._~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/-._~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n6a968768eefaa713e2a6b16b589a8ea192661f098f37349f4e2c0082757446f9","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=07ef7494c76fa4850883e2b006601f940f8a34d404d0cfa977f52a65bbf5f24f"},{"test":"get-utf8","request":{"service":"service","method":"GET","path":"/ሴ","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/%E1%88%B4\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n2a0a97d02205e45ce2e994789806b19270cfbbb0921b278ccf58f5249ac42102","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=8318018e0b0f223aa2bbf98705b62bb787dc9c0e678f255a891fd03141be5d85"},{"test":"get-vanilla","request":{"service":"service","method":"GET","path":"/","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nbb579772317eb040ac9ed261061d46c1f17a8133879d6129b6e1c25292927e63","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5fa00fa31553b73ebf1942676e86291e8372ff2a2260956d9b8aae1d763fbf31"},{"test":"get-vanilla-empty-query-key","request":{"service":"service","method":"GET","path":"/?Param1=value1","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\nParam1=value1\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n1e24db194ed7d0eec2de28d7369675a243488e08526e8c1c73571282f7c517ab","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=a67d582fa61cc504c4bae71f336f98b97f1ea3c7a6bfe1b6e45aec72011b9aeb"},{"test":"get-vanilla-query","request":{"service":"service","method":"GET","path":"/","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nbb579772317eb040ac9ed261061d46c1f17a8133879d6129b6e1c25292927e63","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5fa00fa31553b73ebf1942676e86291e8372ff2a2260956d9b8aae1d763fbf31"},{"test":"get-vanilla-query-order-key","request":{"service":"service","method":"GET","path":"/?Param1=value2&Param1=Value1","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\nParam1=Value1&Param1=value2\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n704b4cef673542d84cdff252633f065e8daeba5f168b77116f8b1bcaf3d38f89","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=eedbc4e291e521cf13422ffca22be7d2eb8146eecf653089df300a15b2382bd1"},{"test":"get-vanilla-query-order-key-case","request":{"service":"service","method":"GET","path":"/?Param2=value2&Param1=value1","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\nParam1=value1&Param2=value2\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n816cd5b414d056048ba4f7c5386d6e0533120fb1fcfa93762cf0fc39e2cf19e0","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=b97d918cfa904a5beff61c982a1b6f458b799221646efd99d3219ec94cdf2500"},{"test":"get-vanilla-query-order-value","request":{"service":"service","method":"GET","path":"/?Param1=value2&Param1=value1","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\nParam1=value1&Param1=value2\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nc968629d70850097a2d8781c9bf7edcb988b04cac14cca9be4acc3595f884606","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5772eed61e12b33fae39ee5e7012498b51d56abc0abb7c60486157bd471c4694"},{"test":"get-vanilla-query-unreserved","request":{"service":"service","method":"GET","path":"/?-._~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz=-._~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n-._~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz=-._~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nc30d4703d9f799439be92736156d47ccfb2d879ddf56f5befa6d1d6aab979177","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=9c3e54bfcdf0b19771a7f523ee5669cdf59bc7cc0884027167c21bb143a40197"},{"test":"get-vanilla-utf8-query","request":{"service":"service","method":"GET","path":"/?ሴ=bar","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n%E1%88%B4=bar\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\neb30c5bed55734080471a834cc727ae56beb50e5f39d1bff6d0d38cb192a7073","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=2cdec8eed098649ff3a119c94853b13c643bcf08f8b0a1d91e12c9027818dd04"},{"test":"normalize-path/get-relative","request":{"service":"service","method":"GET","path":"/example/..","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nbb579772317eb040ac9ed261061d46c1f17a8133879d6129b6e1c25292927e63","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5fa00fa31553b73ebf1942676e86291e8372ff2a2260956d9b8aae1d763fbf31"},{"test":"normalize-path/get-relative-relative","request":{"service":"service","method":"GET","path":"/example1/example2/../..","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nbb579772317eb040ac9ed261061d46c1f17a8133879d6129b6e1c25292927e63","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5fa00fa31553b73ebf1942676e86291e8372ff2a2260956d9b8aae1d763fbf31"},{"test":"normalize-path/get-slash","request":{"service":"service","method":"GET","path":"//","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nbb579772317eb040ac9ed261061d46c1f17a8133879d6129b6e1c25292927e63","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5fa00fa31553b73ebf1942676e86291e8372ff2a2260956d9b8aae1d763fbf31"},{"test":"normalize-path/get-slash-dot-slash","request":{"service":"service","method":"GET","path":"/./","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nbb579772317eb040ac9ed261061d46c1f17a8133879d6129b6e1c25292927e63","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5fa00fa31553b73ebf1942676e86291e8372ff2a2260956d9b8aae1d763fbf31"},{"test":"normalize-path/get-slash-pointless-dot","request":{"service":"service","method":"GET","path":"/./example","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/example\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n214d50c111a8edc4819da6a636336472c916b5240f51e9a51b5c3305180cf702","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=ef75d96142cf21edca26f06005da7988e4f8dc83a165a80865db7089db637ec5"},{"test":"normalize-path/get-slashes","request":{"service":"service","method":"GET","path":"//example//","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/example/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\ncb96b4ac96d501f7c5c15bc6d67b3035061cfced4af6585ad927f7e6c985c015","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=9a624bd73a37c9a373b5312afbebe7a714a789de108f0bdfe846570885f57e84"},{"test":"normalize-path/get-space","request":{"service":"service","method":"GET","path":"/example space/","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"GET\n/example%20space/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n63ee75631ed7234ae61b5f736dfc7754cdccfedbff4b5128a915706ee9390d86","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=652487583200325589f1fba4c7e578f72c47cb61beeca81406b39ddec1366741"},{"test":"post-header-key-case","request":{"service":"service","method":"POST","path":"/","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n553f88c9e4d10fc9e109e2aeb65f030801b70c2f6468faca261d401ae622fc87","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5da7c1a2acd57cee7505fc6676e4e544621c30862966e37dddb68e92efbe5d6b"},{"test":"post-header-key-sort","request":{"service":"service","method":"POST","path":"/","headers":{"host":"example.amazonaws.com","my-header1":"value1","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\n\nhost:example.amazonaws.com\nmy-header1:value1\nx-amz-date:20150830T123600Z\n\nhost;my-header1;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n9368318c2967cf6de74404b30c65a91e8f6253e0a8659d6d5319f1a812f87d65","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;my-header1;x-amz-date, Signature=c5410059b04c1ee005303aed430f6e6645f61f4dc9e1461ec8f8916fdf18852c"},{"test":"post-header-value-case","request":{"service":"service","method":"POST","path":"/","headers":{"host":"example.amazonaws.com","my-header1":"VALUE1","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\n\nhost:example.amazonaws.com\nmy-header1:VALUE1\nx-amz-date:20150830T123600Z\n\nhost;my-header1;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nd51ced243e649e3de6ef63afbbdcbca03131a21a7103a1583706a64618606a93","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;my-header1;x-amz-date, Signature=cdbc9802e29d2942e5e10b5bccfdd67c5f22c7c4e8ae67b53629efa58b974b7d"},{"test":"post-sts-token/post-sts-header-after","request":{"service":"service","method":"POST","path":"/","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n553f88c9e4d10fc9e109e2aeb65f030801b70c2f6468faca261d401ae622fc87","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5da7c1a2acd57cee7505fc6676e4e544621c30862966e37dddb68e92efbe5d6b"},{"test":"post-sts-token/post-sts-header-before","request":{"service":"service","method":"POST","path":"/","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z","x-amz-security-token":"AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\nx-amz-security-token:AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA==\n\nhost;x-amz-date;x-amz-security-token\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\nc237e1b440d4c63c32ca95b5b99481081cb7b13c7e40434868e71567c1a882f6","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date;x-amz-security-token, Signature=85d96828115b5dc0cfc3bd16ad9e210dd772bbebba041836c64533a82be05ead"},{"test":"post-vanilla","request":{"service":"service","method":"POST","path":"/","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\n\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n553f88c9e4d10fc9e109e2aeb65f030801b70c2f6468faca261d401ae622fc87","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=5da7c1a2acd57cee7505fc6676e4e544621c30862966e37dddb68e92efbe5d6b"},{"test":"post-vanilla-empty-query-value","request":{"service":"service","method":"POST","path":"/?Param1=value1","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\nParam1=value1\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n9d659678c1756bb3113e2ce898845a0a79dbbc57b740555917687f1b3340fbbd","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=28038455d6de14eafc1f9222cf5aa6f1a96197d7deb8263271d420d138af7f11"},{"test":"post-vanilla-query","request":{"service":"service","method":"POST","path":"/?Param1=value1","headers":{"host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\nParam1=value1\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n9d659678c1756bb3113e2ce898845a0a79dbbc57b740555917687f1b3340fbbd","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=host;x-amz-date, Signature=28038455d6de14eafc1f9222cf5aa6f1a96197d7deb8263271d420d138af7f11"},{"test":"post-x-www-form-urlencoded","request":{"service":"service","method":"POST","path":"/","headers":{"content-type":"application/x-www-form-urlencoded","host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"Param1=value1","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\n\ncontent-type:application/x-www-form-urlencoded\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\ncontent-type;host;x-amz-date\n9095672bbd1f56dfc5b65f3e153adc8731a4a654192329106275f4c7b24d0b6e","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n42a5e5bb34198acb3e84da4f085bb7927f2bc277ca766e6d19c73c2154021281","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=ff11897932ad3f4e8b18135d722051e5ac45fc38421b1da7b9d196a0fe09473a"},{"test":"post-x-www-form-urlencoded-parameters","request":{"service":"service","method":"POST","path":"/","headers":{"content-type":"application/x-www-form-urlencoded; charset=utf8","host":"example.amazonaws.com","x-amz-date":"20150830T123600Z"},"body":"Param1=value1","doNotModifyHeaders":true,"doNotEncodePath":true},"canonicalString":"POST\n/\n\ncontent-type:application/x-www-form-urlencoded; charset=utf8\nhost:example.amazonaws.com\nx-amz-date:20150830T123600Z\n\ncontent-type;host;x-amz-date\n9095672bbd1f56dfc5b65f3e153adc8731a4a654192329106275f4c7b24d0b6e","stringToSign":"AWS4-HMAC-SHA256\n20150830T123600Z\n20150830/us-east-1/service/aws4_request\n2e1cf7ed91881a30569e46552437e4156c823447bf1781b921b5d486c568dd1c","outputAuth":"AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/20150830/us-east-1/service/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=1a72ec8f64bd914b0e42e42607c7fbce7fb2c7465f63e3092b3b0d39fa77a6fe"}];

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=aws4-test.js.map