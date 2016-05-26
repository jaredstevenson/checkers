import { createStore } from 'redux';
import { reducer} from './reducers.js';
import { movePieceIfLegal } from './actions.js';
import * as React from 'react';
import { render } from 'react-dom';
import { Display } from './components/App.jsx';
import {pieces} from './pieces.js';
import * as lib from './lib/model.js';
import { findIndex} from 'lodash';

// tomorrow: set more rules. do turns. distiguish between red and black. also king.
//get the rules of the game working
//

const initialState = {
  pieces: pieces,
  selectedPieceId: null,
  turn: "red"
}


const store = createStore(reducer, initialState);
console.log("store.getState", store.getState());
store.subscribe(()=> {
  renderBoard(store.getState());
})
//
// setTimeout(function(){
//   store.dispatch(movePieceIfLegal(store.getState().pieces, pieces[4],4,4))
// }, 500)
// setTimeout(function(){
//   store.dispatch(movePieceIfLegal(store.getState().pieces, pieces[findIndex(pieces,['id', 24])], 5, 7));
//   // renderBoard();
//   },1000);
//
// setTimeout(function(){
//   store.dispatch(movePieceIfLegal(store.getState().pieces, pieces[findIndex(pieces,['id', 5])], 5, 5));
// },1500);
// setTimeout(function(){
//   store.dispatch(movePieceIfLegal(store.getState().pieces, pieces[findIndex(pieces,['id', 23])], 4, 4));
// },2000);
// setTimeout(function(){
//   store.dispatch(movePieceIfLegal(store.getState().pieces, pieces[findIndex(pieces,['id', 11])], 5, 3));
// },2600);
// setTimeout(function(){
//   store.dispatch(movePieceIfLegal(store.getState().pieces, pieces[findIndex(pieces,['id', 21])], 4, 4));
// },3000);

function renderBoard(state){
  console.log("state", state);
  render(

    <div><Display state={state} dispatch={store.dispatch}/></div>,
     document.getElementById('messages')

  )
}

renderBoard(store.getState());
