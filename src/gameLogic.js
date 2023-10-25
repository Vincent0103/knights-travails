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
    const neighborsCoordinates = [];
    Object.keys(possibleKnightMoves).forEach((key) => {
      const neighborX = root[0] + possibleKnightMoves[key][0];
      const neighborY = root[1] + possibleKnightMoves[key][1];
      const areCoordinatesInBoard = (neighborX >= 0 && neighborX <= 7)
      && (neighborY >= 0 && neighborY <= 7);

      if (areCoordinatesInBoard) neighborsCoordinates.push([neighborX, neighborY]);
    });
    return neighborsCoordinates;
  }

  function bfs(value, root = node(startingCoordinates), q = [root]) {
    const rootNode = root;
    rootNode.explored = true;
    if (q.length > 0) {
      const currentNode = q.shift();
      if (currentNode.data === value) return value;
      const neighborCoordinates = getNeighborsCoordinates(currentNode.data);

      // eslint-disable-next-line no-restricted-syntax
      for (const coordinates of neighborCoordinates) {
        if (coordinates.every((coordinate, index) => coordinate === value[index])) {
          return [rootNode.data, value];
        }
        q.push(node(coordinates));
      }
    }
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
    console.log(shortestPath);
  }

  return { knightMoves };
};

export default CreateGame;
