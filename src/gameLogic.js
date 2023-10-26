import { knightModule } from './gameboard';

const GetShortestPath = (fromCoordinates, toCoordinates) => {
  const startingCoordinates = fromCoordinates;
  const endingCoordinates = toCoordinates;
  const possibleKnightMoves = [
    [1, 2], [2, 1], [2, -1], [1, -2],
    [-1, -2], [-2, -1], [-2, 1], [-1, 2],
  ];

  const node = (data, parent = null, next = []) => ({ data, next, parent });

  function getNeighborsCoordinates(root, array) {
    const neighborsCoordinates = [];
    possibleKnightMoves.forEach((move) => {
      const neighborX = root[0] + move[0];
      const neighborY = root[1] + move[1];
      const areCoordinatesInBoard = (neighborX >= 0 && neighborX <= 7)
      && (neighborY >= 0 && neighborY <= 7);

      if (array.every((item) => item[0] !== neighborX || item[1] !== neighborY)
      && areCoordinatesInBoard) {
        neighborsCoordinates.push([neighborX, neighborY]);
      }
    });
    return neighborsCoordinates;
  }

  function getPath(targetNode) {
    if (!targetNode.parent) return [targetNode.data];
    return [targetNode.data].concat(getPath(targetNode.parent));
  }

  function bfs(
    target,
    root = node(startingCoordinates),
    q = [root],
    visited = [],
  ) {
    const rootNode = root;
    // edge case if starting and ending coordinates are the same
    if (rootNode.data[0] === target[0] && rootNode.data[1] === target[1]) return target;

    if (q.length > 0) {
      const currentNode = q.shift();
      visited.push(currentNode.data);

      const neighborCoordinates = getNeighborsCoordinates(currentNode.data, visited);

      for (let i = 0; i < neighborCoordinates.length; i += 1) {
        // check if one of the neighborCoordinates match with the endingCoordinates (target)
        if (neighborCoordinates[i].every((coordinate, index) => coordinate === target[index])) {
          const targetNode = node(target, rootNode);
          rootNode.next.push(targetNode);
          return getPath(targetNode).reverse();
        }
        const coordinatesNode = node(neighborCoordinates[i], rootNode);
        rootNode.next.push(coordinatesNode);
        q.push(coordinatesNode);
      }
      return bfs(target, q[0], q, visited);
    }
    return null;
  }

  return bfs(endingCoordinates);
};

const CreateGame = (chessboardContainer) => {
  function knightMoves(fromCoordinates, toCoordinates) {
    const startingCell = document.querySelector(`.chess-cell[data-x="${fromCoordinates[0]}"][data-y="${fromCoordinates[1]}"]`);
    const endingCell = document.querySelector(`.chess-cell[data-x="${toCoordinates[0]}"][data-y="${toCoordinates[1]}"]`);
    const knightObj = knightModule();
    knightObj.addKnight(startingCell, endingCell);

    const shortestPath = GetShortestPath(fromCoordinates, toCoordinates);
    knightObj.animateKnight(shortestPath);
    console.log(shortestPath);
  }

  return { knightMoves };
};

export default CreateGame;
