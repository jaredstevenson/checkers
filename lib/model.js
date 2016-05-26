import {find, findIndex, filter} from 'lodash';

// test new functions
//
//keep working on gameplay

export function movePiece (pieces, id, row, column) {
  const originalPieces = pieces;
  console.log("id", id );
  const piece = find(pieces, (p)=> p.id== id)
  if  (isLegalMove(pieces, piece, row, column)){
    if(isJump(pieces, piece, row, column)){
      pieces = deletePiece(pieces, pieces[findIndex(pieces, {'row':((row+ piece.row)/2), 'column': ((column + piece.column)/2)})].id);
    }
    piece.row = row;
    piece.column = column;
    pieces[pieces[findIndex(pieces,['id', piece.id])]] = piece;
    return pieces;
  }
  return originalPieces;
}

export function isLegalMove (pieces, piece, row, column) {
  if (!isEven(row + column)) return false;
  if (isPieceThere(pieces, row, column)) return false;
  if (!isNextDiagnol(pieces[findIndex(pieces,['id', piece.id])], row, column)) {
    if (!isJump(pieces, piece, row, column)){
      return false;
    }

  }
  return true;
}



export function isEven(n) {
  return ((n % 2) === 0);
}

export function isPieceThere (pieces, row, column) {
  return !!find(pieces, (piece) => {
    if (row == piece.row && column == piece.column) return true;
  })

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
        return true;
      }
    }
  }
}

// doesn't work quite yet because it returns the array. will only work if you assign the array of pieces when you call it.
export function deletePiece (pieces, pieceId) {
  return filter(pieces, function (piece){ return (piece.id !== pieceId)});
}
