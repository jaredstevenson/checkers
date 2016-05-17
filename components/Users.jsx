import * as React from 'react';
import * as ReactDOM from 'react-dom';
// react class that holds the Users


export class Users extends React.Component {
  render() {
    const users = this.props.users;
    console.log("users in users", users);
    return (<div className="usersTable">
      {users.map(function (user){
        return <div key={user.id}>User Name={user.name}User Id={user.id }</div>
      })}
    </div>)
  }
}
