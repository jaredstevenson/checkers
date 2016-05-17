import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MessageBoard } from './MessageBoard.jsx';
import { Users } from './Users.jsx';
import { addComment, addUser} from '../actions.js';
import { generateID} from '../lib/id.js';



export class Display extends React.Component{
  constructor(props) {
    super(props)
    this.submitPost = this.submitPost.bind(this);
    this.submitUserName = this.submitUserName.bind(this);

  }

  render() {

    return (
      <div>
        <MessageBoard posts = {this.props.posts} submitPost={this.submitPost}/>
        <Users users = {this.props.users} submitUserName={this.submitUserName}/>
      </div>
    )
  }

  submitPost(value){
    this.props.store.dispatch(addComment(generateID(), value, 5));

  }

  submitUserName(name){
    var newId = generateID();
    var user = {
      id: newId,
      name: name
    }
    this.props.store.dispatch(addUser(user));
  }



}
