import Game from './Game.js';
import GameView from './GameView.js';

let game = new Game();
let gameview = new GameView();

document.querySelector('.restart').addEventListener('click', () => {
  newGame();
});

let tiles = document.querySelectorAll('.board-tile');
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  game.makeMove(i);
  gameview.updateBoard(game);
}
function newGame() {
  game = new Game();
  gameview.updateBoard(game);
}
gameview.updateBoard(game);
