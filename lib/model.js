import {find, findIndex, filter} from 'lodash';

// test new functions
//
//keep working on gameplay

export function movePiece (state, row, column) {
  const originalState = state;
  const piece = find(state.pieces, (p)=> p.id== state.selectedPieceId);

  if  (isLegalMove(state, row, column)){

    if(isJump(state.pieces, piece, row, column)){
      state.pieces = deletePiece(state.pieces, state.pieces[findIndex(state.pieces, {'row':((row+ piece.row)/2), 'column': ((column + piece.column)/2)})].id);
      state.lastMoveWasJump = true;
    }else {
      state.lastMoveWasJump = false;
    }
    piece.row = row;
    piece.column = column;
    if (row === 8 || row === 1){
      piece.king = true;
    }
    state.pieces[state.pieces[findIndex(state.pieces,['id', piece.id])]] = piece;
    if (state.selectedPieceId !== state.lastPieceId){
      if (state.turn === "red"){
        state.turn = "black";
      }else {
        state.turn = 'red';
      }
    }
    if (isWon(state)){
      state.isWon = true;
    }
    state.lastPieceId = state.selectedPieceId;
    return state;
  }

  return originalState;
}

export function isLegalMove (state, row, column) {
  const piece = find(state.pieces, ["id", state.selectedPieceId]);
  const pieces = state.pieces;
  if (!isCorrectTurn(state, row, column)) return false;

  if (!isEven(row + column)) return false;
  if (isPieceThere(pieces, row, column)) return false;
  if (!isNextDiagnol(pieces[findIndex(pieces,['id', piece.id])], row, column)) {
    if (!isJump(pieces, piece, row, column)){
      return false;
    }

  }
  if (!isCorrectDirection(piece, row, column)) {
    return false;
  }
  return true;
}

function isWon(state){
  var isBlack = false;
  var isRed = false;
  find(state.pieces, function(piece){ if(piece.type === "black") isBlack = true;})
  find(state.pieces, function(piece){ if(piece.type === "red") isRed = true;})
  if (isBlack == true && isRed == true){
    return false;
  }
  return true;

}

function isCorrectTurn (state, row, column) {
  var correctTurn = true;
  const piece = find(state.pieces, (p)=> p.id== state.selectedPieceId);
  if (state.turn !== piece.type) correctTurn = false;
  if (state.selectedPieceId == state.lastPieceId && isJump(state.pieces, piece , row, column) && state.lastMoveWasJump){
    correctTurn = true;
  }
  return correctTurn;
}

export function isEven(n) {
  return ((n % 2) === 0);
}

export function isPieceThere (pieces, row, column) {
  return !!find(pieces, (piece) => {
    if (row == piece.row && column == piece.column) return true;
  })

}

function pieceColor (pieces, row, column) {
  var piece = find(pieces, (piece) => {
    if (row == piece.row && column == piece.column) return true;
  })
  return piece.type;
}

export function isPieceInBetween (pieces, piece, row, column) {

  var newRow = ((row+ piece.row)/2);
  var newColumn = ((column + piece.column)/2);


    return isPieceThere(pieces, newRow, newColumn);


}

export function isNextDiagnol (piece, row, column) {
  if (piece.row + 1 == row && (piece.column +1 == column || piece.column - 1 ==column)) return true
  if (piece.row - 1 == row && (piece.column +1 == column || piece.column - 1 ==column)) return true
  return false;
}

export function isTwoDiagnol (piece, row, column) {
  if (piece.row + 2 == row && (piece.column + 2 == column || piece.column - 2 ==column)) return true
  if (piece.row - 2 == row && (piece.column + 2 == column || piece.column - 2 ==column)) return true
  return false;
}

export function isJump (pieces, piece, row, column) {
  if (isTwoDiagnol(piece, row, column)) {
    if (!isPieceThere(pieces, row, column)) {
      if (isPieceInBetween(pieces, piece, row, column)){
        if (piece.type != pieceColor(pieces, (piece.row + row) / 2, (piece.column + column) /2)) {
          return true;
        }
      }
    }
  }
}


// doesn't work quite yet because it returns the array. will only work if you assign the array of pieces when you call it.
export function deletePiece (pieces, pieceId) {
  return filter(pieces, function (piece){ return (piece.id !== pieceId)});
}

export function isCorrectDirection (piece, row, column) {
  if (piece.king) return true
  if (piece.row < row) {
    if (piece.type === 'red'){
      return true
    }else return false
  }else {
    if (piece.type === 'black'){
      return true
    }else return false
  }
}
