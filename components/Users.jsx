import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InputField } from './InputField.jsx';

// react class that holds the Users


export class Users extends React.Component {
  render() {
    const users = this.props.users;
    return (<div className="usersTable">
      <InputField onSubmit={this.props.submitUserName}/>
      {users.map(function (user){
        return <div key={user.id}>User Name={user.name} User Id={user.id }</div>
      })}
    </div>)
  }
}
