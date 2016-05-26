import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Board } from './Board.jsx';
import { Users } from './Users.jsx';
import {selectPiece, movePieceIfLegal} from '../actions.js';




export class Display extends React.Component{
  constructor(props) {
    super(props)
    this.pieceClickHandler = this.pieceClickHandler.bind(this);
    this.boardSquareClickHandler = this.boardSquareClickHandler.bind(this);


  }

  render() {
    return (
      <div>
        <Board
          pieces = {this.props.state.pieces}
          pieceClickHandler = {this.pieceClickHandler}
          boardSquareClickHandler = {this.boardSquareClickHandler}
        />
        <div>{this.props.state.selectedPieceId}</div>

      </div>
    )
  }

  pieceClickHandler(id){
    console.log("pieceClickHandler id", id);
    this.props.dispatch(selectPiece(id));
  }

  boardSquareClickHandler(row, column){
    console.log("boardSquareClickHandler", row, column);
    this.props.dispatch(movePieceIfLegal(this.props.state.pieces, this.props.state.selectedPieceId ,row, column))
  }

}
