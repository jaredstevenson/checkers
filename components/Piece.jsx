import * as React from 'react';
import * as ReactDOM from 'react-dom';

//react class displays message posts

export class Piece extends React.Component {
  render() {
    const text = (this.props.king) ? "K" : "";
    const style = {
      top: ((this.props.row-1) * 90) + 5,
      left: ((this.props.column-1) * 90) + 4,
    }
    const teamName = (this.props.type=="black") ? "piece-black" : "piece-red"
    return <div onClick={()=>{console.log("clicked!");}} style={style} className={"piece "+ teamName}>{text}</div>
  }
}
