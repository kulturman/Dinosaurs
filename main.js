/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _living_being__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./living-being */ \"./src/living-being.js\");\n/* harmony import */ var _tile_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-manager */ \"./src/tile-manager.js\");\n\n\n\nconst formElement = document.querySelector('#dino-compare');\nconst nameElement = document.querySelector('#name');\nconst dietElement = document.querySelector('#diet');\nconst inchesElement = document.querySelector('#inches');\nconst weightElement = document.querySelector('#weight');\n\nformElement.addEventListener('submit', e => {\n    e.preventDefault();\n    formElement.style.display = 'none';\n    \n    const human = new _living_being__WEBPACK_IMPORTED_MODULE_0__.LivingBeing(\n        'human', nameElement.value, weightElement.valueAsNumber,\n        inchesElement.valueAsNumber, dietElement, 'Probably first in Africa',\n        'Prehistory', ['']\n    );\n\n    fetch('./dino.json')\n        .then(response => response.json())\n        .then(({ Dinos: dinos }) => {\n            const livingBeings = dinos.map(dino => new _living_being__WEBPACK_IMPORTED_MODULE_0__.LivingBeing(\n                //We use species name as name\n                dino.species, dino.species, dino.weight,\n                dino.height, dino.diet, dino.where,\n                dino.when, dino.facts\n            ));\n            livingBeings.push(human);\n\n            const tileManager = new _tile_manager__WEBPACK_IMPORTED_MODULE_1__.TileManager(livingBeings);\n            tileManager.shuffleTiles();\n            tileManager.displaysTiles();\n\n        })\n})\n\n//# sourceURL=webpack://dinosaurs/./src/app.js?");

/***/ }),

/***/ "./src/living-being.js":
/*!*****************************!*\
  !*** ./src/living-being.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LivingBeing\": () => (/* binding */ LivingBeing)\n/* harmony export */ });\nfunction LivingBeing(species, name, weight, height, diet, where, when, facts) {\n    this.species = species;\n    this.name = name;\n    this.weight = weight;\n    this.height = height;\n    this.diet = diet;\n    this.where = where;\n    this.when = when;\n    this.facts = facts;\n}\n\nLivingBeing.prototype.compareName = function compareName(compareTo) {\n    return this.name.localeCompare(compareTo.name);\n}\n\nLivingBeing.prototype.compareWeight = function compareWeight(compareTo) {\n    if (this.weight < compareTo.weight) {\n        return -1;\n    }\n    else if (this.weight > compareTo.weight) {\n        return 1;\n    }\n\n    return 0;\n}\n\nLivingBeing.prototype.compareHeight = function compareHeight(compareTo) {\n    if (this.height < compareTo.height) {\n        return -1;\n    }\n    else if (this.height > compareTo.height) {\n        return 1;\n    }\n\n    return 0;\n}\n\n//# sourceURL=webpack://dinosaurs/./src/living-being.js?");

/***/ }),

/***/ "./src/tile-manager.js":
/*!*****************************!*\
  !*** ./src/tile-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TileManager\": () => (/* binding */ TileManager)\n/* harmony export */ });\nfunction TileManager(tiles) {\n    this.rootElement = document.querySelector('#grid');\n    this.tiles = tiles;\n}\n\n\nTileManager.prototype.displaysTiles = function displaysTiles() {\n    this.tiles.forEach(livingBeing => {\n        this.rootElement.insertAdjacentHTML('afterbegin', `\n            <div class=\"grid-item\">\n                <h3>${livingBeing.name || livingBeing.species}</h3>\n                <img src=\"./images/${livingBeing.species.toLowerCase()}.png\" alt=\"\" class=\"animal__image\">\n                <p>\n                    ${livingBeing.species !== 'human' ? livingBeing.facts[Math.floor(Math.random() * livingBeing.facts.length)]: ''}\n                </p>\n            </div>\n        `);\n    });\n}\n\nTileManager.prototype.shuffleTiles = function shuffleTiles() {\n    //Let find the human tile here and shift it as it has to be in the middle and we want to compare it to other dinosaurs\n    let humanIndex = this.tiles.findIndex(livingBeing => livingBeing.species === 'human');\n\n    for (let i = this.tiles.length - 1; i > 0; i--) {\n        const comparisonResult = this.tiles[humanIndex].compareName(this.tiles[i]);\n        const species = this.tiles[i].species;\n\n        /** We only add that for dinos */\n        if (!['human', 'pigeon'].includes(species.toLowerCase())) {\n            switch(comparisonResult) {\n                case 0:\n                    this.tiles[i].facts.unshift('We have the same name');\n                    break;\n                case 1:\n                    this.tiles[i].facts.unshift('My name comes before yours');\n                    break;\n                case -1:\n                    this.tiles[i].facts.unshift('My name comes after yours');\n                    break;\n                default:\n                    alert('Something went wrong');\n            }\n        }\n\n        const j = Math.floor(Math.random() * (i + 1));\n        [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];\n    }\n\n    //index has probably changed, we need to recompute it, did not find another solution\n    humanIndex = this.tiles.findIndex(livingBeing => livingBeing.species === 'human');\n\n    if (humanIndex >= 0) {\n        [this.tiles[4], this.tiles[humanIndex]] = [this.tiles[humanIndex], this.tiles[4]];\n    }\n}\n\n\n//# sourceURL=webpack://dinosaurs/./src/tile-manager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;