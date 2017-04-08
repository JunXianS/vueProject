/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// 1.0 获取dom对象
	var v1 = document.querySelector('#v1');
	var v2 = document.querySelector('#v2');
	var bt = document.querySelector('#bt');
	var res = document.querySelector('#res');

	// 2.0 导入site.css文件
	__webpack_require__(1);
	__webpack_require__(12);
	// 3.0 导入site1.scss文件
	__webpack_require__(15);

	// 4.0 导入site2.less文件
	__webpack_require__(17);

	bt.onclick=function(){

		// 2.0 获取calc.js中的add方法并且调用计算结果
		var v1value = parseFloat(v1.value);
		var v2value = parseFloat(v2.value);

		// 调用add方法
		var add = __webpack_require__(19);
		res.value = add(v1value,v2value);
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/._css-loader@0.28.0@css-loader/index.js!./site.css", function() {
				var newContent = require("!!../../node_modules/._css-loader@0.28.0@css-loader/index.js!./site.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)(undefined);
	// imports


	// module
	exports.push([module.id, "#v1{\r\n\tborder:1px solid red;\r\n}\r\n\r\n#bg{\r\n\twidth: 300px;\r\n\theight: 100px;\r\n\tbackground-image: url(" + __webpack_require__(8) + ");\r\n}\r\n\r\n#bg1{\r\n\twidth: 300px;\r\n\theight: 300px;\r\n\tbackground-image: url(" + __webpack_require__(9) + ");\r\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap) {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
	  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	  return '/*# ' + data + ' */';
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(5)
	var ieee754 = __webpack_require__(6)
	var isArray = __webpack_require__(7)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAAAyCAYAAADvPUZQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0UyMUFENURBRDU3MTFFNjkwNEJCRjlGOEFFNjFGMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0UyMUFENUVBRDU3MTFFNjkwNEJCRjlGOEFFNjFGMjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRTIxQUQ1QkFENTcxMUU2OTA0QkJGOUY4QUU2MUYyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRTIxQUQ1Q0FENTcxMUU2OTA0QkJGOUY4QUU2MUYyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr9RT9wAACYTSURBVHja7F0JfFNV9j5JmnSlbbqxiAsIioIsVkVHxo3q4IqjlhkVt1FbdEYZF6Q4iruCCyiOCCiK4vxRyoiMGyoyAq5AlVVUoIAWaIEu0D1p8v73vJybnNy+JC9tBWRyfr/7a/rylvuW+73v++65NxZN06Ct4Rg1G9oZKaL0EKWnKL1EOVyULqJ0pr9potSLspNKqSirRFknyvpoDuROzIQuZcug9w/F0JyAu7VALA7O+GbFythFiIUecfv5eHZRckU5W5Rz6LPTxHa9DJb9JMocUV4n4IpFLGIRA6g2xe9FyRflMlEO66B9HiPKA1SeE6VIlKbYLY1FLA6dsP6K+84RZbQoG0RZKsptHQhOasjjDIzd0ljEIsagIsmxW0QZJUrSfjyXo0T5TpTBoiw3XiXmO8UiFv+rAJUlyhhR7jnA5/Qp+Ez2hmBssoLDVQtWr9sIqFJF6S1KSYh9JouSQZ+bRdkVRX26iXIcgTWa+1sOkWcHz8cDPg/xCFF2iFJmYruLwNcB0kz3aLsoVeDzFDF+J8qX6kaTJk0K+v/OO+8MeYCdlsxYy44BVFAgW3oczBnev3Zgz+A0Ua4NWqp5weVIAa8FT1lTQSpPlH+L8oMor4kyQdnnYlFOps8Pi/JgFPX5lgDT8ysxyiUEEN+LciEtS6OTjBclQZREURz0N5mWJ9F3naigRP4giuM20PXCHljs/MBe1X4mtsN1ryeQuo/kOV7/bPB1mnwRhupqUVBhLda8YwCFcu6fovyhg+qzEXw9cpWiNNJDhg2pK0k3sw38GlGeEWW1f4lgTg3JncHtSBYsygNea9Cpn09/+zAgkmET5RT2/1tRnM/jBE5A7OJpAlAVwDBf444I+9oqyiyD5ScT8MSzZcuJudmV5eHCpaybQ4ARqqF7iTXb6f++olwHvnQQq4G21ghM59Nx0C98kz7/mVjskXTvYxELH0C1I5cJGcrL7AFtS/xID+3nROs3h1kXG8zVJCO7mtj3E6JcwBmU12IHr81OMs8f2Jj+xBrdU+DrcexE//9OaZQIxqcqx7JSw3qHLcPGOo79j43vNoN6nivK++DrjQwX20MAFEqrowkYuGRNibC/ZmJA2Bv6Dd0LHmdFCcYQon48jiUpl0MsTzKdpcSqEKxfjzXLWPCG1Zb4J0mhtoBTrSiviKdymNti7eN2JBa6UzJmu9M7bxYF3ClOcNvFS7V1Ain6PpPJz/nCxHHOp4bge4V7veCxOQRzsuufWZxGYITxLrGPuaLMFOVVUW5WrhfW4RWlvExsgMcN7PNk2peMUgJCNFbuJuDj5/k1gUYJSUOMTQb3Lo7dwzh2P65lXtcrBKiPKMwO5d2jBBBNVA8eZlI2PFHee7m+kyQexkkESpfSvf1lfzYA25mnQPqieZBQ9Nf9drxOs/+p/+2o7ZKeGKeXUNs5Cq/WP+P28rMM59cLIXnqE4eMxOtEPsWQNhxruwCd6W6r7UVIce4Bh1Al7kZI3rsLelZshuyGWtHSNNiZkg7rM48Ad9YRAPVVYBfLwRqEo3vBl1e1DXyZ5+HiDySfQLNYBHNqAYsm2oglyMK4hX2erYBFNLFb+f8K8nVeEuVeksMStPAa8s6E/uzz/ylyby8xIh5dCMDimIQ8jq7JXeBLYEU2iln6Q4m5IdjdT+vOo33OoX30N3gWNIXpPkQvFyAwkRfxPxDa+Ee/6xP6y/e5QJRlTDL/SABcQZJ6v4VnyXJwFJ8Ajv4nQNOEF/Rl2Ijjh5zm+zxogO9v3+Ohetx4fR37FeeDJTPD9DFc0/8VAIw+vSFl5JXQ/PlX+rERNPzfde0Cti6+2xnX4yiwJiVB/YJ3Yd+l17fajkfixT6h0DCuNdAk3XStvt1OUQf8q9+Eyiq9/nFHHQEJg08GT3m5H7jwO/e8D1vtB4Gs8Z139fNHMOx0+61QfWdR0LnJyFy3TL9eZqPujTlQe83f2g1Q2DWygh76aKLSonkfc8XFT4P0nEZwu2FA2Vq4bNMK6Lu7DPrsKoPDGypFa2nUsaEWkmCjswvM7XM6TD7xQnB1EeqlZic4mupBs9p448FXxhsRjn2OBCgQzMnurgO7qwE8cQ7//SPZiFEjytv0+XjW6OexxjhSlJUGjQi/r1eu1QJaD0HyjxDcgYCeSx5th+W/ovwMPrPbpvhfRpFI6/Kwk/S9WJT3SAp/SNISM/d5r+ZAYlB4/8tFOYMkH4LWPoNnYw+BGQZ2IFxO9UaWtYjqYxQJiq8l3zSr2DLJhpfsT2BCYJANVkZXzWd/udZ/rzcw/OsprwDPznJofPcDcH+1wqefH7w3qga406ARy8A6eHbvAc8uX8ewPJ7ru9XgKdsO7pJVhtshSNi6+9IKbTk5/nPyy5QQDd6o/snDL9aLPPdKBaCQYSGQtWzcpN/w5oWfQlrR3dDptlFQaXBu+x583BSA2wf0g9RbCjqEQSXRGzsqcBLA9LTLGvcEZHavAlczXFnyHozcsAzO+nmd2KFPQbhFu6oXz/Bu0TYQdRzQAidWl8KJX5XCDesWw9SBF8CUQcPAldgJ7E11eroAxceitEQ4hz6Bpm6H+OYaiGtphBa7vz2NUqSVfMNvoL9HMXBCAPmXyVNPYN6VUc9mFhVg4CiBoU6RRJoBWNWTXxNH54iI20hMpBv5UrifbCbJj2Tbo+wrI7aYSSDRmQD6cua3San3Fd37uSTJZKQR4zMbB03PWsPLrwuW9DvwVOyC+ldng9WZDmn3F0HjJ5/6GVNlv98bbmu2AYYDxMxpUwCw4I376JOwgIKMxJLsI6GpRXeB6/xzfQ2819G+dpacFMT2TLE6BCJxfrhvnUWwz6pETLlupA6i9Q895WedyOwQ1BAoOXPD9c1eG8/PkbNSzALUMjJizcbX4PX83ZWW/Q3Yk2DY+s9gzIp34Jwda6g1pkA1ZJ4gJN2JtN8EkjLfNYLjgwbRZvBJPrZ2Ozy37CU4fct6+NOV90FLiwviPC1cUpURiISKDG6SJ9dt90m8QDygsISjiPlIinWYIm9Xs++MAuXM7bSvEbTsF/LDxivrLiXZZCVQeYGWDxclnYBRpgOAYnojmOYyb+poMrxPJIN/Lq3vIoAxukbdCcSSmUzswr7/mEARje2bCLTjmcH+LTG2NAaaeK6D6H7KeIoAUYL8QRHYyBo//Eh/g7u+/Q7sx/TWl7ds+NHPTEKFkQQyA4goz5Ly/wiJQ8+GfS/OAPfqdTpQIbBw9hNk2ArgQjaF8s9+1JHQsrlUryMHBQ4yoUJKONwPgp0tJ1vfDqWk3Ad+btmyNVjazZqmS81KIee8m7YFZNndD4BjQH+dSXF5KSWlWWnXEQA1nx58k6xJu7/Fan3U27kHZO76GZ797GkY+dNn+ncV4OzWAtZRApguEmVQiF2UWkB7RLTOWdsFUCWLtjCi7EuYufYz+HigUEXV5XzdSH6Rzn68Qhpa3A0CoMrBa/Pjy62Kt7OP2E7/EPtyQuQ8r3gCKGzAxUzuPcnWaab1TiHgGkON/DUmL430w4Jw58jYCR73BAKL88CXbpHMrpc1yBf05SF9wdiWjEbyroaTj6UyIZSl9yms6B/gy4VKYM/OPXAQhpRzOithMkM2OFUymZFOkQARCzIgHSi6dYX6W8fpLAolmir1cJktO0s/HhYEGAS2huL50PLp50Fmt2RXfJnqJaEcQ9aEHheCk1bf4AM+kof8swzsPEBQRLakek0IVnvH/AMyXpuhXzNLWqp+PrK+ZgLrGwnMIgHUA2SImoltFq9npCsh+XOBQ3DBtx/BzI+nQBfXXqiEVIdgRg/ZwDtaAFNihP1g4h/2eO0R675XJ571dPGiL1wjAKr/2eAREs+meSVgRBrbV6M/HHGJkFJbBkkNFeC264QEGcMkA9mFXfWziDl0J+9Gxhxq4JYwQLGc+UGYt3WVYsJjGgKmHzwmCt7Fu8knO5/M5kSlwVvomJiB/mCoFzqTg4NJiq+jY99HHQnryYuTr93JBDr9qS6TDKRaPLGx3/tZsS+Z9X4C9nvpeI9SPRGIhinPzsMHa+9Q5ajbAwBFoLFvwjM+FkAsB5mNBAps3KpkMxPImmTjxgaJDV76PtZF8/wSL+my4eBasxZq8q7wMxpvfX1r70DIOyvVr5UUJMlo5CVxdiUZFwJJUv0v4Fq73geCtNza60hwvvOGLnMbP/2vbtLjsuzVn+vrVp86zM8kq6AA0p56TAf5hDOG6MfBTgT0uUIFSmSzLDQuQg/Ygybv938EOF3t6pRZB/FJ8I8PX4RHV/huShlkDbeCd5IAp55RPkOY1PiejUhSDvbmNezV85hsLc2y5ytSEqJvGhYBUKn7tkFCYzU0JGcJlqd3w6vbdibD+AbWwORT8AIBitlAmvYmA1CN/J2RJLluI8ZyOe27iphKNJFMTEnK2BMIRJYTg5FMEE39k0mOTWBs7E4Crlzy1l4mkLyKQLGZzPNptM9XGEObT1JuqAG72kiScCkcxIE9WFLKWYmByJ473qild6TKJ7MyRgcLAihkMRxAOMhgw8eeRAkQCA7IXHQAfWeWLqcksCFo8OE8+L3e8AWQhPPAJGBKj02ySDTAeQeBZGV4HAmYyQ+M0aUe9vipcrdq1feQOu0ZcK3wjRRDD0qCGxr+fn9KyEs852j8u1AAlUk9QeaAxOsZ48oQz7/LDXPmjIc/b/1ScJ4kQV+SnhMAc3sbn6FjqRHr3fct2INnESXgIZlJJPnaf3E8bpKg+h8utJuoQbcojX+MwiauDcOe6ohdcBN7GLEZ6SH1ILDIpO9dJLf+RkzDpezTC4ExOXhsPj4NjeqFtC9uzKvX5RMIDPlBf+nvjG1hXEiM8UxibxvouDa2zi3kYaEOOovYU1aYa47fF1FBsNpC3lMFyei1BwVAHXdsSJPZW1cfcftox/thnpXsGcS/tc9P02VYVrGvI7r5v0t0oOC9c/WTp/pByb11m5/5qRJPghdfhutwz4iDKjIYe+5APVVAfxh27RbA9aUOIN66On27PT1ODDK+keF5Gxp070lnmaKe2MOIAIXrSyAL8t2EHOXSUMrUqO5TGN/JjD9VJMBpojv7cEitrICFxQ/AaVWbBKKki9Zm+0CA0/nttQq8YNEBaqNTEJzkNLDVVMjvbjax/ZJg28Svnr6jv7Op4Z6rbJfDfBsgRnBThGOpLGsdmdfvEUsJ5eMNMnEe6cr/dgWc5An+SOzsryTNkbWuInZYBYFs8SI67woI9BouI9NeGvL/pe0yFNNbZUv/omcFs/F70zbyvqv3X7K5Ax7INjoLedPw9gK/54PAtHdkoS5v0A/q6MAGXv/Gm+B4Ilj5emtrdZM55cbr9YKSUmcflO+EYIiNW0q4uKFDguSckcRDIHMxgEIJJwHK1qunH5yqrivQQRIByghk9DfOxId19oR5YAhGetKo2B59rD2CPalA2KEvEoNlf2G+Q7gY5wOnI6D7ji2w9M0i6NG0B3b42s1nVtDO7ID67XDQi/zfvU7UEyxtmoYtsYAaQ7jAJ2y1TkA0r55ewAgQNvASashG+TctEfYtp0Tg18/omiG/rVZM5DUQubvdQn5RP2asB72cWD1dxNK+Z+sPJIDiPa8INKcZyFrZg8dZ5V5iroMUAESPDpOBFhOAcTaE3hTmjZ1OjOwkYl4c3F4+WCQeMgBdspRtF2c5wC91rAKcsDcLJVdHBiY4YuEsJ2G4b2y3a7FPDdfNnOU36WsfeTKsZOS5VeF68eJ69woC28Q/nKunV+C5IyuTXhEulx6Ue9Nmv1xE5ofXpembFf5EVgTO2ilT9bqitAsJbEV3gcZkrTTz2wNQOSYfoikCnCa4M7pB9/ItUDL7Dsjx1KLfJLSBdwE9oO2NtR6w7ukqXvwrU3rBR32HgGVfJbaSbAh0yYeL10D28glQi3MHzb5SQR4bZkZ3CwEsvchkbya2kULAsZuA4C0I7gUMNdiXe10oy741ef63Q+jZAXaQPEN2hIk7fSB4aEoa+4zrfUAelxwrWCjKDDrHjUzW8hhLwLeBzPJUAuZEArpzqKMinXVIVJN8TSXwxOuPGe3Pgy8P65WDBaCQqWDDReaCmdjYe4ZmtWQZKLmMAtkDZnVHG2ovGOZdoWzCOqBMwmRINJrxf2RQ2L2PvWRtSWkIoto9e/h7Bn1ybpfeY4eMyS+9hOSUy/V1ELRJkmFuGDI/zCLH/7l3h8tRsjUJEJPgFfSW31wa5EH5PLAvwfPDxjYD1GyIPJXFNxZNG+1KEm3A44Z/Fz/OwQklwiUdQofBOi6dkrNvG3otoPkeV1eNiZrvm5Sf0/0vfnFGtalHgNe6XNo6VfJ5A+PxZG5qYP+g/agDaeco4HQusYpIUdJB7Ws3BKZGSTC4l/weXkmMqq8CWlnQOrWAxyrGCi8kIDoSghM+zQSC1nMHm0lec//DkHzDNbp5LPN/MBERQUNnPDON80+jyfMJ8qwUgEq983adxTR+9Q1kbflW791Df6r60pHguOIiHRhQeslcIWRCft9DM57wQV2OMg/Brn7e2wGgFCCkpgHg+RgtT39kvF5HDOcTrTtkdV8sJ1uvq2vee36phwCE9cbcL3VYjj5uUFxDEIWfkxmAQmA5z8S1vtCDY9k6ZcDDb0+GU2pLBe/PQHBCj2V8x4CT5a1EaH4/BRrhjtyR8HX/M8G2+2cEp+dNehjFjBmIK9YCtZ2OAJfxVCtGcqsrNdB0YkY/kZn8Df3lYwDRDF90ANtapFywkQbLLoniReJQWOAiYknh5mxCZnWGAYM8aAIZDfbaoTGO4ISmtb5cSDtkC6F8FZlw2RGBPhP2fMWfNhj2Tnjan+yIbMSzqRRS7h4NTQveh+RRN4I1Jdmfj2R2Pho04XX2M4nODYfuEDsyC+I4HAUTSo1YoAQclHoJN17lr78uAZcsD9k5IYfV6Osii3059AQWFnvh6/KNuwOCM4mNYrRgT1Nczs5wwuZVsGZekT52rlawfgtom8mUbS84fZ8Irr4ZYq9TjvkDjL7iHrDUVoK9ubFIs1jMDrtGACmT7cWdlAOdyz6HYzbMgeaEdN62kEHhk4icdQur/zAyt20RPC4E5Uij75cyJoL+zJcmz+FTklEYefS/UfxEftxqCMzJ/iixP4wnyZzGnKW7mBf0MZ33ZFrGh7nwSKBzzDJgZ+FefDI/C32q/tE8A0Y/O0UzavonrDMxo2Zswrr9FJj31F4pGolBDTcBTtggp/i6+60w/ov55KYmAfXWtRucPGAt6wSNp6aJF/STfS+GsZcK8iJknb2p4e+a1WoWnO6HoKlnrQL1WsBZtQGseoqCqXnJF5KEQy5/MzXu1tX1Ac4X5Fm5Tex3GLGzSNPcaMr9UCudTFIrk3looWQvsr4FyjHXECD1DXOMUPEeeXfWMIwuqw37jcVvNH4tcOIP9U0m1tXftN6kVOhW9gOct3OdgJFEoETKu9pbkRawbsmC2sFC2tU+NCgfHrzgrwKcKsHRsO8ezWqbaHI3a4k9BPZrTwRH4x49k9xtT4mmSuiqz6SCAIUC/TII5DV1hsAIf2zo35sEz7aEKpOwR07tZgoFGP82WDaFCo80k3W5MMq6d4o14Vi0B6ByTD50vtkVE1NgxE8rBL2o11MKhLRDzXR2+8DJ9tXhsBv9r7qCM26Bl866Sh9z52iqf1qAUzTgd3ErKmJPhozyEkiq3wVNiYbJdYcxWQhhWAgW7APGxMXrIWAWLw3yu1oHN6LRnK82eS5HKzKORxm0nlj9oxBgg72Q+yCQkqCzcrr38WzdUNOdWBRGhMduMgFKRukL+zNizO0QAahzTKyHLtlmHAcHzY1w8s4tqt/Tppk5veIZsoI2U4DTTZW2ZBhx0VhYPEBgXWWZ3eFufkvIuj9GsbtryE8KgJOor6WlETL3rIXA1EuaKqU+IpA24x5iesKD4Mv8xjSAq6iEk3dotssRylcR0JkJnJEAxz48YwCAWO+JdO9QemMCy1Ps+1Ly1DSSqKF6GHuQ/PsRQo+b8xIzzaT9nWriWqHnhL2MmDd13f5+qEP1csXitwlQx5lYT3/AvTizZYsLshv30StKb+w1bfSbfsiG2nvjoXn+0pzj4E8Xj4HybkeDrWLrIJvmnSvApVcUu0MHtdXkdZrFJgCqCWyi4FS/Br6pF4IHuJrHVoBnqUSKK9t4b0ZE+H5cBDk+2cQxtkBkAxsZ2KCgWxc51hDD9MSaWCzaE1aTAKVTJivO5R2fBHsdCVKa4Z9fwFwOkASmpQng/kt32HOcB7T59506Es685mkoz+oG9vIt4wSj+lazWKIBp6mhPTBNN/R9aQWxTp12hIeVaLaJRSzazaDMTESHQx/0aU68ojx36iVwxdvLhbbbrSdoClDJF2wKu61zQ2z/gxesi1Og8c00qNfz6d/qfQaMH5wPP/UUL+fqnYMd++qe0ay206Os//MktWJ2RCwMY/DJJ2GKBp/HC5Nl0QfMU1YtIWncM8xzHCqK2eeVtK9C2s9KYsMFdFzJjOXEgjyqIfScY0Uk6w+ZMEonMQIoMwNk8GLqv0oSV1MBnx9zCpwy4hmYtXASHL9vu7iqnarqIf4kG3ivIY8CjdcaL1g2i2VfdIa9yy1CFTVAAswRwDR1wHliH6fjjyakxpVvutcClrFsvnGzgV7QQ6G/9jEmryNVZ1AWzRtrrf+bMYFAp5QAYyIBiAoOEwkEEEjGRnmMDAKXXCpq4q6TvpegNILqMJHqhstnUB2dBtsWQPtHIYyl4lTOV8YnDLQlwMpj4jlNZ8C9iM6hml3jsQxki+h8JECHAvUR9BLJpX3I41cL8MqQAIWG57ERTu58ukgzrIKNxFXthBW9B0G/zlPg+cUvw1/XfwiJ4MJ5xWfHgWe2pps0VjgMqgCBaW1aD1h49CCY3ed0WHvkQPGlByxVZbfYvd7xmsXapQ0X+0YIO67L18HlScoBZ/kKfS4otz051lT/dwMbPg5HqlKWj6DGVqUwlRLWkPMIQAqVz8AaazV7kQM1ThVkRhAI5FNjlgAxnbYvVIBETpokmVd7RivkEwCUUt3y6BjVVA8JDhww55K6clK9nbRtT1p3Op2TBKcSqmMBfScZqcr68gi4Sgiceir7r2bXUwcozKcx05M3XVd5FsuLKJgcu7aBK8UJf7viflh62PHw1sfP+CUfjqHDYSrbErLhkSF/htf6ngktKdkAzXUCmHZcH6d5x4DFcrxmiVp64Rg0zHZeFgmc3CldwVlRAv3WvKz/3LkrPvW3wKLwgoxi11tWOAmC0wR+7TqkSll/iEakpOKxBjJveojPI5g0LKBGWsoao/zrVFidXC9fYUdOCE5Fye0A9pTLWJMEqE9YnXD/J7HjyFEhTqqfU2Fcc2m5BLNqegFUEzNaSdeiUGFpct/VDLgm0P4LBWtSgV03yZdFcaJoSOMwiRNRkjnqawRkbIW5p14KQ4c/Aj8nZUF32KMnbz478BIYeN0kmPm7EdDi1TrF7d56q7228oc40F5FcGrDRcYb2s9Mfd0p3SB912rot2q6nmrwGwEn3eajazyVLcM0A5zaxL0fjo9+Hs5eYD/EACmXsSTZ6EoV7yiPyUHZaI9mDUn9XGggJZ3sLalBYAZTyVgkS5lIx5eSq1gBz1KF/ZRGOL/NYaQUMMDLY6yMLy9m4CQBqVTxxEoVv05eV6fCekqY3DVicj0NrnuJEThJBoV5MJg4Em6KwCa6wRtJ7mF+zlTR+GscLe5vvBVbyhf3GwL9M7rBbesWwsLDB8DK488AaKgG+85NQ8Bqe1uAUnY7HjCctCbiUBdMe3AlZAhZJ5jT6hn67+g1x6f/lvwn7Pk6jV4cstI46KwcAomZv2Z3pJx1YM8hBlAlTOLJxlmo+DF5VGawxrdZAQGjz7LB5ysejGy4BUxiqqA5ljGy6bSdNOk1Zf8FzOtS5WNPCJ8APJHJU4298Ln8qlJY3ggFxAoIWJzsXOX3PZlsHQuhjf4CLoHJe9Kvk/hcxa5ZkQQsK8mGa8KcHGYON9IbHId/LCYWhVLrdCHTBotWk23ftRX2pjrh0aGjYOVR/cG2awvY6wTDstowjaGt4IRv89+bASeMFlsCxLlqodePc8GqtQhwcpoBp4l0s6QXdjP9L38s4jz6H4ECkzr5xDcf03fS4cdcLJzXezQtH8w8vEVMvvWm/+8zkFdX0vq4TzmvN748foLA0KQxDLTwzclHAlwPvsRL/K6GHnw5ZxMm1b7N3vB4L+Xv9/Gfbt8BxuMP5bF3smPLWTOz6JxwTtjnITDD5y0HKWhNp0ZZxSTduYwpSL8mVDFiPaWKAS2ZUm4IGQlM7nA2M1Epi1RvRgGIIgMppUpaZwhg4+1gIvO6JjAwWcRY6GblfIrY+pw1GtUhj14WJYrUzmOAifWaTuDlf+BxtN8j4Bsr5iH/AdEaB4XG08U8mRoWghRmIL9PjXGnvh/BVvCHNTVRdGcp4C/ta8fb/E6I4qfIvULK5fyyBJIadkFjUo76G3ihAs8VJ/4fTg8tNrDD6MbjBG+30vf3E8AgYOFMnL3YWzGbAONqeiDxWj5LzBSnwr2J9oEgOI22w/8/MwAomTaB9ahgkqGKXhL4MnmS/v8XHfM9kh14b16lbbAOZ9Nb63u6nsupDjfQfcW6yIHRe5RrYiQpR9Oxa9ixP6DnoQwCP6KAD+AsAsup9KwcyN/Ek0YsMBaQy2TaBIUtAPOUzEQxlekhrIk81gjVhp0Hgd5DAONUggkQPvUhUvqB3J4b89LMPtdgH9JjyqfzOteAGY1l5v3RrP6ldLzqEOyp2EB6FgvGJHv0qplpX8JHwI+nhjCezOiN9BZdRg3tBXpbYqvvRt/vluSFt7B2Bv4A5d8heGyZudA0SK3ZQnUwrYawAT3GHgB1bB52IOC83TgJ0Ey6eJ0heF6qYxmQYlb7CrYtsHVlb+lQduxWOMskXj5jIqfSScnJc7oS+32VbqaDmM8AWr+ZAH4IrQuMJboJWFbR9cb4GzXYUKMLLIzJHk7XBCc4lLOnJrJ9n8RY1UXg+52/AwlQsjdpLvNW8hjz6ckAI58anVljWprYpWHkJWcJTnq5yFSDPKXRTwjjIbU18hjTkvI2PwzolSgyTgWwlRDcs1iqXD8ntO51lGb6DOW+qOdXoprkPB4gidGF3rCziSmcTmwKLx7OZ4STuC0B879MbDYepoc5anBqiUsER0O5nlLgcnSKxqpBNrBVlAsYyi+jeiDz6QSBaZD/w5jEDcRw9hAQyLFscvaA16iB3kwNegVdrzuIrX0Nrbu9OUhxvJfXWQ7srYRAjx7OEzWOgAa9wiNpmcYAxcEekr0kRSvoDZpvcHyjsZVOAqF9EPihhY/IH9wKgcHB3J/5mXlrBzr8DUa8raWUmQCBLvGJihTJpefB6LP8m8uALtxxS2l7ngTqDLHuRINSGgGkzJjkTvZ8F9D/Jcx/GssAt0ABi3xFGucqXp2TfZ5gAEQFzByvZvdByuJ8KelYPUpDPYhv0lt4FTUUNNH7kzGOY1y+YA9dUwc9PMvpGA+0zQTWQBOglFH1EyTX7dDBKsp4gpgTsh8czHsjAdMUBXQ20MMwlmgv+jE4vcsl9FbaRlIPGN3HfeAMlFfRRZ9E/tIME/WKY6wE2PXm88YcTrIQXyRXEIjWE2s7i9aRYDaPGBWymsnE6F5ijCdOAUgeDQpTwjgKfL8ic0wIsLWH2d+vHpRjY5Q4yRufbKg9GVMoZA1pEZNBxYxxSe/oJIicoyS9lbkQnAwpj6+xehQZFGcYgJJeUk8TEnA6HWu6sryEeUgrGaMsVbbTIJBKwSVqlbJtoVLffAN5B0pnxUpxvzTJNAV4FUMYBrSNGMIw+nwPPYS/Vh4O/kJhm38vTaNJ6dKqNzPiERXOLaCbgNmc60m+bqUGiDPOf674DUUMuFIhMGj4FQV05W/u4Q8lbKJl8kF6n7HWQcS09igvDdmwu5H39TGZ3JcR0L1NQHccMbRsZtbjwzKfsUTpLVXQvXyfjnuWwXPwZzq3U+jez6J9fUgy/wV6kb1EIDcUAlPCJLH9yHmsbHBgIp81YimdckVD+IRJLsluZC/VFjpnNVdHxgh6QRUQ4CyiRhYuFWAGYya5tG4Jk14zDPwunp0dzmeS0q06wvEXKcfgxrzqMc1Qzmci+65aqYvaGzjD4FosYiUoBBAtEvcjyMPiKQdxrmnhOvB0A1WGOicROEbN7qgHKbM9G3vsSZAspF1azSY956kNJAwb7XfUYNcw0BrNTGdgLKSIsQr+czGzeLUIKG4i/wpjKTX+JQR88g3SlRrFbvXUwDfVTT+SUygZLycwvwMCvyQzm46BANRIPtXrEJim5XJ64J8mKcov0CsQ+IHTN6l+OBFfX6rXJWSAzyfTexF1HNzKpOxiCMwZxcHO1nHWZJvN8UXMc+LJkXxs2wwmezYTUBUyySIb2QzWYGWXeh5rkMVhgKKQMbViRXZOhNbZ4irbKGqHSa76RNHuI9x3JSb8urD1I6lnWDeLprU9rcYkQP0JgruwjeJZCP2zTRHDnZgJ2TuXw3HrXoemxIy27gbZR3eScU0k8XqR4dygrDuIZNc6+r8fyZnvlPWSiGFsIxos/y9jYNSLjrWeGKqc2kTuK5VYTgt5Y7XMaM+iFwc/bjeScR5iQb0JaJYRMHWn71PowVLrfCEBi5yhArffyaSrNP+zCQC/ZdKvD5nzcnbRI+jls4nVO2KEmZPcH+HmJI/FoRNxB0k9Utq1tQBZHBCsT1CHP+xpadMLe7fCYGoNGi8o4CFjXYj1GpR1Gwy23RRh3/uYOc8j1I8o7IDggbAbIXjCu7IIL4z3I9QHwHh6nUaDdX+GA9t7F4sYQHVI7G7PxjZXLdSk94LqjGMgHWWeIzV2Zw+xiDGm/82wHuDj45v9Wgg93ay5k/C6wBOfBg1JOWDzuGJ3NRaxiDGodgV6FDiH9qyO2BlKO/C6dXDSP8ciFrGIAZRZBcY+/0DA9Ers0sciFrE4GAAKe7dw3nLsanwhdsljEYtYmI3/F2AAWMfuF78p+28AAAAASUVORK5CYII="

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f87cb53aeb9529e9bf57e36c3b6d1f1d.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			// Test for IE <= 9 as proposed by Browserhacks
			// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
			// Tests for existence of standard globals is to allow style-loader 
			// to operate correctly into non-standard environments
			// @see https://github.com/webpack-contrib/style-loader/issues/177
			return window && document && document.all && !window.atob;
		}),
		getElement = (function(fn) {
			var memo = {};
			return function(selector) {
				if (typeof memo[selector] === "undefined") {
					memo[selector] = fn.call(this, selector);
				}
				return memo[selector]
			};
		})(function (styleTarget) {
			return document.querySelector(styleTarget)
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [],
		fixUrls = __webpack_require__(11);

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		options.attrs = typeof options.attrs === "object" ? options.attrs : {};

		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the <head> element
		if (typeof options.insertInto === "undefined") options.insertInto = "head";

		// By default, add <style> tags to the bottom of the target
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var styleTarget = getElement(options.insertInto)
		if (!styleTarget) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				styleTarget.insertBefore(styleElement, styleTarget.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				styleTarget.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			styleTarget.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		options.attrs.type = "text/css";

		attachTagAttrs(styleElement, options.attrs);
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";

		attachTagAttrs(linkElement, options.attrs);
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function attachTagAttrs(element, attrs) {
		Object.keys(attrs).forEach(function (key) {
			element.setAttribute(key, attrs[key]);
		});
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement, options);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

		if (options.convertToAbsoluteUrls || autoFixUrls){
			css = fixUrls(css);
		}

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */

	module.exports = function (css) {
	  // get current location
	  var location = typeof window !== "undefined" && window.location;

	  if (!location) {
	    throw new Error("fixUrls requires window.location");
	  }

		// blank or null?
		if (!css || typeof css !== "string") {
		  return css;
	  }

	  var baseUrl = location.protocol + "//" + location.host;
	  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

		// convert each url(...)
		/*
		This regular expression is just a way to recursively match brackets within
		a string.

		 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
		   (  = Start a capturing group
		     (?:  = Start a non-capturing group
		         [^)(]  = Match anything that isn't a parentheses
		         |  = OR
		         \(  = Match a start parentheses
		             (?:  = Start another non-capturing groups
		                 [^)(]+  = Match anything that isn't a parentheses
		                 |  = OR
		                 \(  = Match a start parentheses
		                     [^)(]*  = Match anything that isn't a parentheses
		                 \)  = Match a end parentheses
		             )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
		 \)  = Match a close parens

		 /gi  = Get all matches, not the first.  Be case insensitive.
		 */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl
				.trim()
				.replace(/^"(.*)"$/, function(o, $1){ return $1; })
				.replace(/^'(.*)'$/, function(o, $1){ return $1; });

			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			  return fullMatch;
			}

			// convert the url to a full url
			var newUrl;

			if (unquotedOrigUrl.indexOf("//") === 0) {
			  	//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}

			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});

		// send back the fixed css
		return fixedCss;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/._css-loader@0.28.0@css-loader/index.js!./icons-extra.css", function() {
				var newContent = require("!!../../../node_modules/._css-loader@0.28.0@css-loader/index.js!./icons-extra.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)(undefined);
	// imports


	// module
	exports.push([module.id, "@font-face {\n    font-family: MuiiconSpread;\n    font-weight: normal;\n    font-style: normal;\n    src:  url(" + __webpack_require__(14) + ") format('truetype'); /* iOS 4.1- */\n}\n.mui-icon-extra\n{\n    font-family: MuiiconSpread;\n    font-size: 24px;\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    display: inline-block;\n    text-decoration: none;\n    -webkit-font-smoothing: antialiased;\n}\n.mui-icon-extra-cold:before { content: \"\\E500\"; }\n.mui-icon-extra-share:before { content: \"\\E200\"; }\n.mui-icon-extra-class:before { content: \"\\E118\"; }\n.mui-icon-extra-custom:before { content: \"\\E117\"; }\n.mui-icon-extra-new:before { content: \"\\E103\"; }\n.mui-icon-extra-card:before { content: \"\\E104\"; }\n.mui-icon-extra-grech:before { content: \"\\E105\"; }\n.mui-icon-extra-trend:before { content: \"\\E106\"; }\n.mui-icon-extra-filter:before { content: \"\\E207\"; }\n.mui-icon-extra-holiday:before { content: \"\\E300\"; }\n.mui-icon-extra-cart:before { content: \"\\E107\"; }\n.mui-icon-extra-heart:before { content: \"\\E180\"; }\n.mui-icon-extra-computer:before { content: \"\\E600\"; }\n.mui-icon-extra-express:before { content: \"\\E108\"; }\n.mui-icon-extra-gift:before { content: \"\\E109\"; }\n.mui-icon-extra-gold:before { content: \"\\E102\"; }\n.mui-icon-extra-lamp:before { content: \"\\E601\"; }\n.mui-icon-extra-rank:before { content: \"\\E110\"; }\n.mui-icon-extra-notice:before { content: \"\\E111\"; }\n.mui-icon-extra-sweep:before { content: \"\\E202\"; }\n.mui-icon-extra-arrowleftcricle:before { content: \"\\E401\"; }\n.mui-icon-extra-dictionary:before { content: \"\\E602\"; }\n.mui-icon-extra-heart-filled:before { content: \"\\E119\"; }\n.mui-icon-extra-xiaoshuo:before { content: \"\\E607\"; }\n.mui-icon-extra-top:before { content: \"\\E403\"; }\n.mui-icon-extra-people:before { content: \"\\E203\"; }\n.mui-icon-extra-topic:before { content: \"\\E603\"; }\n.mui-icon-extra-hotel:before { content: \"\\E301\"; }\n.mui-icon-extra-like:before { content: \"\\E206\"; }\n.mui-icon-extra-regist:before { content: \"\\E201\"; }\n.mui-icon-extra-order:before { content: \"\\E113\"; }\n.mui-icon-extra-alipay:before { content: \"\\E114\"; }\n.mui-icon-extra-find:before { content: \"\\E400\"; }\n.mui-icon-extra-arrowrightcricle:before { content: \"\\E402\"; }\n.mui-icon-extra-calendar:before { content: \"\\E115\"; }\n.mui-icon-extra-prech:before { content: \"\\E116\"; }\n.mui-icon-extra-cate:before { content: \"\\E501\"; }\n.mui-icon-extra-comment:before { content: \"\\E209\"; }\n.mui-icon-extra-at:before { content: \"\\E208\"; }\n.mui-icon-extra-addpeople:before { content: \"\\E204\"; }\n.mui-icon-extra-peoples:before { content: \"\\E205\"; }\n.mui-icon-extra-calc:before { content: \"\\E101\"; }\n.mui-icon-extra-classroom:before { content: \"\\E604\"; }\n.mui-icon-extra-phone:before { content: \"\\E404\"; }\n.mui-icon-extra-university:before { content: \"\\E605\"; }\n.mui-icon-extra-outline:before { content: \"\\E606\"; }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "683f39531666ff9a771a516fecca72f7.ttf";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/._css-loader@0.28.0@css-loader/index.js!../../node_modules/._sass-loader@6.0.3@sass-loader/lib/loader.js!./site1.scss", function() {
				var newContent = require("!!../../node_modules/._css-loader@0.28.0@css-loader/index.js!../../node_modules/._sass-loader@6.0.3@sass-loader/lib/loader.js!./site1.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)(undefined);
	// imports


	// module
	exports.push([module.id, "#v2 {\n  border: 1px solid blue; }\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/._css-loader@0.28.0@css-loader/index.js!../../node_modules/._less-loader@4.0.3@less-loader/dist/index.js!./site2.less", function() {
				var newContent = require("!!../../node_modules/._css-loader@0.28.0@css-loader/index.js!../../node_modules/._less-loader@4.0.3@less-loader/dist/index.js!./site2.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)(undefined);
	// imports


	// module
	exports.push([module.id, "#res {\n  border: 2px solid green;\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	// 1.0 定义add函数
	function add(x, y) {
		return x + y
	}

	// 2.0 导出add方法
	module.exports = add;


/***/ }
/******/ ]);