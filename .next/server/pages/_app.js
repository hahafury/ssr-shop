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

/***/ "./src/client/store/reducers/index.ts":
/*!********************************************!*\
  !*** ./src/client/store/reducers/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-reducer */ \"./src/client/store/reducers/user-reducer.ts\");\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    userReducer: _user_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst reducer = (state, action)=>{\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE) {\n        const nextState = {\n            ...state,\n            ...action.payload\n        };\n        if (state.count) nextState.count = state.count; // preserve count value on client side navigation\n        return nextState;\n    } else {\n        return rootReducer(state, action);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUNNO0FBQ1Y7QUFFekMsTUFBTUcsV0FBVyxHQUFHRixzREFBZSxDQUFDO0lBQ2xDQyxXQUFXO0NBQ1osQ0FBQztBQUVLLE1BQU1FLE9BQU8sR0FBRyxDQUFDQyxLQUFVLEVBQUVDLE1BQWlCLEdBQUs7SUFDeEQsSUFBSUEsTUFBTSxDQUFDQyxJQUFJLEtBQUtQLHVEQUFPLEVBQUU7UUFDM0IsTUFBTVEsU0FBUyxHQUFHO1lBQ2hCLEdBQUdILEtBQUs7WUFDUixHQUFHQyxNQUFNLENBQUNHLE9BQU87U0FDbEI7UUFDRCxJQUFJSixLQUFLLENBQUNLLEtBQUssRUFBRUYsU0FBUyxDQUFDRSxLQUFLLEdBQUdMLEtBQUssQ0FBQ0ssS0FBSyxDQUFDLENBQUMsaURBQWlEO1FBQ2pHLE9BQU9GLFNBQVMsQ0FBQztLQUNsQixNQUFNO1FBQ0wsT0FBT0wsV0FBVyxDQUFDRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQyxDQUFDO0tBQ25DO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3NyYy9jbGllbnQvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHM/YzcxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IEFueUFjdGlvbiwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlci1yZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2VyUmVkdWNlcixcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogYW55LCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cbiAgICB9O1xuICAgIGlmIChzdGF0ZS5jb3VudCkgbmV4dFN0YXRlLmNvdW50ID0gc3RhdGUuY291bnQ7IC8vIHByZXNlcnZlIGNvdW50IHZhbHVlIG9uIGNsaWVudCBzaWRlIG5hdmlnYXRpb25cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfVxufTtcblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xuIl0sIm5hbWVzIjpbIkhZRFJBVEUiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5leHRTdGF0ZSIsInBheWxvYWQiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/store/reducers/index.ts\n");

/***/ }),

/***/ "./src/client/store/reducers/user-reducer.ts":
/*!***************************************************!*\
  !*** ./src/client/store/reducers/user-reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {}\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3N0b3JlL3JlZHVjZXJzL3VzZXItcmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLFlBQVksR0FBRyxFQUFFO0FBRWhCLE1BQU1DLFNBQVMsR0FBR0YsNkRBQVcsQ0FBQztJQUNuQ0csSUFBSSxFQUFFLE1BQU07SUFDWkYsWUFBWTtJQUNaRyxRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUMsQ0FBQztBQUVILGlFQUFlRixTQUFTLENBQUNHLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3NyYy9jbGllbnQvc3RvcmUvcmVkdWNlcnMvdXNlci1yZWR1Y2VyLnRzP2VlYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICd1c2VyJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/store/reducers/user-reducer.ts\n");

/***/ }),

/***/ "./src/client/store/store.ts":
/*!***********************************!*\
  !*** ./src/client/store/store.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"./src/client/store/reducers/index.ts\");\n\n\n\nconst makeStore = (context)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: _reducers__WEBPACK_IMPORTED_MODULE_2__.reducer,\n        devTools: true\n    });\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3N0b3JlL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUNVO0FBQ3ZCO0FBRXJDLE1BQU1HLFNBQVMsR0FBRyxDQUFDQyxPQUFnQixHQUNqQ0osZ0VBQWMsQ0FBQztRQUNiRSxPQUFPLEVBQUVBLDhDQUFPO1FBQ2hCRyxRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7QUFLRyxNQUFNQyxPQUFPLEdBQUdMLGlFQUFhLENBQVdFLFNBQVMsRUFBRTtJQUFFSSxLQUFLLEVBQUUsSUFBSTtDQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3NyYy9jbGllbnQvc3RvcmUvc3RvcmUudHM/ZTZmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0OiBDb250ZXh0KSA9PlxuICBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogcmVkdWNlcixcbiAgICBkZXZUb29sczogdHJ1ZSxcbiAgfSk7XG5cbmV4cG9ydCB0eXBlIEFwcFN0b3JlID0gUmV0dXJuVHlwZTx0eXBlb2YgbWFrZVN0b3JlPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gQXBwU3RvcmVbJ2Rpc3BhdGNoJ107XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxBcHBTdG9yZT4obWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY3JlYXRlV3JhcHBlciIsInJlZHVjZXIiLCJtYWtlU3RvcmUiLCJjb250ZXh0IiwiZGV2VG9vbHMiLCJ3cmFwcGVyIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/store/store.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/styles/globals.scss */ \"./src/client/styles/globals.scss\");\n/* harmony import */ var _client_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/store/store */ \"./src/client/store/store.ts\");\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/nikita/Documents/food-store-client/server/src/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_client_store_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFFUztBQUVoRCxNQUFNQyxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxHQUFrQjtJQUNqRSxxQkFBTyw4REFBQ0QsU0FBUztRQUFFLEdBQUdDLFNBQVM7Ozs7O2lCQUFJLENBQUM7Q0FDckM7QUFFRCxpRUFBZUgsa0VBQWlCLENBQUNDLEtBQUssQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jbGllbnQvc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL2NsaWVudC9zdG9yZS9zdG9yZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/client/styles/globals.scss":
/*!****************************************!*\
  !*** ./src/client/styles/globals.scss ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();