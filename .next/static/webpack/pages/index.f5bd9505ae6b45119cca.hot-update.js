webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calculator/index.js":
/*!****************************************!*\
  !*** ./components/Calculator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _calculator_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.module.scss */ \"./components/Calculator/calculator.module.scss\");\n/* harmony import */ var _calculator_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calculator_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/tiago/Documentos/Desenvolvimento/Calculadora_IMC/components/Calculator/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction calculator() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      altura = _useState[0],\n      setAltura = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      peso = _useState2[0],\n      serPeso = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _calculator_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.calculator,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      maxWidth: \"xs\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h3\",\n        children: \"Calculadora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        container: true,\n        direction: \"column\",\n        spacing: 2,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          item: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n            label: \"Altura em cent\\xEDmetros\",\n            variant: \"filled\",\n            fullWidth: true,\n            type: \"number\",\n            value: altura,\n            onChange: function onChange(_ref) {\n              var target = _ref.target;\n              return setAltura(target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          item: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n            label: \"Peso em KG\",\n            variant: \"filled\",\n            fullWidth: true,\n            type: \"number\",\n            value: peso,\n            onChange: function onChange(_ref2) {\n              var target = _ref2.target;\n              return setPeso(target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          item: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            variant: \"contained\",\n            color: \"primary\",\n            fullWidth: true,\n            children: \"Calcular\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n          children: \"O seu IMC \\xE9:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n_s(calculator, \"PLa2UsxwC6WRIgmwUi+1eTJ9z9M=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculator);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzPzc0YTciXSwibmFtZXMiOlsiY2FsY3VsYXRvciIsInVzZVN0YXRlIiwiYWx0dXJhIiwic2V0QWx0dXJhIiwicGVzbyIsInNlclBlc28iLCJzdHlsZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFBlc28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUVTQyxzREFBUSxDQUFDLENBQUQsQ0FGakI7QUFBQSxNQUVYQyxNQUZXO0FBQUEsTUFFSkMsU0FGSTs7QUFBQSxtQkFHTUYsc0RBQVEsQ0FBQyxDQUFELENBSGQ7QUFBQSxNQUdYRyxJQUhXO0FBQUEsTUFHTEMsT0FISzs7QUFLbEIsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNOLFVBQXZCO0FBQUEsMkJBRUkscUVBQUMsMkRBQUQ7QUFBVyxjQUFRLEVBQUMsSUFBcEI7QUFBQSw4QkFDQSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUEscUVBQUMsc0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGlCQUFTLEVBQUMsUUFBMUI7QUFBbUMsZUFBTyxFQUFFLENBQTVDO0FBQUEsZ0NBQ0kscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBQSxpQ0FDSSxxRUFBQywyREFBRDtBQUFXLGlCQUFLLEVBQUMsMEJBQWpCO0FBQXlDLG1CQUFPLEVBQUMsUUFBakQ7QUFBMEQscUJBQVMsTUFBbkU7QUFBb0UsZ0JBQUksRUFBQyxRQUF6RTtBQUFrRixpQkFBSyxFQUFFRSxNQUF6RjtBQUFpRyxvQkFBUSxFQUFFO0FBQUEsa0JBQUVLLE1BQUYsUUFBRUEsTUFBRjtBQUFBLHFCQUFjSixTQUFTLENBQUNJLE1BQU0sQ0FBQ0MsS0FBUixDQUF2QjtBQUFBO0FBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUkscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBQSxpQ0FDSSxxRUFBQywyREFBRDtBQUFXLGlCQUFLLEVBQUMsWUFBakI7QUFBOEIsbUJBQU8sRUFBQyxRQUF0QztBQUErQyxxQkFBUyxNQUF4RDtBQUF5RCxnQkFBSSxFQUFDLFFBQTlEO0FBQXVFLGlCQUFLLEVBQUVKLElBQTlFO0FBQW9GLG9CQUFRLEVBQUU7QUFBQSxrQkFBRUcsTUFBRixTQUFFQSxNQUFGO0FBQUEscUJBQWNFLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDQyxLQUFSLENBQXJCO0FBQUE7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFPSSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFBLGlDQUNJLHFFQUFDLHdEQUFEO0FBQVEsbUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBSyxFQUFDLFNBQWxDO0FBQTRDLHFCQUFTLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVVJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7R0F6QlFSLFU7O0FBMEJNQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FsY3VsYXRvci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIFVzZVN0YXRlfSAgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYWxjdWxhdG9yLm1vZHVsZS5zY3NzJ1xuXG5mdW5jdGlvbiBjYWxjdWxhdG9yICgpe1xuXG4gICAgY29uc3QgW2FsdHVyYSxzZXRBbHR1cmFdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbcGVzbywgc2VyUGVzb10gPSB1c2VTdGF0ZSgwKVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxjdWxhdG9yfT5cblxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhzXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5DYWxjdWxhZG9yYTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiQWx0dXJhIGVtIGNlbnTDrW1ldHJvc1wiIHZhcmlhbnQ9XCJmaWxsZWRcIiBmdWxsV2lkdGggdHlwZT1cIm51bWJlclwiIHZhbHVlPXthbHR1cmF9IG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHNldEFsdHVyYSh0YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJQZXNvIGVtIEtHXCIgdmFyaWFudD1cImZpbGxlZFwiIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Blc299IG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHNldFBlc28odGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgZnVsbFdpZHRoPkNhbGN1bGFyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk8gc2V1IElNQyDDqTo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Calculator/index.js\n");

/***/ })

})