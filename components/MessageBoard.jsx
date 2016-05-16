import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Post } from './Post.jsx';

//react class that holds the Posts and displays them.

export class MessageBoard extends React.Component {
  render() {
    const posts = this.props.posts;
    return (
      <div className="MessageBoard">
        {posts.map(function (post){
      ////I was working on making this work and fit in with everything else
      //I don't have the react part working yet, I am just filling it out without testing it.
          return <Post userId = {post.id} text = {post.post} postId = {post.postId} />
        })}
      </div>
    )


  }
}
