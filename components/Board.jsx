import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Piece} from './Piece.jsx';
import {isEven} from '../lib/model.js';
import {BoardSquare} from './BoardSquare.jsx';

export var boardSquares = [];

function createBoardSquares() {
  for(var i=1; i < 9 ; i++){
    for(var j=1; j < 9 ; j++){
      if(isEven(i+j)){
        boardSquares.push({
          row: i,
          column: j
        })
      }
    }
  }
  console.log("boardSquares", boardSquares);
}

createBoardSquares();

//react class that holds the  piecess and displays them.

export class Board extends React.Component {
  render() {

    const pieces = this.props.pieces;
    return (
      <div className="board">
        { boardSquares.map((boardSquares)=>{
          return (<BoardSquare
            row={boardSquares.row}
            column={boardSquares.column}
            boardSquareClickHandler={this.props.boardSquareClickHandler}
          />)
        })}

        { pieces.map((pieces)=>{

          return (<Piece
            key={pieces.id}
            id = { pieces.id}
            row = { pieces.row}
            column = { pieces.column}
            type={pieces.type}
            king={pieces.king}
            pieceClickHandler={this.props.pieceClickHandler}
          />)
        })}
      </div>
    )


  }
}
