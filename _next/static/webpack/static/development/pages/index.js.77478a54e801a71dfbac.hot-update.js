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
        className: "jsx-3709928750",
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
        className: "jsx-3709928750" + " " + (_src_css_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.error || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, "This is Ernie NEXT.js website to Github"), __jsx("div", {
        className: "jsx-3709928750" + " " + "ernie",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, "testing"), __jsx("div", {
        className: "jsx-3709928750" + " " + "menu-link",
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
        className: "jsx-3709928750",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }, "click me go to About Page"))), __jsx("div", {
        className: "jsx-3709928750" + " " + "menu-link",
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
        className: "jsx-3709928750",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "click me go to Manon Page"))), __jsx("div", {
        className: "jsx-3709928750" + " " + "menu-link",
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
        className: "jsx-3709928750",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, "click me go to Taiwan Can Help"))), __jsx("form", {
        onSubmit: this.handleSearch,
        action: "javascript:return true",
        className: "jsx-3709928750",
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
        className: "jsx-3709928750",
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
        className: "jsx-3709928750",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }), __jsx("form", {
        action: "javascript:return true",
        className: "jsx-3709928750",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "number",
        placeholder: "\u8ACB\u8F38\u5165\u6578\u5B57",
        className: "jsx-3709928750",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      })), __jsx("div", {
        onClick: this.scrollDown,
        className: "jsx-3709928750" + " " + "move-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, "scroll drop"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3709928750",
        __self: this
      }, ".address.jsx-3709928750{padding:15px;}.address-item.jsx-3709928750{margin-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Fcm5pZS9EZXNrdG9wL0dpdGh1Yi9iaXRwbGF5L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFb0IsQUFHMEIsQUFHTSxhQUZyQixNQUdBIiwiZmlsZSI6Ii9Vc2Vycy9Fcm5pZS9EZXNrdG9wL0dpdGh1Yi9iaXRwbGF5L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3JjL2Nzcy9IZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUk9PVCB9IGZyb20gXCIuLi9zcmMvZnVuY3Rpb24vY29uc3RhbnRzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzZWFyY2hUZXh0OiBcIlwiXG4gIH07XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gIGhhbmRsZUNoYW5nZVNlYXJjaCA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNlYXJjaCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgc2VhcmNoVGV4dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2VhcmNoVGV4dC50cmltKCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBgJHtST09UfS9tYW5vbj8ke3NlYXJjaFRleHR9YDtcbiAgICB9XG4gIH07XG5cbiAgc2Nyb2xsRG93biA9ICgpID0+IHtcbiAgICBjb25zdCB5ID0gdGhpcy5yZWZzW1wiaW1hZ2VcIl0ub2Zmc2V0VG9wO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IHksXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0gc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgVGhpcyBpcyBFcm5pZSBORVhULmpzIHdlYnNpdGUgdG8gR2l0aHViXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJuaWVcIj50ZXN0aW5nPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1saW5rXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9hYm91dGB9IGFzPXtgJHtST09UfS9hYm91dGB9PlxuICAgICAgICAgICAgPGE+Y2xpY2sgbWUgZ28gdG8gQWJvdXQgUGFnZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbGlua1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWFub25gfSBhcz17YCR7Uk9PVH0vbWFub25gfT5cbiAgICAgICAgICAgIDxhPmNsaWNrIG1lIGdvIHRvIE1hbm9uIFBhZ2U8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxpbmtcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3RhaXdhbmNhbmhlbHBgfSBhcz17YCR7Uk9PVH0vdGFpd2FuY2FuaGVscGB9PlxuICAgICAgICAgICAgPGE+Y2xpY2sgbWUgZ28gdG8gVGFpd2FuIENhbiBIZWxwPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNlYXJjaH0gYWN0aW9uPVwiamF2YXNjcmlwdDpyZXR1cm4gdHJ1ZVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlU2VhcmNofSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBhdHRlcm49XCJbMC05XSpcIiBwbGFjZWhvbGRlcj1cIuiri+i8uOWFpeaVuOWtl1wiIC8+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cImphdmFzY3JpcHQ6cmV0dXJuIHRydWVcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi6KuL6Ly45YWl5pW45a2XXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmUtZG93blwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsRG93bn0+XG4gICAgICAgICAgc2Nyb2xsIGRyb3BcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWRkcmVzcy1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxuICAgICAgICAgIHtkYXRhLnJlc3VsdC5yZWNvcmRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYWRkcmVzcy1pdGVtXCI+XG4gICAgICAgICAgICAgIHtpdGVtLnpvbmV9IC8ge2l0ZW0udGVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIHNyYz17YCR7Uk9PVH0vaW1hZ2VzL2xvdmUuanBnYH0gcmVmPVwiaW1hZ2VcIiBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9kYXRhLm50cGMuZ292LnR3L2FwaS92MS9yZXN0L2RhdGFzdG9yZS8zODIwMDAwMDBBLTAwMDM3MS0wMDFcIiwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgIG1vZGU6IFwibm8tY29yc1wiXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=/Users/Ernie/Desktop/Github/bitplay/pages/index.js */"), __jsx("div", {
        className: "jsx-3709928750" + " " + "address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }, data.result.records.map(function (item, index) {
        return __jsx("div", {
          key: index,
          className: "jsx-3709928750" + " " + "address-item",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }
        }, item.zone, " / ", item.tel);
      })), __jsx("img", {
        src: "".concat(_src_function_constants__WEBPACK_IMPORTED_MODULE_12__["ROOT"], "/images/love.jpg"),
        ref: "image",
        alt: "image",
        className: "jsx-3709928750",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
//# sourceMappingURL=index.js.77478a54e801a71dfbac.hot-update.js.map