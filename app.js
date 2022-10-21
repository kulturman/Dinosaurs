/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const formElement = document.querySelector('#dino-compare');\nconst nameElement = document.querySelector('#name');\nconst dietElement = document.querySelector('#diet');\nconst feetElement = document.querySelector('#feet');\nconst inchesElement = document.querySelector('#inches');\nconst weightElement = document.querySelector('#weight');\n\nformElement.addEventListener('submit', e => {\n    e.preventDefault();\n    formElement.style.display = 'none';\n})\n\nalert('I am a bosss')\n\n//# sourceURL=webpack://dinosaurs/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;