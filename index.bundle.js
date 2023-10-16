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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addChessboard = () => {\n  function addColumnNumber(gameboardContainer, firstCellColor, lastCellColor, numberCell, number) {\n    const currentNumberCell = numberCell;\n    gameboardContainer.appendChild(firstCellColor.cloneNode(true));\n    currentNumberCell.textContent = number * 2 + 1;\n    lastCellColor.appendChild(numberCell);\n    gameboardContainer.appendChild(lastCellColor.cloneNode(true));\n  }\n\n  function addLineCells(\n    gameboardContainer,\n    firstCellColor,\n    lastCellColor,\n    lineNumberCell,\n    isLastLineOfBoard = false,\n  ) {\n    if (!isLastLineOfBoard) {\n      // put the line numbers of the chessboard from the y-axis to the left\n      const startingCellColor = firstCellColor.cloneNode(true);\n      startingCellColor.appendChild(lineNumberCell);\n      gameboardContainer.appendChild(startingCellColor.cloneNode(true));\n      gameboardContainer.appendChild(lastCellColor.cloneNode(true));\n\n      for (let i = 0; i < 3; i += 1) {\n        gameboardContainer.appendChild(firstCellColor.cloneNode(true));\n        gameboardContainer.appendChild(lastCellColor.cloneNode(true));\n      }\n    } else {\n      for (let i = 0; i < 4; i += 1) {\n        const columnNumberCell = lineNumberCell;\n        columnNumberCell.textContent = i * 2;\n        if (i === 0) {\n          const startingFirstCellColor = firstCellColor.cloneNode(true);\n          startingFirstCellColor.appendChild(lineNumberCell);\n\n          columnNumberCell.classList.remove('line');\n          columnNumberCell.classList.add('column');\n\n          const firstColumnNumberCell = columnNumberCell.cloneNode(true);\n          startingFirstCellColor.appendChild(firstColumnNumberCell);\n          addColumnNumber(\n            gameboardContainer,\n            startingFirstCellColor,\n            lastCellColor,\n            columnNumberCell,\n            i,\n          );\n        } else {\n          firstCellColor.appendChild(columnNumberCell);\n          addColumnNumber(gameboardContainer, firstCellColor, lastCellColor, columnNumberCell, i);\n        }\n      }\n    }\n  }\n\n  function addChessCells() {\n    const gameboardContainer = document.querySelector('.gameboard-container');\n    const blackChessCell = document.createElement('div');\n    blackChessCell.classList.add('chess-cell', 'black');\n    const whiteChessCell = document.createElement('chess-cell', 'white');\n    whiteChessCell.classList.add('chess-cell', 'white');\n    for (let i = 4; i > 0; i -= 1) {\n      const lineNumberCell = document.createElement('div');\n      lineNumberCell.classList.add('board-number', 'line');\n      lineNumberCell.textContent = i * 2 - 1;\n      addLineCells(gameboardContainer, whiteChessCell, blackChessCell, lineNumberCell);\n      lineNumberCell.textContent = i * 2 - 2;\n      if (i === 1) {\n        addLineCells(gameboardContainer, blackChessCell, whiteChessCell, lineNumberCell, true);\n      } else {\n        addLineCells(gameboardContainer, blackChessCell, whiteChessCell, lineNumberCell);\n      }\n    }\n  }\n\n  function content() {\n    window.addEventListener('DOMContentLoaded', () => {\n      addChessCells();\n    });\n  }\n\n  return content();\n};\n\nconst addContent = () => {\n  addChessboard();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addContent);\n\n\n//# sourceURL=webpack://my_package/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\nconst load = () => {\n  (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nload();\n\n\n//# sourceURL=webpack://my_package/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;