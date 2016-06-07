import {filter, cloneDeep} from 'lodash';
import { ADD_USER, CHANGE_USER_NAME, ADD_POST, DELETE_USER, DELETE_POST} from './constants.js';
import {movePiece} from './lib/model.js';

export const initialState = {
  pieces: [],
  selectedPieceId: null,
  turn: "red",
  isWon: false,
  lastPieceId: null,
  lastMoveWasJump: false
}

export function oldReducer(state = initialState, action){
      switch(action.type) {


        case "MOVE_PIECE_IF_LEGAL":
          return movePieceIfLegal (state, action);


        case "SELECT_PIECE":
          return selectPiece (state, action);


        default:
          return state;


    }
}

export function reducer (state, action) {
  const oldState = cloneDeep(state);
  const newState = oldReducer(state, action);
  return newState
}


//moves piece to new given column and row

// function movePiece (state, action) {
//   return Object.assign({}, state, {
//     pieces: state.pieces.map((piece) => {
//       //    console.log("state piece", piece);
//       if (piece.id === action.payload.id) {
//         return Object.assign({}, piece, {
//
//           row: action.payload.row,
//           column: action.payload.column
//         })
//
//       }
//       return piece;
//     })
//   })
// }

function movePieceIfLegal (state, action) {
  const newState = movePiece(state, action.payload.row, action.payload.column)
  return newState;

}

function selectPiece (state, action) {
  return Object.assign({}, state, {
    selectedPieceId: action.payload.id
  })
}

// function deleteUser (state, action) {
//   return Object.assign({}, state, {
//     users: filter(state.users, (user)=>{
//       return (action.payload !== user.id)
//     })
//   })
// }
//
// function deletePost (state, action) {
//   console.log("delete post", state, action);
//   return Object.assign({}, state, {
//     posts: filter(state.posts, (post)=>{
//       return (action.payload != post.postId)
//     })
//   })
// }
