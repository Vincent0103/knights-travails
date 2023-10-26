import Chessboard from './gameboard.js';
import CreateGame from './gameLogic.js';

async function load() {
  window.addEventListener('DOMContentLoaded', () => {
    const chessboard = Chessboard();
    const gameboardContainer = chessboard.addChessCells();
    const game = CreateGame(gameboardContainer);
    game.listenPlaceKnight();
    // game.knightMoves([1, 7], [7, 0]);
  });
}

load();
