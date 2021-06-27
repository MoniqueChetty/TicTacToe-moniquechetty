export default class GameView {
  constructor() {
    console.log('init game view');
  }
  updateBoard(game) {
    //text colour change on turn
    this.updateTurn(game);
    //get winningCombination
    const winningCombination = game.findWinningCombinations();
    const winnerX = document.getElementById('winX');
    const winnerO = document.getElementById('winO');

    winnerX.style.visibility = 'hidden';
    winnerO.style.visibility = 'hidden';

    //loops through array
    for (let i = 0; i < game.board.length; i++) {
      //at tile 1
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);

      tile.classList.remove('tileWinner');
      //checks value in array
      let tileType = game.board[i] == 'X' ? 'tileX' : 'tileO';
      //adds span of x or o  with class to tile 1 accourding to array
      tile.innerHTML = `<span class=${tileType}>${
        game.board[i] ? game.board[i] : ''
      }</span>`;

      //adds class to tile if part of winning combernation
      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add('tileWinner');
        if (tileType == 'tileX') {
          winnerX.style.visibility = 'visible';
        } else {
          winnerO.style.visibility = 'visible';
        }
      }
    }
  }
  updateTurn(game) {
    //highlight whos turn it is
    let playerX = document.querySelector('.playerX');
    let playerO = document.querySelector('.playerO');
    playerO.classList.remove('active');
    playerX.classList.remove('active');

    if (game.turn == 'X') {
      playerX.classList.add('active');
    } else {
      playerO.classList.add('active');
    }
  }
}
