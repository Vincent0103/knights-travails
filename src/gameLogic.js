import Chessboard, { knightModule } from './gameboard';

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
  const chessCells = chessboardContainer.querySelectorAll('.chess-cell');
  const chessboard = Chessboard();
  const knight = knightModule();

  function knightMoves(startingCell, endingCell) {
    const fromCoordinates = [Number.parseInt(startingCell.getAttribute('data-x'), 10),
      Number.parseInt(startingCell.getAttribute('data-y'), 10)];
    const toCoordinates = [Number.parseInt(endingCell.getAttribute('data-x'), 10),
      Number.parseInt(endingCell.getAttribute('data-y'), 10)];
    const knightObj = knightModule();

    const shortestPath = GetShortestPath(fromCoordinates, toCoordinates);
    knightObj.animateKnight(shortestPath);
    return shortestPath;
  }

  function treatPathText(shortestPath) {
    let instructionMessage = 'Path: ';
    shortestPath.forEach((coordinates) => {
      instructionMessage += `[${coordinates}], `;
    });
    instructionMessage = instructionMessage.slice(0, -2);
    return instructionMessage;
  }

  function getWaitTime(shortestPathArray) {
    let waitTime = 0;
    shortestPathArray.forEach(() => {
      waitTime += 900;
    });
    return waitTime;
  }

  function listenSpacebar(treatCell, waitTime) {
    setTimeout(() => {
      let spaceable = true;
      document.addEventListener('keyup', (e) => {
        if (e.key === ' ' && spaceable) {
          chessboard.changeInstructionMessage('Place your knight');
          knight.removeKnight(treatCell);
          knight.removeTargetKnightArrival(treatCell);
          spaceable = false;
          listenPlaceKnight();
        }
      }, { once: true });
    }, waitTime);
  }

  function listenPlaceFinishingSquare(startingCell) {
    let clickable = true;
    chessCells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (clickable) {
          knight.addTargetKnightArrival(cell);
          const shortestPath = knightMoves(startingCell, cell);
          const waitTime = getWaitTime(shortestPath);
          const instructionMessage = treatPathText(shortestPath);
          chessboard.changeInstructionMessage(instructionMessage);
          listenSpacebar(cell, waitTime);
          clickable = false;
        }
      }, { once: true });
    });
  }

  function listenPlaceKnight() {
    let clickable = true;
    chessCells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (clickable) {
          knight.addKnight(cell);
          chessboard.changeInstructionMessage('choose the finishing square');
          clickable = false;
          listenPlaceFinishingSquare(cell);
        }
      }, { once: true });
    });
  }

  return { knightMoves, listenPlaceKnight };
};

export default CreateGame;
