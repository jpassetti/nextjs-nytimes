/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/heading.js":
/*!*******************************!*\
  !*** ./components/heading.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Heading; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heading.module.scss */ \"./components/heading.module.scss\");\n/* harmony import */ var _heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heading_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/japasset/Sites/icc575-nextjs/nextjs-blog/components/heading.js\";\n\nfunction Heading(_ref) {\n  var children = _ref.children,\n      type = _ref.type;\n\n  switch (type) {\n    case 'h1':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading1),\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 11\n      }, this);\n      break;\n\n    case 'h2':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading2),\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, this);\n      break;\n\n    case 'h3':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading3),\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }, this);\n      break;\n\n    case 'h4':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n        className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading4),\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, this);\n      break;\n\n    case 'h5':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n        className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading5),\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }, this);\n      break;\n\n    case 'h6':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n        className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading6),\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, this);\n      break;\n  }\n}\n_c = Heading;\n\nvar _c;\n\n$RefreshReg$(_c, \"Heading\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkaW5nLmpzPzliZWIiXSwibmFtZXMiOlsiSGVhZGluZyIsImNoaWxkcmVuIiwidHlwZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsT0FBbUM7QUFBQSxNQUFqQkMsUUFBaUIsUUFBakJBLFFBQWlCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUNqRCxVQUFPQSxJQUFQO0FBQ0MsU0FBSyxJQUFMO0FBQ0MsMEJBQU87QUFBSSxpQkFBUyxFQUFFQyxzRUFBZjtBQUFBLGtCQUFpQ0Y7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0E7O0FBQ0QsU0FBSyxJQUFMO0FBQ0MsMEJBQU87QUFBSSxpQkFBUyxFQUFFRSxzRUFBZjtBQUFBLGtCQUFpQ0Y7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0E7O0FBQ0QsU0FBSyxJQUFMO0FBQ0MsMEJBQU87QUFBSSxpQkFBUyxFQUFFRSxzRUFBZjtBQUFBLGtCQUFpQ0Y7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0E7O0FBQ0QsU0FBSyxJQUFMO0FBQ0MsMEJBQU87QUFBSSxpQkFBUyxFQUFFRSxzRUFBZjtBQUFBLGtCQUFpQ0Y7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0E7O0FBQ0QsU0FBSyxJQUFMO0FBQ0MsMEJBQU87QUFBSSxpQkFBUyxFQUFFRSxzRUFBZjtBQUFBLGtCQUFpQ0Y7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0E7O0FBQ0QsU0FBSyxJQUFMO0FBQ0MsMEJBQU87QUFBSSxpQkFBUyxFQUFFRSxzRUFBZjtBQUFBLGtCQUFpQ0Y7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0E7QUFsQkY7QUFvQkE7S0FyQnVCRCxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRpbmcubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRpbmcoe2NoaWxkcmVuLCB0eXBlfSkge1xuXHRzd2l0Y2godHlwZSkge1xuXHRcdGNhc2UgJ2gxJzogXG5cdFx0XHRyZXR1cm4gPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmcxfT57Y2hpbGRyZW59PC9oMT5cblx0XHRcdGJyZWFrXG5cdFx0Y2FzZSAnaDInOlxuXHRcdFx0cmV0dXJuIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nMn0+e2NoaWxkcmVufTwvaDI+XG5cdFx0XHRicmVha1xuXHRcdGNhc2UgJ2gzJzpcblx0XHRcdHJldHVybiA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZzN9PntjaGlsZHJlbn08L2gzPlxuXHRcdFx0YnJlYWtcblx0XHRjYXNlICdoNCc6XG5cdFx0XHRyZXR1cm4gPGg0IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmc0fT57Y2hpbGRyZW59PC9oND5cblx0XHRcdGJyZWFrXG5cdFx0Y2FzZSAnaDUnOlxuXHRcdFx0cmV0dXJuIDxoNSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nNX0+e2NoaWxkcmVufTwvaDU+XG5cdFx0XHRicmVha1xuXHRcdGNhc2UgJ2g2Jzpcblx0XHRcdHJldHVybiA8aDYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZzZ9PntjaGlsZHJlbn08L2g2PlxuXHRcdFx0YnJlYWtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/heading.js\n");

/***/ })

});