import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MessageBoard } from './MessageBoard.jsx';
import { Users } from './Users.jsx';


export class Display extends React.Component{
  render() {
    return <div><MessageBoard posts = {this.props.posts}/><Users/></div>
  }
}
