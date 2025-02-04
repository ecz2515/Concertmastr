"use strict";
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

/***/ "./AppStateProvider.tsx":
/*!******************************!*\
  !*** ./AppStateProvider.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppStateProvider: () => (/* binding */ AppStateProvider),\n/* harmony export */   useAppContext: () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ AppStateProvider,useAppContext auto */ \n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AppStateProvider = ({ children })=>{\n    const [enhancedContrast, setEnhancedContrast] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [trueTone, setTrueTone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [blueLight, setBlueLight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fontSize, setFontSizeState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(16);\n    const [fontFamily, setFontFamily] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('SourceSans3');\n    const MIN_FONT_SIZE = 12;\n    const MAX_FONT_SIZE = 28;\n    const setFontSize = (value)=>{\n        const clampedValue = Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, value));\n        setFontSizeState(clampedValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            enhancedContrast,\n            trueTone,\n            blueLight,\n            fontSize,\n            fontFamily,\n            setEnhancedContrast,\n            setTrueTone,\n            setBlueLight,\n            setFontSize,\n            setFontFamily\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/evanchen/Desktop/Concertmastr/AppStateProvider.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAppContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n    if (!context) {\n        throw new Error('useAppContext must be used within an AppStateProvider');\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHBTdGF0ZVByb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1FO0FBZW5FLE1BQU1JLDJCQUFhSCxvREFBYUEsQ0FBdUJJO0FBRWhELE1BQU1DLG1CQUE0RCxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNwRixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVyxVQUFVQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUM7SUFDOUMsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1lLGdCQUFnQjtJQUN0QixNQUFNQyxnQkFBZ0I7SUFFdEIsTUFBTUMsY0FBYyxDQUFDQztRQUNuQixNQUFNQyxlQUFlQyxLQUFLQyxHQUFHLENBQUNOLGVBQWVLLEtBQUtFLEdBQUcsQ0FBQ04sZUFBZUU7UUFDckVOLGlCQUFpQk87SUFDbkI7SUFFQSxxQkFDRSw4REFBQ2xCLFdBQVdzQixRQUFRO1FBQ2xCTCxPQUFPO1lBQ0xiO1lBQ0FFO1lBQ0FFO1lBQ0FFO1lBQ0FFO1lBQ0FQO1lBQ0FFO1lBQ0FFO1lBQ0FPO1lBQ0FIO1FBQ0Y7a0JBRUNWOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTW9CLGdCQUFnQjtJQUMzQixNQUFNQyxVQUFVMUIsaURBQVVBLENBQUNFO0lBQzNCLElBQUksQ0FBQ3dCLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldmFuY2hlbi9EZXNrdG9wL0NvbmNlcnRtYXN0ci9BcHBTdGF0ZVByb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgZW5oYW5jZWRDb250cmFzdDogYm9vbGVhbjtcbiAgdHJ1ZVRvbmU6IGJvb2xlYW47XG4gIGJsdWVMaWdodDogYm9vbGVhbjtcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udEZhbWlseTogc3RyaW5nO1xuICBzZXRFbmhhbmNlZENvbnRyYXN0OiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHNldFRydWVUb25lOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHNldEJsdWVMaWdodDogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xuICBzZXRGb250U2l6ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldEZvbnRGYW1pbHk6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBcHBTdGF0ZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IEFwcFN0YXRlUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2VuaGFuY2VkQ29udHJhc3QsIHNldEVuaGFuY2VkQ29udHJhc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdHJ1ZVRvbmUsIHNldFRydWVUb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JsdWVMaWdodCwgc2V0Qmx1ZUxpZ2h0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZvbnRTaXplLCBzZXRGb250U2l6ZVN0YXRlXSA9IHVzZVN0YXRlKDE2KTtcbiAgY29uc3QgW2ZvbnRGYW1pbHksIHNldEZvbnRGYW1pbHldID0gdXNlU3RhdGUoJ1NvdXJjZVNhbnMzJyk7XG5cbiAgY29uc3QgTUlOX0ZPTlRfU0laRSA9IDEyO1xuICBjb25zdCBNQVhfRk9OVF9TSVpFID0gMjg7XG5cbiAgY29uc3Qgc2V0Rm9udFNpemUgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGNsYW1wZWRWYWx1ZSA9IE1hdGgubWF4KE1JTl9GT05UX1NJWkUsIE1hdGgubWluKE1BWF9GT05UX1NJWkUsIHZhbHVlKSk7XG4gICAgc2V0Rm9udFNpemVTdGF0ZShjbGFtcGVkVmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGVuaGFuY2VkQ29udHJhc3QsXG4gICAgICAgIHRydWVUb25lLFxuICAgICAgICBibHVlTGlnaHQsXG4gICAgICAgIGZvbnRTaXplLFxuICAgICAgICBmb250RmFtaWx5LFxuICAgICAgICBzZXRFbmhhbmNlZENvbnRyYXN0LFxuICAgICAgICBzZXRUcnVlVG9uZSxcbiAgICAgICAgc2V0Qmx1ZUxpZ2h0LFxuICAgICAgICBzZXRGb250U2l6ZSxcbiAgICAgICAgc2V0Rm9udEZhbWlseSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBDb250ZXh0ID0gKCk6IEFwcFN0YXRlID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXBwQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEFwcFN0YXRlUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsInVuZGVmaW5lZCIsIkFwcFN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImVuaGFuY2VkQ29udHJhc3QiLCJzZXRFbmhhbmNlZENvbnRyYXN0IiwidHJ1ZVRvbmUiLCJzZXRUcnVlVG9uZSIsImJsdWVMaWdodCIsInNldEJsdWVMaWdodCIsImZvbnRTaXplIiwic2V0Rm9udFNpemVTdGF0ZSIsImZvbnRGYW1pbHkiLCJzZXRGb250RmFtaWx5IiwiTUlOX0ZPTlRfU0laRSIsIk1BWF9GT05UX1NJWkUiLCJzZXRGb250U2l6ZSIsInZhbHVlIiwiY2xhbXBlZFZhbHVlIiwiTWF0aCIsIm1heCIsIm1pbiIsIlByb3ZpZGVyIiwidXNlQXBwQ29udGV4dCIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./AppStateProvider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppStateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppStateProvider */ \"./AppStateProvider.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppStateProvider__WEBPACK_IMPORTED_MODULE_2__.AppStateProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/evanchen/Desktop/Concertmastr/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/evanchen/Desktop/Concertmastr/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBRTZCO0FBRXhDLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNILCtEQUFnQkE7a0JBQ2YsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldmFuY2hlbi9EZXNrdG9wL0NvbmNlcnRtYXN0ci9wYWdlcy9fYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBBcHBTdGF0ZVByb3ZpZGVyIH0gZnJvbSAnLi4vQXBwU3RhdGVQcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcFN0YXRlUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcHBTdGF0ZVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwU3RhdGVQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();