export default class Game {
  constructor() {
    this.turn = 'X';
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    if (this.turn == 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }
  makeMove(i) {
    //check if endOfGame > already end of game return
    if (this.endOfGame()) {
      return;
    }
    //check if board tile has value > already filled return
    if (this.board[i]) {
      return;
    }
    //add "X"or "O" to arry
    this.board[i] = this.turn;
    //check if winner> returns winning combernation
    let winningCombination = this.findWinningCombinations(); //[0,1,2]
    //if not winner next turn
    if (!winningCombination) {
      this.nextTurn();
    }
    // proceed to update board
  }

  findWinningCombinations() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] &&
        this.board[a] == this.board[b] &&
        this.board[a] == this.board[c]
      ) {
        return combination;
      }
    }
    return null;
  }

  endOfGame() {
    let winningCombination = this.findWinningCombinations();
    if (winningCombination) {
      return true;
    } else {
      return false;
    }
  }
}
