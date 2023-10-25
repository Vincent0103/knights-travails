import chessKnightIcon from './assets/horse_chess_piece_knight.svg';

const possibleKnightMoves = {
  upperUpperRight: [1, 2],
  upperRight: [2, 1],
  lowerRight: [2, -1],
  lowerLowerRight: [1, -2],
  lowerLowerLeft: [-1, -2],
  lowerLeft: [-2, -1],
  upperLeft: [-2, 1],
  upperUpperLeft: [-1, 2],
};

const GetShortestPath = (fromCoordinates, toCoordinates) => {
  const startingCoordinates = fromCoordinates;
  const endingCoordinates = toCoordinates;

  const node = (data, explored = false) => ({ data, explored });

  function getNeighborsCoordinates(root) {
    const neighborCells = [];
    Object.keys(possibleKnightMoves).forEach((key) => {
      const cellNeighborX = root[0] + possibleKnightMoves[key][0];
      const cellNeighborY = root[1] + possibleKnightMoves[key][1];
      const areCoordinatesInBoard = (cellNeighborX >= 0 && cellNeighborX <= 7)
      && (cellNeighborY >= 0 && cellNeighborY <= 7);

      if (areCoordinatesInBoard) neighborCells.push([cellNeighborX, cellNeighborY]);
    });
    return neighborCells;
  }

  function bfs(value, root = node(startingCoordinates), q = []) {
    const rootNode = root;
    rootNode.explored = true;
    q.push(rootNode);
    if (q.length > 0) {
      const currentNode = q.shift();
      if (currentNode.data === value) return value;
      const neighborCells = getNeighborsCoordinates(currentNode.data);
      neighborCells.forEach((cell) => {
        if (cell) return bfs(value, node(cell), q);
      });
    }
    return null;
  }

  return bfs(endingCoordinates);
};

const CreateGame = (chessboardContainer) => {
  const gameboardContainer = chessboardContainer;

  function knightMoves(fromCoordinates, toCoordinates) {
    const startingCell = document.querySelector(`.chess-cell[data-x="${fromCoordinates[0]}"][data-y="${fromCoordinates[1]}"]`);
    const endingCell = document.querySelector(`.chess-cell[data-x="${toCoordinates[0]}"][data-y="${toCoordinates[1]}"]`);
    startingCell.innerHTML = chessKnightIcon;
    endingCell.style.backgroundColor = 'rgb(106, 90, 205)';

    const shortestPath = GetShortestPath(fromCoordinates, toCoordinates);
  }

  return { knightMoves };
};

export default CreateGame;
