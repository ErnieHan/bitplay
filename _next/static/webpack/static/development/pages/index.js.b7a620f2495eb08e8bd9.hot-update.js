webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_css_Header_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/css/Header.module.css */ "./src/css/Header.module.css");
/* harmony import */ var _src_css_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_css_Header_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_function_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/function/constants */ "./src/function/constants.js");
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/Header */ "./src/components/Header.jsx");








var _jsxFileName = "/Users/Ernie/Desktop/Github/bitplay/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var __N_SSG = true;
var App = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      searchText: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChangeSearch", function (event) {
      _this.setState({
        searchText: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleSearch", function (event) {
      event.preventDefault();
      var searchText = _this.state.searchText;

      if (searchText.trim().length !== 0) {
        window.location = "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/manon?").concat(searchText);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "scrollDown", function () {
      var y = _this.refs["image"].offsetTop;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      return __jsx("div", {
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, __jsx(_src_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }), __jsx("h1", {
        style: {
          padding: "15px"
        },
        className: "jsx-3743228756" + " " + (_src_css_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.error || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, "This is Ernie NEXT.js website to Github"), __jsx("div", {
        className: "jsx-3743228756" + " " + "ernie",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, "testing"), __jsx("div", {
        className: "jsx-3743228756" + " " + "menu-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/about",
        as: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/about"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }, "click me go to About Page"))), __jsx("div", {
        className: "jsx-3743228756" + " " + "menu-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/manon",
        as: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/manon"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "click me go to Manon Page"))), __jsx("div", {
        className: "jsx-3743228756" + " " + "menu-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/taiwancanhelp",
        as: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/taiwancanhelp"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, "click me go to Taiwan Can Help"))), __jsx("form", {
        onSubmit: this.handleSearch,
        action: "javascript:return true",
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "search",
        value: this.state.searchText,
        onChange: this.handleChangeSearch,
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      })), __jsx("input", {
        type: "text",
        pattern: "[0-9]*",
        placeholder: "\u8ACB\u8F38\u5165\u6578\u5B57",
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }), __jsx("form", {
        action: "javascript:return true",
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "number",
        placeholder: "\u8ACB\u8F38\u5165\u6578\u5B57",
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      })), __jsx("div", {
        onClick: this.scrollDown,
        className: "jsx-3743228756" + " " + "move-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, "scroll drop"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3743228756",
        __self: this
      }, ".address.jsx-3743228756{padding:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Fcm5pZS9EZXNrdG9wL0dpdGh1Yi9iaXRwbGF5L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFb0IsQUFHMEIsYUFDZiIsImZpbGUiOiIvVXNlcnMvRXJuaWUvRGVza3RvcC9HaXRodWIvYml0cGxheS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9jc3MvSGVhZGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFJPT1QgfSBmcm9tIFwiLi4vc3JjL2Z1bmN0aW9uL2NvbnN0YW50c1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2VhcmNoVGV4dDogXCJcIlxuICB9O1xuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICBoYW5kbGVDaGFuZ2VTZWFyY2ggPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hUZXh0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTZWFyY2ggPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHNlYXJjaFRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNlYXJjaFRleHQudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gYCR7Uk9PVH0vbWFub24/JHtzZWFyY2hUZXh0fWA7XG4gICAgfVxuICB9O1xuXG4gIHNjcm9sbERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgeSA9IHRoaXMucmVmc1tcImltYWdlXCJdLm9mZnNldFRvcDtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiB5LFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiIH19PlxuICAgICAgICAgIFRoaXMgaXMgRXJuaWUgTkVYVC5qcyB3ZWJzaXRlIHRvIEdpdGh1YlxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVybmllXCI+dGVzdGluZzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbGlua1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWJvdXRgfSBhcz17YCR7Uk9PVH0vYWJvdXRgfT5cbiAgICAgICAgICAgIDxhPmNsaWNrIG1lIGdvIHRvIEFib3V0IFBhZ2U8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxpbmtcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL21hbm9uYH0gYXM9e2Ake1JPT1R9L21hbm9uYH0+XG4gICAgICAgICAgICA8YT5jbGljayBtZSBnbyB0byBNYW5vbiBQYWdlPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1saW5rXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC90YWl3YW5jYW5oZWxwYH0gYXM9e2Ake1JPT1R9L3RhaXdhbmNhbmhlbHBgfT5cbiAgICAgICAgICAgIDxhPmNsaWNrIG1lIGdvIHRvIFRhaXdhbiBDYW4gSGVscDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2h9IGFjdGlvbj1cImphdmFzY3JpcHQ6cmV0dXJuIHRydWVcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVNlYXJjaH0gLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgcGxhY2Vob2xkZXI9XCLoq4vovLjlhaXmlbjlrZdcIiAvPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJqYXZhc2NyaXB0OnJldHVybiB0cnVlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIuiri+i8uOWFpeaVuOWtl1wiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZlLWRvd25cIiBvbkNsaWNrPXt0aGlzLnNjcm9sbERvd259PlxuICAgICAgICAgIHNjcm9sbCBkcm9wXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFkZHJlc3Mge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XG4gICAgICAgICAge2RhdGEucmVzdWx0LnJlY29yZHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJhZGRyZXNzLWl0ZW1cIj5cbiAgICAgICAgICAgICAge2l0ZW0uem9uZX0gLyB7aXRlbS50ZWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3JjPXtgJHtST09UfS9pbWFnZXMvbG92ZS5qcGdgfSByZWY9XCJpbWFnZVwiIGFsdD1cImltYWdlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2RhdGEubnRwYy5nb3YudHcvYXBpL3YxL3Jlc3QvZGF0YXN0b3JlLzM4MjAwMDAwMEEtMDAwMzcxLTAwMVwiLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgbW9kZTogXCJuby1jb3JzXCJcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGFcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=/Users/Ernie/Desktop/Github/bitplay/pages/index.js */"), __jsx("div", {
        className: "jsx-3743228756" + " " + "address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }, data.result.records.map(function (item, index) {
        return __jsx("div", {
          key: index,
          className: "jsx-3743228756" + " " + "address-item",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }
        }, item.zone, " / ", item.tel);
      })), __jsx("img", {
        src: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/images/love.jpg"),
        ref: "image",
        alt: "image",
        className: "jsx-3743228756",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.b7a620f2495eb08e8bd9.hot-update.js.map