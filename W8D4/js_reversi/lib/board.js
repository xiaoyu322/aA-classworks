let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  const grid = new Array(8);
  for (let i=0; i<grid.length; i++){
    grid[i] = new Array(8);
  }
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8){
    return true;
  } else{
    return false;
  }
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos)) {
    return this.grid[pos[0]][pos[1]];
  } else {
    throw new Error ('Not valid pos!');
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let myPiece = this.getPiece(pos);
  if (myPiece && myPiece.color === color){
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let myPiece = this.getPiece(pos);
  if (myPiece){
    return true;
  } else {
    return false;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip = []){
  // until next_piece == color // W, B, B, B, undef, => []
  let valid = this.isValidPos([pos[0] + dir[0], pos[1] + dir[1]]);
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
  if (valid) {
    nextPiece = this.getPiece(nextPos);
    if (this.isOccupied(nextPos)){
      if (nextPiece.color === color) {
        return piecesToFlip;
      } else {
        piecesToFlip.push(nextPos);
        return this._positionsToFlip(nextPos, color, dir, piecesToFlip);
      }
    } else {
      return [];
    }
  } else {
    return [];
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  for (let i = 0; i < Board.DIRS.length; i++) {
    if (this._positionsToFlip(pos, color, Board.DIRS[i]).length > 0) {
      return true;
    }
  }
  return false;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (this.validMove(pos, color)) {
    this.grid[pos[0]][pos[1]]  = new Piece(color);
    for (let i = 0; i < Board.DIRS.length; i++) {
      let piecesToFlip = this._positionsToFlip(pos, color, Board.DIRS[i]);
      if (piecesToFlip.length > 0) {
        for (let i = 0; i < piecesToFlip.length; i++){
          this.getPiece(piecesToFlip[i]).flip();
        }
      }
    }
  } else {
    throw new Error('Invalid Move');
  }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let validPos = [];
  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid[i].length; j++) {
      if (this.validMove([i, j], color)) {
        validPos.push([i, j]);
      }
    }
  }
  return validPos;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  if (this.validMoves(color).length > 0) {
    return true;
  } else {
    return false;
  }
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if (this.hasMove('white') || this.hasMove('black')){
    return false;
  } else {
    return true;
  }
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  console.log([0,1,2,3,4,5,6,7].join(" "));
  for (let i = 0; i < this.grid.length; i++) {
    let row = [];
    for (let j = 0; j < this.grid[i].length; j++){
      if (this.isOccupied([i, j])){
        row.push(this.grid[i][j].toString());
      } else {
        row.push('_');
      }
    }
    console.log(row.join(' '));
  }
};



module.exports = Board;
