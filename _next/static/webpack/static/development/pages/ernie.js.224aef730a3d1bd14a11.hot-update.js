webpackHotUpdate("static/development/pages/ernie.js",{

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
  }, console.log(props), isAmp ? "AMP page" : "normal HTML", __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
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
      lineNumber: 12,
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
      lineNumber: 14,
      columnNumber: 9
    }
  }));
}

var config = {
  amp: "hybrid"
};
/* harmony default export */ __webpack_exports__["default"] = (Ernie);

/***/ })

})
//# sourceMappingURL=ernie.js.224aef730a3d1bd14a11.hot-update.js.map