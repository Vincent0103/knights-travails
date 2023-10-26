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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst AddChessboard = () => {\n  let gameboardContainer;\n\n  function addColumnNumber(cell, numberCell, number) {\n    numberCell.classList.remove('line');\n    numberCell.classList.add('column');\n    const currentNumberCell = numberCell;\n    currentNumberCell.textContent = number;\n    cell.appendChild(currentNumberCell);\n  }\n\n  function addLineCells(\n    firstCellColor,\n    lastCellColor,\n    lineNumberCell,\n    isLastLine = false,\n  ) {\n    // put the line numbers of the chessboard from the y-axis to the left\n    // and the column numbers of the chessboard from the x-axis to the bottom\n    const startingCellColor = firstCellColor.cloneNode(true);\n    startingCellColor.appendChild(lineNumberCell);\n\n    startingCellColor.setAttribute('data-y', lineNumberCell.textContent);\n    firstCellColor.setAttribute('data-y', lineNumberCell.textContent);\n    startingCellColor.setAttribute('data-x', 0);\n\n    if (isLastLine) addColumnNumber(startingCellColor, lineNumberCell.cloneNode(true), 0);\n    gameboardContainer.appendChild(startingCellColor.cloneNode(true));\n\n    lastCellColor.setAttribute('data-y', lineNumberCell.textContent);\n    lastCellColor.setAttribute('data-x', 1);\n\n    if (isLastLine) addColumnNumber(lastCellColor, lineNumberCell, 1);\n    gameboardContainer.appendChild(lastCellColor.cloneNode(true));\n\n    for (let i = 0; i < 3; i += 1) {\n      if (isLastLine) addColumnNumber(firstCellColor, lineNumberCell, i * 2 + 2);\n\n      firstCellColor.setAttribute('data-x', i * 2 + 2);\n      gameboardContainer.appendChild(firstCellColor.cloneNode(true));\n\n      if (isLastLine) addColumnNumber(lastCellColor, lineNumberCell, i * 2 + 3);\n\n      lastCellColor.setAttribute('data-x', i * 2 + 3);\n      gameboardContainer.appendChild(lastCellColor.cloneNode(true));\n    }\n  }\n\n  function addChessCells() {\n    gameboardContainer = document.querySelector('.gameboard-container');\n\n    const blackChessCell = document.createElement('div');\n    blackChessCell.classList.add('chess-cell', 'black');\n\n    const whiteChessCell = document.createElement('div', 'white');\n    whiteChessCell.classList.add('chess-cell', 'white');\n\n    for (let i = 4; i > 0; i -= 1) {\n      const lineNumberCell = document.createElement('div');\n      lineNumberCell.classList.add('board-number', 'line');\n      lineNumberCell.textContent = i * 2 - 1;\n      addLineCells(whiteChessCell, blackChessCell, lineNumberCell);\n      lineNumberCell.textContent = i * 2 - 2;\n      if (i === 1) {\n        addLineCells(blackChessCell, whiteChessCell, lineNumberCell, true);\n      } else {\n        addLineCells(blackChessCell, whiteChessCell, lineNumberCell);\n      }\n    }\n\n    return gameboardContainer;\n  }\n\n  return addChessCells();\n};\n\nconst AddContent = () => AddChessboard();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddContent);\n\n\n//# sourceURL=webpack://my_package/./src/gameboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/gameboard.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;