(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["GradientText"] = factory(require("react"));
	else
		root["GradientText"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GradientText = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GradientText = function (_React$Component) {
	    _inherits(GradientText, _React$Component);

	    function GradientText(props) {
	        _classCallCheck(this, GradientText);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GradientText).call(this, props));

	        _this.state = {
	            elasped: 0,
	            hover: false
	        };

	        _this.mouseOver = _this.mouseOver.bind(_this);
	        _this.mouseOut = _this.mouseOut.bind(_this);
	        _this.timer = setInterval(function () {
	            this.tick();
	        }.bind(_this), _this.props.interval);
	        return _this;
	    }

	    _createClass(GradientText, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            // animating prop - should gradient be animated or one time fling
	            if (!this.props.animating) clearInterval(this.timer);

	            if (this.props.hoverable) {
	                // clear interval and only update elasped when hovering
	                clearInterval(this.timer);
	            }

	            if (this.props.onEvent) {
	                clearInterval(this.timer);

	                this.bound = function (e) {
	                    this.boundEvent(e);
	                }.bind(this);
	                if (window.addEventListener) window.addEventListener(this.props.onEvent.name, this.bound, false);else if (window.attachEvent) window.attachEvent(this.props.onEvent.name, this.bound);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {

	            clearInterval(this.timer);

	            clearInterval(this.mouseOverTimer);

	            if (this.props.onEvent) {
	                if (window.removeEventListener) window.removeEventListener(this.props.onEvent.name, this.bound, false);
	                if (window.detachEvent) window.detachEvent(this.props.onEvent.name, this.bound);
	            }
	        }
	    }, {
	        key: 'mouseOver',
	        value: function mouseOver() {

	            if (this.props.hoverable) {
	                this.mouseOverTimer = setInterval(function () {
	                    this.tick();
	                }.bind(this), this.props.interval);

	                this.setState({
	                    hover: true,
	                    elasped: this.state.elasped + 1
	                });
	            }
	        }
	    }, {
	        key: 'mouseOut',
	        value: function mouseOut() {

	            if (this.props.hoverable) {
	                clearInterval(this.mouseOverTimer);

	                this.setState({ hover: false });
	            }
	        }
	    }, {
	        key: 'boundEvent',
	        value: function boundEvent(e) {

	            this.setState({
	                elasped: this.state.elasped + 1
	            });

	            this.props.onEvent.callback(e);
	        }
	    }, {
	        key: 'tick',
	        value: function tick() {
	            this.setState({
	                elasped: this.state.elasped + 1
	            });
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.state.elasped === 0) return true;
	            if (nextProps.hoverable && this.state.hover === true) return true;else if (nextProps.hoverable && this.state.hover === false) return false;
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var colors = void 0;

	            var _props = this.props;
	            var data = _props.data;
	            var gradient = _props.gradient;


	            if (data === '') return false;

	            // gradient may be a key to gradients store
	            if (typeof gradient === 'string') colors = gradients[gradient];
	            // hope that gradient is an array of colors
	            else colors = gradient;

	            var lengthOfColors = colors.length;

	            var chars = this.props.data.split('');
	            var charsLength = chars.length;

	            // accumulates attribute mapping based on objects
	            var ops = {

	                store: [],

	                add: function add(fn) {
	                    this.store.push(fn);
	                },
	                run: function run(char, i) {
	                    var accum = {};
	                    this.store.forEach(function (fn) {
	                        fn(char, i, accum);
	                    });
	                    return accum;
	                }
	            };

	            // opacity mapping
	            if (this.props.opacity !== 100) {
	                ops.add(function (char, i, styles) {
	                    styles.opacity = (i + _this2.state.elasped) % charsLength / charsLength;
	                });
	            }

	            // color mapping
	            if (lengthOfColors === 1) {
	                ops.add(function (char, i, styles) {
	                    styles.color = colors[0];
	                });
	            } else if (lengthOfColors > 1) {
	                ops.add(function (char, i, styles) {
	                    styles.color = colors[(i + _this2.state.elasped) % lengthOfColors];
	                });
	            }

	            chars = chars.map(function (char, i) {
	                var style = ops.run(char, i);
	                return _react2.default.createElement(
	                    'span',
	                    { key: i, style: style },
	                    char
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { onMouseOver: this.mouseOver, onMouseOut: this.mouseOut },
	                chars
	            );
	        }
	    }]);

	    return GradientText;
	}(_react2.default.Component);

	GradientText.propTypes = {
	    data: _react2.default.PropTypes.string.isRequired,
	    gradient: _react2.default.PropTypes.array,
	    interval: _react2.default.PropTypes.number,
	    hoverable: _react2.default.PropTypes.bool,
	    onEvent: _react2.default.PropTypes.shape({
	        name: _react2.default.PropTypes.string.isRequired,
	        callback: _react2.default.PropTypes.func.isRequired
	    }),
	    animating: _react2.default.PropTypes.bool,
	    opacity: _react2.default.PropTypes.number
	};
	GradientText.defaultProps = {
	    gradient: [],
	    opacity: 100,
	    interval: 50,
	    hoverable: false,
	    animating: true
	};
	exports.GradientText = GradientText;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;