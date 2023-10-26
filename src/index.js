import AddChessboard from './gameboard.js';
import CreateGame from './gameLogic.js';

async function load() {
  window.addEventListener('DOMContentLoaded', () => {
    const gameboardContainer = AddChessboard();
    const game = CreateGame(gameboardContainer);
    game.knightMoves([1, 7], [7, 0]);
  });
}

load();
