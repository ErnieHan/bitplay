webpackHotUpdate("static/development/pages/week1.js",{

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _function_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../function/constants */ "./src/function/constants.js");







var _jsxFileName = "/Users/Ernie/Desktop/Github/bitplay/src/components/Header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      value: "",
      title: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (event) {
      if (_this.state.value.trim() !== "") {
        window.location = "".concat(_function_constants__WEBPACK_IMPORTED_MODULE_10__["ROOT"], "/week1?").concat(_this.state.value.trim());
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        value: event.target.value
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var searchText = window.location.search.replace("?", "");
      console.log(searchText === "%");
      if (searchText !== "") this.setState({
        title: searchText === "%" ? searchText : decodeURIComponent(searchText)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3921465419",
        __self: this
      }, "header.jsx-3921465419{background-color:#24292e;padding:16px;color:#ffffff;}.search-bar.jsx-3921465419{width:100%;height:28px;border-radius:5px;background:#343434;border:0;color:#fff;font-family:inherit;font-size:14px;padding:0 8px;}.search-bar.jsx-3921465419:focus{background:#f4f4f4;color:#333;}.title.jsx-3921465419{font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Fcm5pZS9EZXNrdG9wL0dpdGh1Yi9iaXRwbGF5L3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUdzQyxBQUtkLEFBV1EsQUFJSCxXQWRKLEtBZWQsR0FKYSxJQVZPLEVBTkwsS0FpQmYsUUFoQmdCLEdBTUssV0FMckIsUUFNVyxTQUNFLFdBQ1Msb0JBQ0wsZUFDRCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvRXJuaWUvRGVza3RvcC9HaXRodWIvYml0cGxheS9zcmMvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUk9PVCB9IGZyb20gXCIuLi9mdW5jdGlvbi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIlwiLFxuICAgIHRpdGxlOiBudWxsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9cIiwgXCJcIik7XG4gICAgY29uc29sZS5sb2coc2VhcmNoVGV4dCA9PT0gXCIlXCIpO1xuICAgIGlmKHNlYXJjaFRleHQgIT09IFwiXCIpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aXRsZTogc2VhcmNoVGV4dCA9PT0gXCIlXCIgPyBzZWFyY2hUZXh0IDogZGVjb2RlVVJJQ29tcG9uZW50KHNlYXJjaFRleHQpXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBgJHtST09UfS93ZWVrMT8ke3RoaXMuc3RhdGUudmFsdWUudHJpbSgpfWA7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM0MzQzNDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1iYXI6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17YCR7Uk9PVH0vaW1hZ2VzL2Zhdmljb24ucG5nYH0gLz5cbiAgICAgICAgICB7LyogLS0tLS0gZmFjZWJvb2sgIFNFTyAtLS0tLSAqL31cbiAgICAgICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3RhaXdhbmNhbmhlbHAudXMvdGFpd2FuY2FuaGVscC1vZy5wbmdcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjMwXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJUYWl3YW4gQ2FuIEhlbHBcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZXJuaWVoYW4uZ2l0aHViLmlvL2RvcmVib24vXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlRhaXdhbiBDYW4gSGVscFwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiemgtVFdcIiAvPiAqL31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImphdmFzY3JpcHQ6cmV0dXJuIHRydWVcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIG9yIGp1bXAgdG9cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIHt0aGlzLnN0YXRlLnRpdGxlID8gPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+c2VhcmNoOiB7dGhpcy5zdGF0ZS50aXRsZX08L2gxPiA6IG51bGx9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IFwi6aaW6aCBXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/Ernie/Desktop/Github/bitplay/src/components/Header.jsx */"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, __jsx("title", {
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, title), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "icon",
        href: "".concat(_function_constants__WEBPACK_IMPORTED_MODULE_10__["ROOT"], "/images/favicon.png"),
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      })), __jsx("header", {
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, __jsx("form", {
        action: "javascript:return true",
        onSubmit: this.handleSubmit,
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "search",
        value: this.state.value,
        placeholder: "search or jump to",
        onChange: this.handleChange,
        className: "jsx-3921465419" + " " + "search-bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }))), this.state.title ? __jsx("h1", {
        className: "jsx-3921465419" + " " + "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }
      }, "search: ", this.state.title) : null);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
Header.defaultProps = {
  title: "首頁"
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=week1.js.f0b46c0a2da66f93f2b3.hot-update.js.map