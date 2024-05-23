const board = document.getElementById('board');
const status = document.getElementById('status');
let currentPlayer = '';
let gameStatus = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
]


const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');

function startGame() {
  const player1Name = player1Input.value || 'Jogador 1';
  const player2Name = player2Input.value || 'Jogador 2';

  const symbols = ['X', 'O'];

  // Randomize who starts
  currentPlayer = symbols[Math.floor(Math.random() * symbols.length)];

  status.textContent = `${player1Name} (X) vs ${player2Name} (O). É a vez do ${currentPlayer}`;

  renderBoard();
}

function handleCellClick(index) {
  if (gameStatus[index] !== '' || checkWinner()) return;

  gameStatus[index] = currentPlayer;
  renderBoard();

  if (checkWinner()) {
    status.textContent = `O jogador ${currentPlayer} venceu!`;
    return;
  }

  if (!gameStatus.includes('')) {
    status.textContent = 'Empate!';
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `É a vez do jogador ${currentPlayer}`;
}

function renderBoard() {
  board.innerHTML = '';
  gameStatus.forEach((cell, index) => {
    const cellDiv = document.createElement('div');
    cellDiv.textContent = cell;
    cellDiv.addEventListener('click', () => handleCellClick(index));
    board.appendChild(cellDiv);
  });
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6] // diagonais
  ];

  return winningConditions.some(condition => {
    const [a, b, c] = condition;
    return gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c];
  });
}

function resetGame() {
  currentPlayer = '';
  gameStatus = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
  ]

  renderBoard();
}

player1Input.value = '';
player2Input.value = '';

status.textContent = '';
