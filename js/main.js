import Game from './Game.js';
import GameView from './GameView.js';

let game = new Game();
let gameview = new GameView();

document.getElementById('player').volume -= 0.5;

document.querySelector('.restart').addEventListener('click', () => {
  newGame();
});

let tiles = document.querySelectorAll('.board-tile');
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    onTileClick(tile.dataset.index); //take index no to onTileClick
  });
});

function onTileClick(i) {
  //i is the clicked index on the board
  game.makeMove(i);
  //game hold info on array + who should play next
  gameview.updateBoard(game);
}
function newGame() {
  game = new Game();
  gameview.updateBoard(game);
}
gameview.updateBoard(game);
