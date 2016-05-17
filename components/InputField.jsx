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
    this.submitInput = this.submitInput.bind(this)
  }
  render() {

    return (
      <div>
        <input ref="input" type="text" onChange={this.changeHandler}/>
        <button onClick={this.submitInput}>Submit</button>
      </div>
    )
  }
  changeHandler(event) {
    this.setState({inputValue: event.target.value});
  }

  submitInput(){
    this.props.store.dispatch(addComment(10, this.state.inputValue, 5));
    console.log("submitInput", this.state.inputValue);
  }
}
