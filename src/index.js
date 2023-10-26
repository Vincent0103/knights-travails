import AddContent from './gameboard.js';
import CreateGame from './gameLogic.js';

async function load() {
  window.addEventListener('DOMContentLoaded', () => {
    const gameboardContainer = AddContent();
    const game = CreateGame(gameboardContainer);
    game.knightMoves([0, 7], [5, 1]);
  });
}

load();
