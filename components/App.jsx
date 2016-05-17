import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MessageBoard } from './MessageBoard.jsx';
import { Users } from './Users.jsx';
import { addComment} from '../actions.js';



export class Display extends React.Component{
  constructor(props) {
    super(props)
    this.submitPost = this.submitPost.bind(this);
  }

  render() {

    return (
      <div>
        <MessageBoard posts = {this.props.posts} submitPost={this.submitPost}/>
        <Users users = {this.props.users} />
      </div>
    )
  }

  submitPost(value){
    this.props.store.dispatch(addComment(10, value, 5));

  }


}
