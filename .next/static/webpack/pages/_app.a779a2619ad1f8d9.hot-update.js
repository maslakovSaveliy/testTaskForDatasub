"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resources_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/style.css */ \"./pages/resources/style.css\");\n/* harmony import */ var _resources_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar App = function() {\n    _s();\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(\"mongodb\");\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n        mode: \"onBlur\"\n    }), register = ref.register, _formState = ref.formState, errors = _formState.errors, isValid = _formState.isValid, handleSubmit = ref.handleSubmit, reset = ref.reset;\n    var onSubmit = function(data) {\n        console.log({\n            RequestId: String(Date.now()),\n            Amount: data.amount\n        });\n        reset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"pay__form\",\n            onSubmit: handleSubmit(onSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"card__number\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (errors === null || errors === void 0 ? void 0 : errors.cardNumber) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wrong Card Number\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                lineNumber: 21,\n                                columnNumber: 39\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Card Number:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"cardNumber\", {\n                            minLength: 16,\n                            maxLength: 16,\n                            required: true\n                        }), {\n                            type: \"number\",\n                            placeholder: \"0000-0000-0000-0000\"\n                        }), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"expiration\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: ((errors === null || errors === void 0 ? void 0 : errors.expirationDateMonth) || (errors === null || errors === void 0 ? void 0 : errors.expirationDateYear)) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wrong Expiration Date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Expiration Date:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"exp\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"expirationDateMonth\", {\n                                    min: 1,\n                                    max: 12,\n                                    maxLength: 2,\n                                    required: true\n                                }), {\n                                    type: \"number\",\n                                    placeholder: \"MM\"\n                                }), void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this),\n                                \"/\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"expirationDateYear\", {\n                                    min: 1,\n                                    max: 99,\n                                    maxLength: 2,\n                                    required: true\n                                }), {\n                                    type: \"number\",\n                                    placeholder: \"YY\"\n                                }), void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cvv\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (errors === null || errors === void 0 ? void 0 : errors.cvv) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wrong CVV\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                lineNumber: 65,\n                                columnNumber: 32\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"CVV:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"cvv\", {\n                            minLength: 3,\n                            maxLength: 3,\n                            required: true\n                        }), {\n                            type: \"number\",\n                            placeholder: \"123\"\n                        }), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"amount\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (errors === null || errors === void 0 ? void 0 : errors.amount) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wrong Amount\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                lineNumber: 78,\n                                columnNumber: 35\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Amount:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"amount\", {\n                            required: true\n                        }), {\n                            type: \"amount\",\n                            placeholder: \"1000\"\n                        }), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"submit\",\n                    disabled: !isValid,\n                    value: \"\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C\",\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(App, \"Gq7KPDxq7zxe+g5qAjaU3O0l0Rg=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTs7Ozs7aUNBQ2xCOzs7Ozs7eUJBQ0c7OEJBQ1AsOERBQUNMLE9BQUs7b0JBQ0pOLFNBQVMsRUFBQyxRQUFRO29CQUNsQmlCLFFBQVEsRUFBRSxDQUFDL0IsT0FBTztvQkFDbEJnQyxLQUFLLEVBQUMsc0NBQVE7b0JBQ2RSLElBQUksRUFBQyxRQUFROzs7Ozt5QkFDYjs7Ozs7O2lCQUNHO3FCQUNOLENBQ0g7Q0FDSDtHQTVGSzlCLEdBQUc7O1FBT0hILG9EQUFPOzs7QUFQUEcsS0FBQUEsR0FBRztBQTZGVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vcmVzb3VyY2VzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBtb25nb29zZS5jb25uZWN0KFwibW9uZ29kYlwiKTtcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMsIGlzVmFsaWQgfSxcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIHJlc2V0LFxyXG4gIH0gPSB1c2VGb3JtKHsgbW9kZTogXCJvbkJsdXJcIiB9KTtcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh7IFJlcXVlc3RJZDogU3RyaW5nKERhdGUubm93KCkpLCBBbW91bnQ6IGRhdGEuYW1vdW50IH0pO1xyXG4gICAgcmVzZXQoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwYXlfX2Zvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZF9fbnVtYmVyXCI+XHJcbiAgICAgICAgICA8ZGl2PntlcnJvcnM/LmNhcmROdW1iZXIgJiYgPHA+V3JvbmcgQ2FyZCBOdW1iZXI8L3A+fTwvZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPkNhcmQgTnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiY2FyZE51bWJlclwiLCB7XHJcbiAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxNixcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg6IDE2LFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDAwMC0wMDAwLTAwMDAtMDAwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJleHBpcmF0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7KGVycm9ycz8uZXhwaXJhdGlvbkRhdGVNb250aCB8fCBlcnJvcnM/LmV4cGlyYXRpb25EYXRlWWVhcikgJiYgKFxyXG4gICAgICAgICAgICAgIDxwPldyb25nIEV4cGlyYXRpb24gRGF0ZTwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPkV4cGlyYXRpb24gRGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXhwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImV4cGlyYXRpb25EYXRlTW9udGhcIiwge1xyXG4gICAgICAgICAgICAgICAgbWluOiAxLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxMixcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogMixcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTU1cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAvXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImV4cGlyYXRpb25EYXRlWWVhclwiLCB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDEsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDk5LFxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZWVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN2dlwiPlxyXG4gICAgICAgICAgPGRpdj57ZXJyb3JzPy5jdnYgJiYgPHA+V3JvbmcgQ1ZWPC9wPn08L2Rpdj5cclxuICAgICAgICAgIDxsYWJlbD5DVlY6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJjdnZcIiwge1xyXG4gICAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMjNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW1vdW50XCI+XHJcbiAgICAgICAgICA8ZGl2PntlcnJvcnM/LmFtb3VudCAmJiA8cD5Xcm9uZyBBbW91bnQ8L3A+fTwvZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPkFtb3VudDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImFtb3VudFwiLCB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB0eXBlPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMDAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcclxuICAgICAgICAgIGRpc2FibGVkPXshaXNWYWxpZH1cclxuICAgICAgICAgIHZhbHVlPVwi0JrRg9C/0LjRgtGMXCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJSZWFjdCIsIm1vbmdvb3NlIiwiQXBwIiwiY29ubmVjdCIsIm1vZGUiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImVycm9ycyIsImlzVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJSZXF1ZXN0SWQiLCJTdHJpbmciLCJEYXRlIiwibm93IiwiQW1vdW50IiwiYW1vdW50IiwiZm9ybSIsImNsYXNzTmFtZSIsInNwYW4iLCJkaXYiLCJjYXJkTnVtYmVyIiwicCIsImxhYmVsIiwiaW5wdXQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJyZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImV4cGlyYXRpb25EYXRlTW9udGgiLCJleHBpcmF0aW9uRGF0ZVllYXIiLCJtaW4iLCJtYXgiLCJjdnYiLCJkaXNhYmxlZCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});