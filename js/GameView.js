export default class GameView {
  constructor() {
    console.log('init game view');
  }
  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      //   tile.textContent = game.board[i];

      tile.classList.remove('tileWinner');

      let tileType = game.board[i] == 'X' ? 'tileX' : 'tileO';
      tile.innerHTML = `<span class=${tileType}>${
        game.board[i] ? game.board[i] : ''
      }</span>`;

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add('tileWinner');
      }
    }
  }
  updateTurn(game) {
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
