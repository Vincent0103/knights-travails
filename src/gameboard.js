const addChessboard = () => {
  function addColumnNumber(gameboardContainer, firstCellColor, lastCellColor, numberCell, number) {
    const currentNumberCell = numberCell;
    gameboardContainer.appendChild(firstCellColor.cloneNode(true));
    currentNumberCell.textContent = number * 2 + 1;
    lastCellColor.appendChild(numberCell);
    gameboardContainer.appendChild(lastCellColor.cloneNode(true));
  }

  function addLineCells(
    gameboardContainer,
    firstCellColor,
    lastCellColor,
    lineNumberCell,
    isLastLineOfBoard = false,
  ) {
    if (!isLastLineOfBoard) {
      // put the line numbers of the chessboard from the y-axis to the left
      const startingCellColor = firstCellColor.cloneNode(true);
      startingCellColor.appendChild(lineNumberCell);
      gameboardContainer.appendChild(startingCellColor.cloneNode(true));
      gameboardContainer.appendChild(lastCellColor.cloneNode(true));

      for (let i = 0; i < 3; i += 1) {
        gameboardContainer.appendChild(firstCellColor.cloneNode(true));
        gameboardContainer.appendChild(lastCellColor.cloneNode(true));
      }
    } else {
      for (let i = 0; i < 4; i += 1) {
        const columnNumberCell = lineNumberCell;
        columnNumberCell.textContent = i * 2;
        if (i === 0) {
          const startingFirstCellColor = firstCellColor.cloneNode(true);
          startingFirstCellColor.appendChild(lineNumberCell);

          columnNumberCell.classList.remove('line');
          columnNumberCell.classList.add('column');

          const firstColumnNumberCell = columnNumberCell.cloneNode(true);
          startingFirstCellColor.appendChild(firstColumnNumberCell);
          addColumnNumber(
            gameboardContainer,
            startingFirstCellColor,
            lastCellColor,
            columnNumberCell,
            i,
          );
        } else {
          firstCellColor.appendChild(columnNumberCell);
          addColumnNumber(gameboardContainer, firstCellColor, lastCellColor, columnNumberCell, i);
        }
      }
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
