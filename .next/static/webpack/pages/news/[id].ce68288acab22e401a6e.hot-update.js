/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[id]",{

/***/ "./pages/news/[id].js":
/*!****************************!*\
  !*** ./pages/news/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ SingleNews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/japasset/Sites/icc575-nextjs/nextjs-blog/pages/news/[id].js\";\n\n\nvar __N_SSG = true;\nfunction SingleNews(_ref) {\n  var singlePostData = _ref.singlePostData;\n  var title = singlePostData.title,\n      content = singlePostData.content,\n      author = singlePostData.author,\n      featuredImage = singlePostData.featuredImage;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Col, {\n          children: [featuredImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: featuredImage.node.sourceUrl,\n            alt: featuredImage.node.altText,\n            width: featuredImage.node.mediaDetails.width,\n            height: featuredImage.node.mediaDetails.height\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 4\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: author.node.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 4\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: content\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 4\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 3\n  }, this);\n}\n_c = SingleNews;\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleNews\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9baWRdLmpzPzkzNTEiXSwibmFtZXMiOlsiU2luZ2xlTmV3cyIsInNpbmdsZVBvc3REYXRhIiwidGl0bGUiLCJjb250ZW50IiwiYXV0aG9yIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzb3VyY2VVcmwiLCJhbHRUZXh0IiwibWVkaWFEZXRhaWxzIiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUErQmUsU0FBU0EsVUFBVCxPQUFzQztBQUFBLE1BQWpCQyxjQUFpQixRQUFqQkEsY0FBaUI7QUFBQSxNQUU3Q0MsS0FGNkMsR0FFSkQsY0FGSSxDQUU3Q0MsS0FGNkM7QUFBQSxNQUV0Q0MsT0FGc0MsR0FFSkYsY0FGSSxDQUV0Q0UsT0FGc0M7QUFBQSxNQUU3QkMsTUFGNkIsR0FFSkgsY0FGSSxDQUU3QkcsTUFGNkI7QUFBQSxNQUVyQkMsYUFGcUIsR0FFSkosY0FGSSxDQUVyQkksYUFGcUI7QUFJcEQsc0JBQ0MsOERBQUMsdURBQUQ7QUFBQSwyQkFDQyw4REFBQyxTQUFEO0FBQUEsNkJBQ0MsOERBQUMsR0FBRDtBQUFBLCtCQUNDLDhEQUFDLEdBQUQ7QUFBQSxxQkFFREEsYUFBYSxpQkFDYiw4REFBQyxtREFBRDtBQUNDLGVBQUcsRUFBRUEsYUFBYSxDQUFDQyxJQUFkLENBQW1CQyxTQUR6QjtBQUVDLGVBQUcsRUFBRUYsYUFBYSxDQUFDQyxJQUFkLENBQW1CRSxPQUZ6QjtBQUdDLGlCQUFLLEVBQUVILGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQkcsWUFBbkIsQ0FBZ0NDLEtBSHhDO0FBSUMsa0JBQU0sRUFBRUwsYUFBYSxDQUFDQyxJQUFkLENBQW1CRyxZQUFuQixDQUFnQ0U7QUFKekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQyxlQVVGO0FBQUEsc0JBQUtUO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRSxlQVdGO0FBQUEsc0JBQUtFLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZTTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhFLGVBWUY7QUFBSyxtQ0FBdUIsRUFBRTtBQUFFQyxvQkFBTSxFQUFFVjtBQUFWO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFzQkE7S0ExQnVCSCxVIiwiZmlsZSI6Ii4vcGFnZXMvbmV3cy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5pbXBvcnQgeyBnZXRBbGxQb3N0U2x1Z3MsIGdldFNpbmdsZVBvc3REYXRhIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXHRjb25zdCBhbGxQb3N0U2x1Z3MgPSBhd2FpdCBnZXRBbGxQb3N0U2x1Z3MoKVxuXG5cdGNvbnN0IHBhdGhzID0gYWxsUG9zdFNsdWdzLmVkZ2VzLm1hcChlZGdlID0+IHtcblx0XHRjb25zdCB7IHNsdWcgfSA9IGVkZ2Uubm9kZVxuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0aWQ6IHNsdWdcblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cdHJldHVybiB7XG5cdFx0cGF0aHMsXG5cdFx0ZmFsbGJhY2s6ZmFsc2Vcblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuXHRjb25zdCBzaW5nbGVQb3N0RGF0YSA9IGF3YWl0IGdldFNpbmdsZVBvc3REYXRhKHBhcmFtcy5pZClcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRzaW5nbGVQb3N0RGF0YVxuXHRcdH1cblx0fVx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZU5ld3Moe3NpbmdsZVBvc3REYXRhfSkge1xuXG5cdGNvbnN0IHt0aXRsZSwgY29udGVudCwgYXV0aG9yLCBmZWF0dXJlZEltYWdlfSA9IHNpbmdsZVBvc3REYXRhO1xuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0PENvbD5cblx0XHRcdHtcblx0XHRcdFx0ZmVhdHVyZWRJbWFnZSAmJlxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRzcmM9e2ZlYXR1cmVkSW1hZ2Uubm9kZS5zb3VyY2VVcmx9XG5cdFx0XHRcdFx0YWx0PXtmZWF0dXJlZEltYWdlLm5vZGUuYWx0VGV4dH1cblx0XHRcdFx0XHR3aWR0aD17ZmVhdHVyZWRJbWFnZS5ub2RlLm1lZGlhRGV0YWlscy53aWR0aH1cblx0XHRcdFx0XHRoZWlnaHQ9e2ZlYXR1cmVkSW1hZ2Uubm9kZS5tZWRpYURldGFpbHMuaGVpZ2h0fVxuXHRcdFx0XHQvPlxuXHRcdFx0fVxuXHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0PGgyPnthdXRob3Iubm9kZS5uYW1lfTwvaDI+XG5cdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudH19Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L0xheW91dD5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/[id].js\n");

/***/ })

});