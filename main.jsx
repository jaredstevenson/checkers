import { createStore } from 'redux';
import { reducer } from './reducers.js';
import { movePiece } from './actions.js';
import * as React from 'react';
import { render } from 'react-dom';
import { Display } from './components/App.jsx';





var pieces = [{
  id: 1,
  row: 1,
  column: 1,
  type: "red",
  king: false
},
{
  id: 2,
  row: 1,
  column: 3,
  type: "red",
  king: false
},
{
  id: 3,
  row: 1,
  column: 5,
  type: "red",
  king: false
},
{
  id: 4,
  row: 1,
  column: 7,
  type: "red",
  king: false
},
{
  id: 5,
  row: 2,
  column: 2,
  type: "red",
  king: false
},
{
  id: 6,
  row: 2,
  column: 4,
  type: "red",
  king: false
},
{
  id: 7,
  row: 2,
  column: 6,
  type: "red",
  king: false
},
{
  id: 8,
  row: 2,
  column: 8,
  type: "red",
  king: true
},
{
  id: 9,
  row: 3,
  column: 1,
  type: "red",
  king: false
},
{
  id: 10,
  row: 3,
  column: 3,
  type: "red",
  king: false
},
{
  id: 11,
  row: 3,
  column: 5,
  type: "red",
  king: false
},
{
  id: 12,
  row: 3,
  column: 7,
  type: "red",
  king: false
},
{
  id: 13,
  row: 8,
  column:  2,
  type: "black",
  king: false
},
{
  id: 14,
  row: 8,
  column:  4,
  type: "black",
  king: false
},
{
  id: 15,
  row: 8,
  column: 6 ,
  type: "black",
  king: false
},
{
  id: 16,
  row: 8,
  column: 8 ,
  type: "black",
  king: false
},
{
  id: 17,
  row: 7,
  column: 1 ,
  type: "black",
  king: false
},
{
  id: 18,
  row: 7,
  column: 3 ,
  type: "black",
  king: false
},
{
  id: 19,
  row: 7,
  column: 5 ,
  type: "black",
  king: false
},
{
  id: 20,
  row: 7,
  column: 7 ,
  type: "black",
  king: false
},
{
  id: 21,
  row: 6,
  column: 2 ,
  type: "black",
  king: false
},
{
  id: 22,
  row: 6,
  column: 4 ,
  type: "black",
  king: false
},
{
  id: 23,
  row: 6,
  column: 6 ,
  type: "black",
  king: false
},
{
  id: 24,
  row: 6,
  column: 8 ,
  type: "black",
  king: true
}]

const store = createStore(reducer, {pieces: pieces});
console.log("store.getState", store.getState());
store.subscribe(()=> {
  renderBoard(store.getState());
})

setTimeout(function(){
  store.dispatch(movePiece(pieces, pieces[23].id, 5, 7));
  console.log("store", store.getState());
  // renderBoard();
  },1000);



function renderBoard(state){
  render(

    <div><Display pieces={state.pieces} /></div>,
     document.getElementById('messages')

  )
}

renderBoard(store.getState());
