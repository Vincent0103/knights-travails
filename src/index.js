// eslint-disable-next-line import/extensions
import Chessboard from './gameboard.js';
// eslint-disable-next-line import/extensions
import CreateGame from './gameLogic.js';

async function load() {
  window.addEventListener('DOMContentLoaded', () => {
    const chessboard = Chessboard();
    const gameboardContainer = chessboard.addChessCells();
    const game = CreateGame(gameboardContainer);
    game.start();
  });
}

load();
