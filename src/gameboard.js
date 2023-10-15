const addContent = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const gameboardContainer = document.querySelector('.gameboard-container');
    const blackChessCell = document.createElement('div');
    blackChessCell.classList.add('chess-cell', 'black');
    const whiteChessCell = document.createElement('chess-cell', 'white');
    whiteChessCell.classList.add('chess-cell', 'white');
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        gameboardContainer.appendChild(whiteChessCell.cloneNode(true));
        gameboardContainer.appendChild(blackChessCell.cloneNode(true));
      }

      for (let k = 0; k < 4; k += 1) {
        gameboardContainer.appendChild(blackChessCell.cloneNode(true));
        gameboardContainer.appendChild(whiteChessCell.cloneNode(true));
      }
    }
  });
};

export default addContent;
