const addChessboard = () => {
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
    const startingCellColor = firstCellColor.cloneNode(true);
    startingCellColor.appendChild(lineNumberCell);
    if (isLastLine) addColumnNumber(startingCellColor, lineNumberCell.cloneNode(true), 0);
    gameboardContainer.appendChild(startingCellColor.cloneNode(true));
    if (isLastLine) addColumnNumber(lastCellColor, lineNumberCell, 1);
    gameboardContainer.appendChild(lastCellColor.cloneNode(true));

    for (let i = 0; i < 3; i += 1) {
      if (isLastLine) addColumnNumber(firstCellColor, lineNumberCell, i * 2 + 2);
      gameboardContainer.appendChild(firstCellColor.cloneNode(true));
      if (isLastLine) addColumnNumber(lastCellColor, lineNumberCell, i * 2 + 3);
      gameboardContainer.appendChild(lastCellColor.cloneNode(true));
    }
  }

  function addChessCells() {
    const gameboardContainer = document.querySelector('.gameboard-container');
    const blackChessCell = document.createElement('div');
    blackChessCell.classList.add('chess-cell', 'black');
    const whiteChessCell = document.createElement('chess-cell', 'white');
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
    });
  }

  return content();
};

const addContent = () => {
  addChessboard();
};

export default addContent;
