/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/style.css */ \"./pages/resources/style.css\");\n/* harmony import */ var _resources_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst App = ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_4___default().connect(\"mongodb://localhost/muggers-db\");\n    const { register , formState: { errors , isValid  } , handleSubmit , reset ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onBlur\"\n    });\n    const onSubmit = (data)=>{\n        console.log({\n            RequestId: String(Date.now()),\n            Amount: data.amount\n        });\n        reset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"pay__form\",\n            onSubmit: handleSubmit(onSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"card__number\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: errors?.cardNumber && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wrong Card Number\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                lineNumber: 21,\n                                columnNumber: 39\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Card Number:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ...register(\"cardNumber\", {\n                                minLength: 16,\n                                maxLength: 16,\n                                required: true\n                            }),\n                            type: \"number\",\n                            placeholder: \"0000-0000-0000-0000\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"expiration\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (errors?.expirationDateMonth || errors?.expirationDateYear) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wrong Expiration Date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Expiration Date:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"exp\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ...register(\"expirationDateMonth\", {\n                                        min: 1,\n                                        max: 12,\n                                        maxLength: 2,\n                                        required: true\n                                    }),\n                                    type: \"number\",\n                                    placeholder: \"MM\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"/\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ...register(\"expirationDateYear\", {\n                                        min: 1,\n                                        max: 99,\n                                        maxLength: 2,\n                                        required: true\n                                    }),\n                                    type: \"number\",\n                                    placeholder: \"YY\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cvv\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: errors?.cvv && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wrong CVV\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                lineNumber: 65,\n                                columnNumber: 32\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"CVV:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ...register(\"cvv\", {\n                                minLength: 3,\n                                maxLength: 3,\n                                required: true\n                            }),\n                            type: \"number\",\n                            placeholder: \"123\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"amount\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: errors?.amount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wrong Amount\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                                lineNumber: 78,\n                                columnNumber: 35\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Amount:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ...register(\"amount\", {\n                                required: true\n                            }),\n                            type: \"amount\",\n                            placeholder: \"1000\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"submit\",\n                    disabled: !isValid,\n                    value: \"\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C\",\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\savel\\\\Desktop\\\\test task\\\\pages\\\\_app.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBTztzQ0FDNUMsOERBQUNDLE9BQUs7c0NBQUMsTUFBSTs7Ozs7cUNBQVE7c0NBQ25CLDhEQUFDQyxPQUFLOzRCQUNILEdBQUd4QixRQUFRLENBQUMsS0FBSyxFQUFFO2dDQUNsQnlCLFNBQVMsRUFBRSxDQUFDO2dDQUNaQyxTQUFTLEVBQUUsQ0FBQztnQ0FDWkMsUUFBUSxFQUFFLElBQUk7NkJBQ2YsQ0FBQzs0QkFDRkMsSUFBSSxFQUFDLFFBQVE7NEJBQ2JDLFdBQVcsRUFBQyxLQUFLOzs7OztxQ0FDakI7Ozs7Ozs2QkFDRzs4QkFDUCw4REFBQ1YsTUFBSTtvQkFBQ0QsU0FBUyxFQUFDLFFBQVE7O3NDQUN0Qiw4REFBQ0UsS0FBRztzQ0FBRWxCLE1BQU0sRUFBRWMsTUFBTSxrQkFBSSw4REFBQ00sR0FBQzswQ0FBQyxjQUFZOzs7Ozt5Q0FBSTs7Ozs7cUNBQU87c0NBQ2xELDhEQUFDQyxPQUFLO3NDQUFDLFNBQU87Ozs7O3FDQUFRO3NDQUN0Qiw4REFBQ0MsT0FBSzs0QkFDSCxHQUFHeEIsUUFBUSxDQUFDLFFBQVEsRUFBRTtnQ0FDckIyQixRQUFRLEVBQUUsSUFBSTs2QkFDZixDQUFDOzRCQUNGQyxJQUFJLEVBQUMsUUFBUTs0QkFDYkMsV0FBVyxFQUFDLE1BQU07Ozs7O3FDQUNsQjs7Ozs7OzZCQUNHOzhCQUNQLDhEQUFDTCxPQUFLO29CQUNKTixTQUFTLEVBQUMsUUFBUTtvQkFDbEJpQixRQUFRLEVBQUUsQ0FBQ2hDLE9BQU87b0JBQ2xCaUMsS0FBSyxFQUFDLHNDQUFRO29CQUNkUixJQUFJLEVBQUMsUUFBUTs7Ozs7NkJBQ2I7Ozs7OztxQkFDRztxQkFDTixDQUNIO0NBQ0g7QUFDRCxpRUFBZTlCLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vcmVzb3VyY2VzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBtb25nb29zZS5jb25uZWN0KFwibW9uZ29kYjovL2xvY2FsaG9zdC9tdWdnZXJzLWRiXCIpO1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycywgaXNWYWxpZCB9LFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgcmVzZXQsXHJcbiAgfSA9IHVzZUZvcm0oeyBtb2RlOiBcIm9uQmx1clwiIH0pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHsgUmVxdWVzdElkOiBTdHJpbmcoRGF0ZS5ub3coKSksIEFtb3VudDogZGF0YS5hbW91bnQgfSk7XHJcbiAgICByZXNldCgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInBheV9fZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkX19udW1iZXJcIj5cclxuICAgICAgICAgIDxkaXY+e2Vycm9ycz8uY2FyZE51bWJlciAmJiA8cD5Xcm9uZyBDYXJkIE51bWJlcjwvcD59PC9kaXY+XHJcbiAgICAgICAgICA8bGFiZWw+Q2FyZCBOdW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJjYXJkTnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgICBtaW5MZW5ndGg6IDE2LFxyXG4gICAgICAgICAgICAgIG1heExlbmd0aDogMTYsXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwMDAwLTAwMDAtMDAwMC0wMDAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGlyYXRpb25cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzPy5leHBpcmF0aW9uRGF0ZU1vbnRoIHx8IGVycm9ycz8uZXhwaXJhdGlvbkRhdGVZZWFyKSAmJiAoXHJcbiAgICAgICAgICAgICAgPHA+V3JvbmcgRXhwaXJhdGlvbiBEYXRlPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGFiZWw+RXhwaXJhdGlvbiBEYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJleHBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZXhwaXJhdGlvbkRhdGVNb250aFwiLCB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDEsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDEyLFxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNTVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZXhwaXJhdGlvbkRhdGVZZWFyXCIsIHtcclxuICAgICAgICAgICAgICAgIG1pbjogMSxcclxuICAgICAgICAgICAgICAgIG1heDogOTksXHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllZXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Z2XCI+XHJcbiAgICAgICAgICA8ZGl2PntlcnJvcnM/LmN2diAmJiA8cD5Xcm9uZyBDVlY8L3A+fTwvZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPkNWVjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImN2dlwiLCB7XHJcbiAgICAgICAgICAgICAgbWluTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgIG1heExlbmd0aDogMyxcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyM1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbW91bnRcIj5cclxuICAgICAgICAgIDxkaXY+e2Vycm9ycz8uYW1vdW50ICYmIDxwPldyb25nIEFtb3VudDwvcD59PC9kaXY+XHJcbiAgICAgICAgICA8bGFiZWw+QW1vdW50OjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiYW1vdW50XCIsIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwMDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc1ZhbGlkfVxyXG4gICAgICAgICAgdmFsdWU9XCLQmtGD0L/QuNGC0YxcIlxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsIlJlYWN0IiwibW9uZ29vc2UiLCJBcHAiLCJjb25uZWN0IiwicmVnaXN0ZXIiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJpc1ZhbGlkIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJtb2RlIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIlJlcXVlc3RJZCIsIlN0cmluZyIsIkRhdGUiLCJub3ciLCJBbW91bnQiLCJhbW91bnQiLCJmb3JtIiwiY2xhc3NOYW1lIiwic3BhbiIsImRpdiIsImNhcmROdW1iZXIiLCJwIiwibGFiZWwiLCJpbnB1dCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZXhwaXJhdGlvbkRhdGVNb250aCIsImV4cGlyYXRpb25EYXRlWWVhciIsIm1pbiIsIm1heCIsImN2diIsImRpc2FibGVkIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/resources/style.css":
/*!***********************************!*\
  !*** ./pages/resources/style.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();