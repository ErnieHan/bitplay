webpackHotUpdate("static/development/pages/index.js",{

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
        window.location = "".concat(_function_constants__WEBPACK_IMPORTED_MODULE_10__["ROOT"], "/week1?").concat(encodeURIComponent(_this.state.value.trim()));
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

      if (searchText !== "%") {
        this.setState({
          title: decodeURIComponent(searchText)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3921465419",
        __self: this
      }, "header.jsx-3921465419{background-color:#24292e;padding:16px;color:#ffffff;}.search-bar.jsx-3921465419{width:100%;height:28px;border-radius:5px;background:#343434;border:0;color:#fff;font-family:inherit;font-size:14px;padding:0 8px;}.search-bar.jsx-3921465419:focus{background:#f4f4f4;color:#333;}.title.jsx-3921465419{font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Fcm5pZS9EZXNrdG9wL0dpdGh1Yi9iaXRwbGF5L3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUdzQyxBQUtkLEFBV1EsQUFJSCxXQWRKLEtBZWQsR0FKYSxJQVZPLEVBTkwsS0FpQmYsUUFoQmdCLEdBTUssV0FMckIsUUFNVyxTQUNFLFdBQ1Msb0JBQ0wsZUFDRCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvRXJuaWUvRGVza3RvcC9HaXRodWIvYml0cGxheS9zcmMvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUk9PVCB9IGZyb20gXCIuLi9mdW5jdGlvbi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIlwiLFxuICAgIHRpdGxlOiBudWxsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9cIiwgXCJcIik7XG4gICAgY29uc29sZS5sb2coc2VhcmNoVGV4dCA9PT0gXCIlXCIpO1xuICAgIGlmIChzZWFyY2hUZXh0ICE9PSBcIiVcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpdGxlOiBkZWNvZGVVUklDb21wb25lbnQoc2VhcmNoVGV4dClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGAke1JPT1R9L3dlZWsxPyR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3RhdGUudmFsdWUudHJpbSgpKX1gO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWJhcjpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtgJHtST09UfS9pbWFnZXMvZmF2aWNvbi5wbmdgfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufT48L21ldGE+XG4gICAgICAgICAgey8qIC0tLS0tIGZhY2Vib29rICBTRU8gLS0tLS0gKi99XG4gICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly90YWl3YW5jYW5oZWxwLnVzL3RhaXdhbmNhbmhlbHAtb2cucG5nXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjEyMDBcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYzMFwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiVGFpd2FuIENhbiBIZWxwXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2VybmllaGFuLmdpdGh1Yi5pby9kb3JlYm9uL1wiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUYWl3YW4gQ2FuIEhlbHBcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cInpoLVRXXCIgLz4gKi99XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJqYXZhc2NyaXB0OnJldHVybiB0cnVlXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBvciBqdW1wIHRvXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICB7dGhpcy5zdGF0ZS50aXRsZSA/IDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnNlYXJjaDoge3RoaXMuc3RhdGUudGl0bGV9PC9oMT4gOiBudWxsfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBcIummlumggVwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/Ernie/Desktop/Github/bitplay/src/components/Header.jsx */"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, __jsx("title", {
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, title), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "icon",
        href: "".concat(_function_constants__WEBPACK_IMPORTED_MODULE_10__["ROOT"], "/images/favicon.png"),
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "description",
        content: description,
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      })), __jsx("header", {
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, __jsx("form", {
        action: "javascript:return true",
        onSubmit: this.handleSubmit,
        className: "jsx-3921465419",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
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
          lineNumber: 78,
          columnNumber: 13
        }
      }))), this.state.title ? __jsx("h1", {
        className: "jsx-3921465419" + " " + "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
//# sourceMappingURL=index.js.efdec27f9c33deac1411.hot-update.js.map