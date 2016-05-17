import * as React from 'react';
import * as ReactDOM from 'react-dom';

//react class displays message posts

export class Post extends React.Component {
  render() {
    const text = this.props.text;
    return <div className="post">{text} {this.props.userId}</div>
  }
}
