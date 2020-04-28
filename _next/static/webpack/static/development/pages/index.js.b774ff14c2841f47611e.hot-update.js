webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Fetch.jsx":
/*!**********************************!*\
  !*** ./src/components/Fetch.jsx ***!
  \**********************************/
/*! exports provided: Fetch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fetch", function() { return Fetch; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");





var _jsxFileName = "/Users/Ernie/Desktop/Github/bitplay/src/components/Fetch.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Fetch = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Fetch, _Component);

  var _super = _createSuper(Fetch);

  function Fetch() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Fetch);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Fetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new swiper__WEBPACK_IMPORTED_MODULE_6__["default"](".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          991: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 2
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var products = [{
        name1: "Cosmos「宇」",
        name2: "18K紅色黃金青金石及紫石英硬玉戒指",
        imgUrl: "https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg",
        price: 4900
      }];
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, "\u63A8\u85A6\u98FE\u54C1"), __jsx("div", {
        className: "swiper-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "swiper-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "swiper-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "swiper-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }, products.map(function (data, index) {
        return __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 19
          }
        }, __jsx("img", {
          src: "https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg",
          alt: "",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }
        }), __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }
        }, "Cosmos\u300C\u5B87\u300D"), __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }
        }, "18K\u7D05\u8272\u9EC3\u91D1\u9752\u91D1\u77F3\u53CA\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"), __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }
        }, "HK$4900.00"));
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 19
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 19
        }
      }, "Cosmos\u300C\u5B87\u300D"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }
      }, "18K\u7D05\u8272\u9EC3\u91D1\u9752\u91D1\u77F3\u53CA\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 19
        }
      }, "HK$4900.00"))), __jsx("div", {
        className: "swiper-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 19
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 19
        }
      }, "Cosmos\u300C\u5B87\u300D"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 19
        }
      }, "18K\u7D05\u8272\u9EC3\u91D1\u9752\u91D1\u77F3\u53CA\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 19
        }
      }, "HK$4900.00"))), __jsx("div", {
        className: "swiper-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 19
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }
      }, "Cosmos\u300C\u5B87\u300D"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 19
        }
      }, "18K\u7D05\u8272\u9EC3\u91D1\u9752\u91D1\u77F3\u53CA\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 19
        }
      }, "HK$4900.00"))), __jsx("div", {
        className: "swiper-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 19
        }
      }, "Cosmos\u300C\u5B87\u300D"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }
      }, "18K\u7D05\u8272\u9EC3\u91D1\u9752\u91D1\u77F3\u53CA\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 19
        }
      }, "HK$4900.00"))), __jsx("div", {
        className: "swiper-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 19
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 19
        }
      }, "Cosmos\u300C\u5B87\u300D"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }, "18K\u7D05\u8272\u9EC3\u91D1\u9752\u91D1\u77F3\u53CA\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }, "HK$4900.00"))), __jsx("div", {
        className: "swiper-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 19
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 19
        }
      }, "Cosmos\u300C\u5B87\u300D"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 19
        }
      }, "18K\u7D05\u8272\u9EC3\u91D1\u9752\u91D1\u77F3\u53CA\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 19
        }
      }, "HK$4900.00"))))), __jsx("div", {
        className: "swiper-button-next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "swiper-button-prev",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "swiper-pagination",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Fetch;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Fetch);

/***/ })

})
//# sourceMappingURL=index.js.b774ff14c2841f47611e.hot-update.js.map