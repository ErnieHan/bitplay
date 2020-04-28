(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/ernie.js"],{

/***/ "./node_modules/next/amp.js":
/*!**********************************!*\
  !*** ./node_modules/next/amp.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/amp */ "./node_modules/next/dist/next-server/lib/amp.js")


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fernie&absolutePagePath=%2FUsers%2FErnie%2FDesktop%2FGithub%2Fbitplay%2Fpages%2Fernie.js!./":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fernie&absolutePagePath=%2FUsers%2FErnie%2FDesktop%2FGithub%2Fbitplay%2Fpages%2Fernie.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ernie", function() {
      var mod = __webpack_require__(/*! ./pages/ernie.js */ "./pages/ernie.js")
      if(true) {
        module.hot.accept(/*! ./pages/ernie.js */ "./pages/ernie.js", function() {
          if(!next.router.components["/ernie"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ernie.js */ "./pages/ernie.js")
          next.router.update("/ernie", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/ernie.js":
/*!************************!*\
  !*** ./pages/ernie.js ***!
  \************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_function_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/function/constants */ "./src/function/constants.js");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/amp */ "./node_modules/next/amp.js");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Ernie/Desktop/Github/bitplay/pages/ernie.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Ernie(props) {
  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_2__["useAmp"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, isAmp ? "AMP page" : "normal HTML", __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "My AMP About Page!"), isAmp ? __jsx("amp-img", {
    width: "300",
    height: "300",
    src: "./images/love.jpg",
    alt: "a cool image",
    layout: "responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }) : __jsx("img", {
    src: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_1__["ROOT"], "/images/love.jpg"),
    alt: "love.jpg",
    style: {
      maxWidth: "500px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }));
}

var config = {
  amp: "hybrid"
};
/* harmony default export */ __webpack_exports__["default"] = (Ernie);

/***/ }),

/***/ "./src/function/constants.js":
/*!***********************************!*\
  !*** ./src/function/constants.js ***!
  \***********************************/
/*! exports provided: ROOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT", function() { return ROOT; });
var ROOT = "";


/***/ }),

/***/ 4:
/*!**************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fernie&absolutePagePath=%2FUsers%2FErnie%2FDesktop%2FGithub%2Fbitplay%2Fpages%2Fernie.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fernie&absolutePagePath=%2FUsers%2FErnie%2FDesktop%2FGithub%2Fbitplay%2Fpages%2Fernie.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fernie&absolutePagePath=%2FUsers%2FErnie%2FDesktop%2FGithub%2Fbitplay%2Fpages%2Fernie.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ernie.js.map