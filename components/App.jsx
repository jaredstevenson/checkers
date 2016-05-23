import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Board } from './Board.jsx';
import { Users } from './Users.jsx';




export class Display extends React.Component{
  // constructor(props) {
  //   super(props)
  //
  //
  // }

  render() {

    return (
      <div>
        <Board pieces = {this.props.pieces} />

      </div>
    )
  }

}
