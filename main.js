const tiles = document.querySelectorAll('.tile');


const gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];


let currentPlayer = 'X';


tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    
    const rowIndex = tile.parentNode.rowIndex;
    const cellIndex = tile.cellIndex;

    
    if (gameBoard[rowIndex][cellIndex] !== '') {
      return;
    }

    
    gameBoard[rowIndex][cellIndex] = currentPlayer;
    tile.textContent = currentPlayer;

    
    if (checkWinner()) {
      alert(`Player ${currentPlayer} wins!`);
      actualizarPuntaje(currentPlayer)
      resetGame();
      return;
    }

    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  });
});


function checkWinner() {
    
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
      return true;
    }
  }

  
  for (let i = 0; i < 3; i++) {
    if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
      return true;
    }
  }

  
  if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
    return true;
  }

  if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
    return true;
  }

  return false;
}

function actualizarPuntaje(jugadorGanador) {
    
  const marcador1 = document.querySelector('.score1');
  const marcador2 = document.querySelector('.score2');

  
  let puntaje1 = parseInt(marcador1.textContent);
  let puntaje2 = parseInt(marcador2.textContent);

  
  if (jugadorGanador === 'X') {
    puntaje1++;
  } else if (jugadorGanador === 'O') {
    puntaje2++;
  }

  
  marcador1.textContent = puntaje1;
  marcador2.textContent = puntaje2;
}

const button = document.getElementById('reset')
button.addEventListener('click',() =>{
  resetGame()
})


function resetGame() {
  gameBoard.forEach(row => row.fill(''));
  tiles.forEach(tile => tile.textContent = '');
  currentPlayer = 'X';
}
