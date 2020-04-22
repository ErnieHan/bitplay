webpackHotUpdate("static/development/pages/week1.js",{

/***/ "./pages/week1.js":
/*!************************!*\
  !*** ./pages/week1.js ***!
  \************************/
/*! exports provided: Week1, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Week1", function() { return Week1; });
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
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Header */ "./src/components/Header.jsx");








var _jsxFileName = "/Users/Ernie/Desktop/Github/bitplay/pages/week1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Week1 = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Week1, _Component);

  var _super = _createSuper(Week1);

  function Week1() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Week1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      id: null,
      url: null,
      isLoading: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "fetchData", function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.startLoading(true);

              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.github.com/repos/zeit/next.js", {
                method: "GET",
                headers: {
                  "content-type": "application/json"
                }
              }));

            case 4:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 13;
                break;
              }

              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 8:
              data = _context.sent;
              console.log(data);

              _this.setState({
                id: data.id
              });

              _context.next = 14;
              break;

            case 13:
              throw new Error("ernie xxx");

            case 14:
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0.message);

            case 19:
              _context.prev = 19;

              _this.startLoading(false);

              return _context.finish(19);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 16, 19, 22]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "startLoading", function (bool) {
      _this.setState({
        isLoading: bool
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Week1, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-837469747",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "837469747",
        __self: this
      }, "button.jsx-837469747{padding:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Fcm5pZS9EZXNrdG9wL0dpdGh1Yi9iaXRwbGF5L3BhZ2VzL3dlZWsxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IsQUFHMEIsYUFDZiIsImZpbGUiOiIvVXNlcnMvRXJuaWUvRGVza3RvcC9HaXRodWIvYml0cGxheS9wYWdlcy93ZWVrMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5leHBvcnQgY2xhc3MgV2VlazEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpZDogbnVsbCxcbiAgICB1cmw6IG51bGwsXG4gICAgaXNMb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLnN0YXJ0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlkOiBkYXRhLmlkXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXJuaWUgeHh4XCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhcnRMb2FkaW5nID0gYm9vbCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0xvYWRpbmc6IGJvb2xcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWRlciB0aXRsZT17XCLolYPojITpkJgg772cIFdlZWsgMVwifSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmV0Y2hEYXRhfT5idXR0b24gZmV0Y2g8L2J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nICYmIDxkaXY+6LyJ5YWl5LitPC9kaXY+fVxuICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmlkfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWVrMTtcbiJdfQ== */\n/*@ sourceURL=/Users/Ernie/Desktop/Github/bitplay/pages/week1.js */"), __jsx(_src_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "蕃茄鐘 ｜ Week 1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }), __jsx("button", {
        onClick: this.fetchData,
        className: "jsx-837469747",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, "button fetch"), this.state.isLoading && __jsx("div", {
        className: "jsx-837469747",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 34
        }
      }, "\u8F09\u5165\u4E2D"), __jsx("div", {
        className: "jsx-837469747",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, this.state.id));
    }
  }]);

  return Week1;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Week1);

/***/ })

})
//# sourceMappingURL=week1.js.5aa0867a7fa3c45f2f17.hot-update.js.map