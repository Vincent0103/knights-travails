import chessKnightIcon from './assets/horse_chess_piece_knight.svg';

const animateChessboard = (chessboard) => {
  const chessCells = chessboard.querySelectorAll('.chess-cell');
  chessCells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
      cell.style.transform = 'scale(1.05)';
    });

    cell.addEventListener('mouseleave', () => {
      cell.style.transform = 'scale(1)';
    });
  });
};

const AddChessboard = () => {
  let gameboardContainer;

  function addColumnNumber(cell, numberCell, number) {
    numberCell.classList.remove('line');
    numberCell.classList.add('column');
    const currentNumberCell = numberCell;
    currentNumberCell.textContent = number;
    cell.appendChild(currentNumberCell);
  }

  function addLineCells(
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
    gameboardContainer = document.querySelector('.gameboard-container');

    const blackChessCell = document.createElement('div');
    blackChessCell.classList.add('chess-cell', 'black');

    const whiteChessCell = document.createElement('div', 'white');
    whiteChessCell.classList.add('chess-cell', 'white');

    for (let i = 4; i > 0; i -= 1) {
      const lineNumberCell = document.createElement('div');
      lineNumberCell.classList.add('board-number', 'line');
      lineNumberCell.textContent = i * 2 - 1;
      addLineCells(whiteChessCell, blackChessCell, lineNumberCell);
      lineNumberCell.textContent = i * 2 - 2;
      if (i === 1) {
        addLineCells(blackChessCell, whiteChessCell, lineNumberCell, true);
      } else {
        addLineCells(blackChessCell, whiteChessCell, lineNumberCell);
      }
    }

    animateChessboard(gameboardContainer);
    return gameboardContainer;
  }

  return addChessCells();
};

const knight = () => {
  function addKnight(startingCell, endingCell) {
    startingCell.innerHTML += chessKnightIcon;
    endingCell.style.background = 'radial-gradient(circle, rgba(106, 90, 205, 1) 0%, rgba(106, 90, 205, .8) 100%)';
  }

  function animateKnight(path) {
    // makes it so the function executes each seconds
    function delayExecution(i) {
      if (path[i + 1] !== undefined) {
        const currentCell = document.querySelector(`.chess-cell[data-x="${path[i][0]}"][data-y="${path[i][1]}"]`);
        const knightIcon = currentCell.querySelector('.knight-icon');
        knightIcon.style.animation = '.1s fadeOut';
        setTimeout(() => {
          currentCell.removeChild(knightIcon);
        }, 90);
        const nextCell = document.querySelector(`.chess-cell[data-x="${path[i + 1][0]}"][data-y="${path[i + 1][1]}"]`);
        nextCell.innerHTML += chessKnightIcon;
        const newKnightIcon = nextCell.querySelector('.knight-icon');
        newKnightIcon.style.animation = '.1s fadeIn';
      }

      if (i < path.length - 1) {
        setTimeout(() => delayExecution(i + 1), 800);
      }
    }

    setTimeout(() => delayExecution(0), 800);
  }

  return { addKnight, animateKnight };
};

export default AddChessboard;
export const knightModule = knight;
