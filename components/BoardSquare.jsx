import * as React from 'react';
import * as ReactDOM from 'react-dom';
//simport {addComment} from '../actions.js';



export class BoardSquare extends React.Component{

  render() {

    const style = {
      top: ((this.props.row-1) * 90),
      left: ((this.props.column-1) * 90),
    }
    return (
      <div
        onClick={()=>this.props.boardSquareClickHandler(this.props.row, this.props.column)}
        style={style}
        className="board-squares">

      </div>
    )
  }

}
