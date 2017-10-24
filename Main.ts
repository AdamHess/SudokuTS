import Board from "./Board";

var board =  [
    [ 0, 0, 1, 3, 0, 8, 0, 0, 9],
    [ 0, 0, 0, 6, 0, 5, 0, 0, 0],
    [ 0, 0, 9, 7, 0, 0, 3, 4, 0],
    [ 4, 0, 5, 0, 0, 0, 0, 3, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 2, 9, 0, 0, 0, 0, 0, 0, 7],
    [ 0, 7, 6, 0, 0, 3, 1, 0, 0],
    [ 0, 0, 0, 4, 0, 1, 0, 0, 0],
    [ 9, 0, 0, 8, 0, 7, 2, 0, 0]
];

var test = new Board(board);
test.displayBoard();
test.solveEasy();
test.displayBoard();