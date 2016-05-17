import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {addComment} from '../actions.js';



export class InputField extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      inputValue: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  render() {

    return (
      <div>
        <input ref="input" type="text" onChange={this.changeHandler}/>
        <button onClick={this.onClick}>Submit</button>
      </div>
    )
  }
  changeHandler(event) {
    this.setState({inputValue: event.target.value});
  }

  onClick(){
    this.props.onSubmit(this.state.inputValue);
  }
}
