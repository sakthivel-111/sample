const boardSize = 3;  // 3x3 grid
let board;
let emptyTileIndex;

// DOM Elements
const boardElement = document.getElementById('puzzle-board');
const resetButton = document.getElementById('reset');

// Initialize a new board
function startGame() {
    // Create an array of numbers from 1 to 8, with an empty space (0)
    board = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    shuffleBoard();
    renderBoard();
}

// Render the board
function renderBoard() {
    boardElement.innerHTML = '';
    board.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        if (tile === 0) {
            tileElement.classList.add('empty');
        } else {
            tileElement.textContent = tile;
            tileElement.addEventListener('click', () => moveTile(index));
        }
        boardElement.appendChild(tileElement);
    });
}

// Shuffle the board randomly
function shuffleBoard() {
    for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }
    emptyTileIndex = board.indexOf(0);  // Store index of empty space
}

// Move tile into the empty space
function moveTile(index) {
    const emptyTileRow = Math.floor(emptyTileIndex / boardSize);
    const emptyTileCol = emptyTileIndex % boardSize;
    const tileRow = Math.floor(index / boardSize);
    const tileCol = index % boardSize;

    // Check if the tile is adjacent to the empty space
    if ((Math.abs(emptyTileRow - tileRow) === 1 && emptyTileCol === tileCol) ||
        (Math.abs(emptyTileCol - tileCol) === 1 && emptyTileRow === tileRow)) {
        // Swap the tile with the empty space
        board[emptyTileIndex] = board[index];
        board[index] = 0;
        emptyTileIndex = index;
        renderBoard();

        // Check if the game is won
        if (checkWin()) {
            alert("Congratulations! You've won the game!");
        }
    }
}

// Check if the board is in the winning state
function checkWin() {
    return board.every((value, index) => value === index);
}

// Reset the game
resetButton.addEventListener('click', startGame);

// Start a new game on page load
startGame();
