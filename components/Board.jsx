import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Piece} from './Piece.jsx';


//react class that holds the  piecess and displays them.

export class Board extends React.Component {
  render() {
    const pieces = this.props.pieces;
    return (
      <div className="board">

        { pieces.map(function ( pieces){

          return <Piece key={pieces.id} id = { pieces.id} row = { pieces.row}  column = { pieces.column} type={pieces.type} king={pieces.king} />
        })}
      </div>
    )


  }
}
