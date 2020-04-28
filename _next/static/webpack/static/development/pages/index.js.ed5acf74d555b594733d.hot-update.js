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
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_Fetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/Fetch */ "./src/components/Fetch.jsx");








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
      return __jsx("div", {
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, __jsx(_src_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "\u5C11\u5E74A | ARAON",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }), __jsx("h1", {
        style: {
          padding: "15px",
          textAlign: "center",
          fontWeight: "300"
        },
        className: "jsx-3389900631" + " " + (_src_css_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.error || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, "This is Ernie NEXT.js website to Github"), __jsx("h1", {
        style: {
          padding: "15px",
          fontSize: "20px",
          fontWeight: "300",
          textAlign: "right"
        },
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, "#Taiwancanhelp"), __jsx("div", {
        className: "jsx-3389900631" + " " + "ernie",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, "testing"), __jsx("div", {
        className: "jsx-3389900631" + " " + "menu-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/about",
        as: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/about"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }
      }, "click me go to About Page"))), __jsx("div", {
        className: "jsx-3389900631" + " " + "menu-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/manon",
        as: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/manon"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, "click me go to Manon Page"))), __jsx("div", {
        className: "jsx-3389900631" + " " + "menu-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/taiwancanhelp",
        as: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/taiwancanhelp"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, "click me go to Taiwan Can Help"))), __jsx("div", {
        className: "jsx-3389900631" + " " + "menu-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: "./taiwancanhelp",
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, "Taiwan can help")), __jsx("form", {
        onSubmit: this.handleSearch,
        action: "javascript:return true",
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "search",
        value: this.state.searchText,
        onChange: this.handleChangeSearch,
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      })), __jsx("input", {
        type: "text",
        pattern: "[0-9]*",
        placeholder: "\u8ACB\u8F38\u5165\u6578\u5B57",
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }), __jsx("form", {
        action: "javascript:return true",
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "number",
        placeholder: "\u8ACB\u8F38\u5165\u6578\u5B57",
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      })), __jsx("div", {
        onClick: this.scrollDown,
        className: "jsx-3389900631" + " " + "move-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, "scroll drop"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3389900631",
        __self: this
      }, ".address.jsx-3389900631{padding:15px;}.address-item.jsx-3389900631{margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid #6c6c6c;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Fcm5pZS9EZXNrdG9wL0dpdGh1Yi9iaXRwbGF5L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFb0IsQUFHMEIsQUFHTSxhQUZyQixNQUdzQixvQkFDWSxnQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL0VybmllL0Rlc2t0b3AvR2l0aHViL2JpdHBsYXkvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY3NzL0hlYWRlci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBST09UIH0gZnJvbSBcIi4uL3NyYy9mdW5jdGlvbi9jb25zdGFudHNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IE5vU1NSIGZyb20gXCJyZWFjdC1uby1zc3JcIjtcbmltcG9ydCBGZXRjaCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvRmV0Y2hcIjtcblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNlYXJjaFRleHQ6IFwiXCJcbiAgfTtcblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgaGFuZGxlQ2hhbmdlU2VhcmNoID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2VhcmNoID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBzZWFyY2hUZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzZWFyY2hUZXh0LnRyaW0oKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGAke1JPT1R9L21hbm9uPyR7c2VhcmNoVGV4dH1gO1xuICAgIH1cbiAgfTtcblxuICBzY3JvbGxEb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IHkgPSB0aGlzLnJlZnNbXCJpbWFnZVwiXS5vZmZzZXRUb3A7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogeSxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciB0aXRsZT1cIuWwkeW5tEEgfCBBUkFPTlwiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0gc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cbiAgICAgICAgICBUaGlzIGlzIEVybmllIE5FWFQuanMgd2Vic2l0ZSB0byBHaXRodWJcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgxIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiLCBmb250U2l6ZTogXCIyMHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIsIHRleHRBbGlnbjogXCJyaWdodFwiIH19PiNUYWl3YW5jYW5oZWxwPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcm5pZVwiPnRlc3Rpbmc8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxpbmtcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL2Fib3V0YH0gYXM9e2Ake1JPT1R9L2Fib3V0YH0+XG4gICAgICAgICAgICA8YT5jbGljayBtZSBnbyB0byBBYm91dCBQYWdlPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1saW5rXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9tYW5vbmB9IGFzPXtgJHtST09UfS9tYW5vbmB9PlxuICAgICAgICAgICAgPGE+Y2xpY2sgbWUgZ28gdG8gTWFub24gUGFnZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbGlua1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdGFpd2FuY2FuaGVscGB9IGFzPXtgJHtST09UfS90YWl3YW5jYW5oZWxwYH0+XG4gICAgICAgICAgICA8YT5jbGljayBtZSBnbyB0byBUYWl3YW4gQ2FuIEhlbHA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxpbmtcIj5cbiAgICAgICAgICA8YSBocmVmPVwiLi90YWl3YW5jYW5oZWxwXCI+VGFpd2FuIGNhbiBoZWxwPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2VhcmNofSBhY3Rpb249XCJqYXZhc2NyaXB0OnJldHVybiB0cnVlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTZWFyY2h9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGF0dGVybj1cIlswLTldKlwiIHBsYWNlaG9sZGVyPVwi6KuL6Ly45YWl5pW45a2XXCIgLz5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiamF2YXNjcmlwdDpyZXR1cm4gdHJ1ZVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLoq4vovLjlhaXmlbjlrZdcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92ZS1kb3duXCIgb25DbGljaz17dGhpcy5zY3JvbGxEb3dufT5cbiAgICAgICAgICBzY3JvbGwgZHJvcFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hZGRyZXNzLWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2YzZjNmM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxOb1NTUj5cbiAgICAgICAgICA8RmV0Y2ggLz5cbiAgICAgICAgPC9Ob1NTUj5cbiAgICAgICAgPGltZyBzcmM9e2Ake1JPT1R9L2ltYWdlcy9sb3ZlLmpwZ2B9IHJlZj1cImltYWdlXCIgYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=/Users/Ernie/Desktop/Github/bitplay/pages/index.js */"), __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }
      }, __jsx(_src_components_Fetch__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      })), __jsx("img", {
        src: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/images/love.jpg"),
        ref: "image",
        alt: "image",
        className: "jsx-3389900631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
//# sourceMappingURL=index.js.ed5acf74d555b594733d.hot-update.js.map