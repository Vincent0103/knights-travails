import chessKnightIcon from './assets/horse_chess_piece_knight.svg';

const addChessboard = () => {
  function placeKnightAt(fromCoordinates, toCoordinates) {
    const startingCell = document.querySelector(`.chess-cell[data-x="${fromCoordinates[0]}"][data-y="${fromCoordinates[1]}"]`);
    const endingCell = document.querySelector(`.chess-cell[data-x="${toCoordinates[0]}"][data-y="${toCoordinates[1]}"]`);
    console.log(startingCell, endingCell);
  }

  function addColumnNumber(cell, numberCell, number) {
    numberCell.classList.remove('line');
    numberCell.classList.add('column');
    const currentNumberCell = numberCell;
    currentNumberCell.textContent = number;
    cell.appendChild(currentNumberCell);
  }

  function addLineCells(
    gameboardContainer,
    firstCellColor,
    lastCellColor,
    lineNumberCell,
    isLastLine = false,
  ) {
    // put the line numbers of the chessboard from the y-axis to the left
    // and the column numbers of the chessboard from the x-axis to the bottom
    const startingCellColor = firstCellColor.cloneNode(true);
    startingCellColor.appendChild(lineNumberCell);

    startingCellColor.setAttribute('data-y', lineNumberCell.textContent);
    firstCellColor.setAttribute('data-y', lineNumberCell.textContent);
    startingCellColor.setAttribute('data-x', 0);

    if (isLastLine) addColumnNumber(startingCellColor, lineNumberCell.cloneNode(true), 0);
    gameboardContainer.appendChild(startingCellColor.cloneNode(true));

    lastCellColor.setAttribute('data-y', lineNumberCell.textContent);
    lastCellColor.setAttribute('data-x', 1);

    if (isLastLine) addColumnNumber(lastCellColor, lineNumberCell, 1);
    gameboardContainer.appendChild(lastCellColor.cloneNode(true));

    for (let i = 0; i < 3; i += 1) {
      if (isLastLine) addColumnNumber(firstCellColor, lineNumberCell, i * 2 + 2);

      firstCellColor.setAttribute('data-x', i * 2 + 2);
      gameboardContainer.appendChild(firstCellColor.cloneNode(true));

      if (isLastLine) addColumnNumber(lastCellColor, lineNumberCell, i * 2 + 3);

      lastCellColor.setAttribute('data-x', i * 2 + 3);
      gameboardContainer.appendChild(lastCellColor.cloneNode(true));
    }
  }

  function addChessCells() {
    const gameboardContainer = document.querySelector('.gameboard-container');

    const blackChessCell = document.createElement('div');
    blackChessCell.classList.add('chess-cell', 'black');

    const whiteChessCell = document.createElement('div', 'white');
    whiteChessCell.classList.add('chess-cell', 'white');

    for (let i = 4; i > 0; i -= 1) {
      const lineNumberCell = document.createElement('div');
      lineNumberCell.classList.add('board-number', 'line');
      lineNumberCell.textContent = i * 2 - 1;
      addLineCells(gameboardContainer, whiteChessCell, blackChessCell, lineNumberCell);
      lineNumberCell.textContent = i * 2 - 2;
      if (i === 1) {
        addLineCells(gameboardContainer, blackChessCell, whiteChessCell, lineNumberCell, true);
      } else {
        addLineCells(gameboardContainer, blackChessCell, whiteChessCell, lineNumberCell);
      }
    }
  }

  function content() {
    window.addEventListener('DOMContentLoaded', () => {
      addChessCells();
      placeKnightAt([4, 7], [2, 5]);
    });
  }

  return content();
};

const addContent = () => {
  addChessboard();
};

export default addContent;
