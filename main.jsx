import { createStore } from 'redux';
import { reducer } from './reducers.js';
import { addUser, changeUserName, addComment, deleteUser, deletePost } from './actions.js';
import * as React from 'react';
import { render } from 'react-dom';
//import { Display } from './components/App.jsx';

// console.log("I work!");

const store = createStore(reducer);
store.subscribe(()=> {
  console.log("store", store.getState());
  renderBoard(store.getState());
})

store.dispatch(
  addUser({
    id: 1,
    name: "Jason"
  })
)


store.dispatch(
  addComment(1, "Stuff and other stuff", 1)
)


setTimeout(()=>{
  console.log("setTimeout");
  store.dispatch( addUser({
    id: 3,
    name: "Jeff"
  }))
}, 2000)


setTimeout(()=>{
  console.log("setTimeout");
  store.dispatch(deleteUser(3))
}, 2500)

setTimeout(()=>{
  store.dispatch(deletePost(1))
}, 3000)

setTimeout(()=>{
  console.log("setTimeout");
  store.dispatch(
    changeUserName(1, "Other Name" )
  )
}, 1500)


function renderBoard(state){
console.log("render", state);
render(
  <div>helloworld!</div>,
  document.getElementById('messages')
)

  // ReactDOM.render(
  //   <div><Display posts={state.posts} users={state.users}/></div>,
  //    document.getElementById('messages')
  //
  // )
}

renderBoard(store.getState());
