(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["GradientText"] = factory(require("react"));
	else
		root["GradientText"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/GradientText */ \"./src/GradientText.js\");\n\n//# sourceURL=webpack://GradientText/./index.js?");

/***/ }),

/***/ "./src/GradientText.js":
/*!*****************************!*\
  !*** ./src/GradientText.js ***!
  \*****************************/
/*! exports provided: GradientText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GradientText\", function() { return GradientText; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar GradientText =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(GradientText, _React$Component);\n\n  function GradientText(props) {\n    var _this;\n\n    _classCallCheck(this, GradientText);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(GradientText).call(this, props));\n    console.log('k ', react__WEBPACK_IMPORTED_MODULE_0___default.a.version);\n    debugger;\n    _this.state = {\n      elasped: 0,\n      hover: false\n    };\n    _this.mouseOver = _this.mouseOver.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.mouseOut = _this.mouseOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.timer = setInterval(function () {\n      this.tick();\n    }.bind(_assertThisInitialized(_assertThisInitialized(_this))), _this.props.interval);\n    return _this;\n  }\n\n  _createClass(GradientText, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      // animating prop - should gradient be animated or one time fling\n      if (!this.props.animating) clearInterval(this.timer);\n\n      if (this.props.hoverable) {\n        // clear interval and only update elasped when hovering\n        clearInterval(this.timer);\n      }\n\n      if (this.props.onEvent) {\n        clearInterval(this.timer);\n\n        this.bound = function (e) {\n          this.boundEvent(e);\n        }.bind(this);\n\n        if (window.addEventListener) window.addEventListener(this.props.onEvent.name, this.bound, false);else if (window.attachEvent) window.attachEvent(this.props.onEvent.name, this.bound);\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearInterval(this.timer);\n      clearInterval(this.mouseOverTimer);\n\n      if (this.props.onEvent) {\n        if (window.removeEventListener) window.removeEventListener(this.props.onEvent.name, this.bound, false);\n        if (window.detachEvent) window.detachEvent(this.props.onEvent.name, this.bound);\n      }\n    }\n  }, {\n    key: \"mouseOver\",\n    value: function mouseOver() {\n      if (this.props.hoverable) {\n        this.mouseOverTimer = setInterval(function () {\n          this.tick();\n        }.bind(this), this.props.interval);\n        this.setState({\n          hover: true,\n          elasped: this.state.elasped + 1\n        });\n      }\n    }\n  }, {\n    key: \"mouseOut\",\n    value: function mouseOut() {\n      if (this.props.hoverable) {\n        clearInterval(this.mouseOverTimer);\n        this.setState({\n          hover: false\n        });\n      }\n    }\n  }, {\n    key: \"boundEvent\",\n    value: function boundEvent(e) {\n      this.setState({\n        elasped: this.state.elasped + 1\n      });\n      this.props.onEvent.callback(e);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.setState({\n        elasped: this.state.elasped + 1\n      });\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps) {\n      if (this.state.elasped === 0) return true;\n      if (nextProps.hoverable && this.state.hover === true) return true;else if (nextProps.hoverable && this.state.hover === false) return false;\n      return true;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var colors;\n      var _this$props = this.props,\n          data = _this$props.data,\n          gradient = _this$props.gradient;\n      if (data === '') return false; // gradient may be a key to gradients store\n\n      if (typeof gradient === 'string') colors = gradients[gradient]; // hope that gradient is an array of colors\n      else colors = gradient;\n      var lengthOfColors = colors.length;\n      var chars = this.props.data.split('');\n      var charsLength = chars.length; // accumulates attribute mapping based on objects\n\n      var ops = {\n        store: [],\n        add: function add(fn) {\n          this.store.push(fn);\n        },\n        run: function run(char, i) {\n          var accum = {};\n          this.store.forEach(function (fn) {\n            fn(char, i, accum);\n          });\n          return accum;\n        }\n      }; // opacity mapping\n\n      if (this.props.opacity !== 100) {\n        ops.add(function (char, i, styles) {\n          styles.opacity = (i + _this2.state.elasped) % charsLength / charsLength;\n        });\n      } // color mapping\n\n\n      if (lengthOfColors === 1) {\n        ops.add(function (char, i, styles) {\n          styles.color = colors[0];\n        });\n      } else if (lengthOfColors > 1) {\n        ops.add(function (char, i, styles) {\n          styles.color = colors[(i + _this2.state.elasped) % lengthOfColors];\n        });\n      }\n\n      chars = chars.map(function (char, i) {\n        var style = ops.run(char, i);\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          key: i,\n          style: style\n        }, char);\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onMouseOver: this.mouseOver,\n        onMouseOut: this.mouseOut\n      }, chars);\n    }\n  }]);\n\n  return GradientText;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n_defineProperty(GradientText, \"propTypes\", {\n  data: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.string.isRequired,\n  gradient: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.array,\n  interval: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.number,\n  hoverable: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.bool,\n  onEvent: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.shape({\n    name: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.string.isRequired,\n    callback: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.func.isRequired\n  }),\n  animating: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.bool,\n  opacity: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.number\n});\n\n_defineProperty(GradientText, \"defaultProps\", {\n  gradient: [],\n  opacity: 100,\n  interval: 50,\n  hoverable: false,\n  animating: true\n});\n\n\n\n//# sourceURL=webpack://GradientText/./src/GradientText.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack://GradientText/multi_./index.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://GradientText/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ });
});