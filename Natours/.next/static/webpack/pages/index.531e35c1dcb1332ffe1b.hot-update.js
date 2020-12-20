webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/theme/typography.ts":
/*!****************************************!*\
  !*** ./src/styles/theme/typography.ts ***!
  \****************************************/
/*! exports provided: HeroTitle, HeroSubtitle, SectionTitle, ParagraphTitle, ParagraphText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeroTitle\", function() { return HeroTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeroSubtitle\", function() { return HeroSubtitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionTitle\", function() { return SectionTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParagraphTitle\", function() { return ParagraphTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParagraphText\", function() { return ParagraphText; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n\n\nvar HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"typography__HeroTitle\",\n  componentId: \"sc-18wkxx7-0\"\n})([\"font-size:6rem;letter-spacing:3.5rem;font-weight:400;\"]);\nvar HeroSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"typography__HeroSubtitle\",\n  componentId: \"sc-18wkxx7-1\"\n})([\"font-size:2rem;letter-spacing:1.75rem;font-weight:700;\"]);\nvar SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"typography__SectionTitle\",\n  componentId: \"sc-18wkxx7-2\"\n})([\"font-size:3.5rem;font-weight:700;text-transform:uppercase;background-image:\", \";display:inline-block;color:transparent;letter-spacing:0.2rem;transition:all 0.2s;-webkit-background-clip:text;cursor:pointer;&:hover{transform:skew(15deg,2deg) scale(1.1);text-shadow:\", \";}\"], function (_ref) {\n  var colors = _ref.theme.colors;\n  return \"linear-gradient(\\n     to right,\\n     \".concat(colors.primaryLight, \",\\n     \").concat(colors.primaryDark, \"\\n   )\");\n}, function (_ref2) {\n  var colors = _ref2.theme.colors;\n  return \"0.5rem 1rem 2rem \".concat(Object(polished__WEBPACK_IMPORTED_MODULE_1__[\"transparentize\"])(0.8, colors.black));\n});\nvar ParagraphTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h4.withConfig({\n  displayName: \"typography__ParagraphTitle\",\n  componentId: \"sc-18wkxx7-3\"\n})([\"\"]);\nvar ParagraphText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"typography__ParagraphText\",\n  componentId: \"sc-18wkxx7-4\"\n})([\"\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy90aGVtZS90eXBvZ3JhcGh5LnRzPzk5MWQiXSwibmFtZXMiOlsiSGVyb1RpdGxlIiwic3R5bGVkIiwic3BhbiIsIkhlcm9TdWJ0aXRsZSIsIlNlY3Rpb25UaXRsZSIsImRpdiIsImNvbG9ycyIsInRoZW1lIiwicHJpbWFyeUxpZ2h0IiwicHJpbWFyeURhcmsiLCJ0cmFuc3BhcmVudGl6ZSIsImJsYWNrIiwiUGFyYWdyYXBoVGl0bGUiLCJoNCIsIlBhcmFncmFwaFRleHQiLCJwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSw2REFBZjtBQU1BLElBQU1DLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSw4REFBbEI7QUFNQSxJQUFNRSxZQUFZLEdBQUdILHlEQUFNLENBQUNJLEdBQVY7QUFBQTtBQUFBO0FBQUEsc1JBSUg7QUFBQSxNQUFZQyxNQUFaLFFBQUdDLEtBQUgsQ0FBWUQsTUFBWjtBQUFBLDBEQUVmQSxNQUFNLENBQUNFLFlBRlEscUJBR2ZGLE1BQU0sQ0FBQ0csV0FIUTtBQUFBLENBSkcsRUFrQk47QUFBQSxNQUFZSCxNQUFaLFNBQUdDLEtBQUgsQ0FBWUQsTUFBWjtBQUFBLG9DQUNPSSwrREFBYyxDQUFDLEdBQUQsRUFBTUosTUFBTSxDQUFDSyxLQUFiLENBRHJCO0FBQUEsQ0FsQk0sQ0FBbEI7QUF1QkEsSUFBTUMsY0FBYyxHQUFHWCx5REFBTSxDQUFDWSxFQUFWO0FBQUE7QUFBQTtBQUFBLFFBQXBCO0FBRUEsSUFBTUMsYUFBYSxHQUFHYix5REFBTSxDQUFDYyxDQUFWO0FBQUE7QUFBQTtBQUFBLFFBQW5CIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy90aGVtZS90eXBvZ3JhcGh5LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IHsgdHJhbnNwYXJlbnRpemUgfSBmcm9tIFwicG9saXNoZWRcIlxuXG5leHBvcnQgY29uc3QgSGVyb1RpdGxlID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbmBcblxuZXhwb3J0IGNvbnN0IEhlcm9TdWJ0aXRsZSA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICR7KHsgdGhlbWU6IHsgY29sb3JzIH0gfSkgPT4gYGxpbmVhci1ncmFkaWVudChcbiAgICAgdG8gcmlnaHQsXG4gICAgICR7Y29sb3JzLnByaW1hcnlMaWdodH0sXG4gICAgICR7Y29sb3JzLnByaW1hcnlEYXJrfVxuICAgKWB9O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBza2V3KDE1ZGVnLCAyZGVnKSBzY2FsZSgxLjEpO1xuICAgIHRleHQtc2hhZG93OiAkeyh7IHRoZW1lOiB7IGNvbG9ycyB9IH0pID0+XG4gICAgICBgMC41cmVtIDFyZW0gMnJlbSAke3RyYW5zcGFyZW50aXplKDAuOCwgY29sb3JzLmJsYWNrKX1gfTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoVGl0bGUgPSBzdHlsZWQuaDRgYFxuXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoVGV4dCA9IHN0eWxlZC5wYGBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme/typography.ts\n");

/***/ })

})