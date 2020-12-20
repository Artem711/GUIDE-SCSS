webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/typography/hero-heading.tsx":
/*!****************************************************!*\
  !*** ./src/components/typography/hero-heading.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Library/Dev/Code/GUIDE-SCSS/natours/src/components/typography/hero-heading.tsx\",\n    _this = undefined;\n\n// PLUGINS IMPORTS //\n // COMPONENTS IMPORTS //\n// EXTRA IMPORTS //\n/////////////////////////////////////////////////////////////////////////////\n\nvar Heading = function Heading(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Subtitle, {\n      children: props.subtitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n}; /////////////////////////////////////////////////////////////////////////////\n\n\n_c = Heading;\nvar moveInLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])([\"0%{opacity:0;transform:translateX(-10rem);}80%{transform:translateX(1rem);}100%{opacity:1;transform:translate(0);}\"]);\nvar moveInRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])([\"0%{opacity:0;transform:translateX(10rem);}80%{transform:translateX(-1rem);}100%{opacity:1;transform:translate(0);}\"]);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"hero-heading__Wrapper\",\n  componentId: \"wp0q7w-0\"\n})([\"text-transform:uppercase;backface-visibility:hidden;margin-bottom:6rem;color:\", \";span{display:block;font-weight:400;}\"], function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.white;\n});\n_c2 = Wrapper;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span.withConfig({\n  displayName: \"hero-heading__Title\",\n  componentId: \"wp0q7w-1\"\n})([\"animation:\", \" 1s ease-out;\"], moveInLeft);\n_c3 = Title;\nvar Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span.withConfig({\n  displayName: \"hero-heading__Subtitle\",\n  componentId: \"wp0q7w-2\"\n})([\"animation:\", \" 1s ease-out;\"], moveInRight);\n_c4 = Subtitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Heading);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Heading\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Subtitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9oZXJvLWhlYWRpbmcudHN4P2NiMTkiXSwibmFtZXMiOlsiSGVhZGluZyIsInByb3BzIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm1vdmVJbkxlZnQiLCJrZXlmcmFtZXMiLCJtb3ZlSW5SaWdodCIsIldyYXBwZXIiLCJzdHlsZWQiLCJoMSIsInRoZW1lIiwiY29sb3JzIiwid2hpdGUiLCJUaXRsZSIsInNwYW4iLCJTdWJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Q0FJQTtBQUVBO0FBRUE7O0FBT0EsSUFBTUEsT0FBc0IsR0FBRyxTQUF6QkEsT0FBeUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hDLHNCQUNFLHFFQUFDLE9BQUQ7QUFBQSw0QkFDRSxxRUFBQyxLQUFEO0FBQUEsZ0JBQVFBLEtBQUssQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxRQUFEO0FBQUEsZ0JBQVdELEtBQUssQ0FBQ0U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FQRCxDLENBU0E7OztLQVRNSCxPO0FBV04sSUFBTUksVUFBVSxHQUFHQyxtRUFBSCx3SEFBaEI7QUFnQkEsSUFBTUMsV0FBVyxHQUFHRCxtRUFBSCx3SEFBakI7QUFnQkEsSUFBTUUsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLCtIQUlGO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FKRSxDQUFiO01BQU1MLE87QUFZTixJQUFNTSxLQUFLLEdBQUdMLHlEQUFNLENBQUNNLElBQVY7QUFBQTtBQUFBO0FBQUEsb0NBRUlWLFVBRkosQ0FBWDtNQUFNUyxLO0FBS04sSUFBTUUsUUFBUSxHQUFHUCx5REFBTSxDQUFDTSxJQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUNDUixXQURELENBQWQ7TUFBTVMsUTtBQUlTZixzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkvaGVyby1oZWFkaW5nLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBMVUdJTlMgSU1QT1JUUyAvL1xuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG4vLyBDT01QT05FTlRTIElNUE9SVFMgLy9cblxuLy8gRVhUUkEgSU1QT1JUUyAvL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBzdWJ0aXRsZTogc3RyaW5nXG59XG5cbmNvbnN0IEhlYWRpbmc6IEZDPFByb3BzVHlwZT4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxUaXRsZT57cHJvcHMudGl0bGV9PC9UaXRsZT5cbiAgICAgIDxTdWJ0aXRsZT57cHJvcHMuc3VidGl0bGV9PC9TdWJ0aXRsZT5cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgbW92ZUluTGVmdCA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHJlbSk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbmBcblxuY29uc3QgbW92ZUluUmlnaHQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHJlbSk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG5gXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuaDFgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gIC8qIGFuaW1hdGlvbjogbmFtZSBkdXJhdGlvbiB0aW1pbmctZnVuY3Rpb24gZGVsYXkgaXRlcmF0aW9uLWNvdW50IGRpcmVjdGlvbiBmaWxsLW1vZGUgcGxheS1zdGF0ZTsgKi9cbiAgYW5pbWF0aW9uOiAke21vdmVJbkxlZnR9IDFzIGVhc2Utb3V0O1xuYFxuXG5jb25zdCBTdWJ0aXRsZSA9IHN0eWxlZC5zcGFuYFxuICBhbmltYXRpb246ICR7bW92ZUluUmlnaHR9IDFzIGVhc2Utb3V0O1xuYFxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/typography/hero-heading.tsx\n");

/***/ })

})