import {filter} from 'lodash';
import { ADD_USER, CHANGE_USER_NAME, ADD_POST, DELETE_USER, DELETE_POST} from './constants.js';
import {movePiece} from './lib/model.js';

const initialState = {
  pieces: [],
  selecetedPieceId: null
}

export function reducer(state = initialState, action){
      switch(action.type) {
        // case "MOVE_PIECE":
        //   return movePiece(state, action);

        case "MOVE_PIECE_IF_LEGAL":
          return movePieceIfLegal (state, action);


        case ADD_POST:
          return addComment (state, action);

        case DELETE_USER:
          return deleteUser (state, action);
          //delete user
        case DELETE_POST:
          return deletePost (state, action);
        default:
          return state;


    }
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
  const newPieces = movePiece(action.payload.pieces, action.payload.piece, action.payload.row, action.payload.column)
  return Object.assign({}, state, {
    pieces: newPieces

  })

}

// function addComment (state, action) {
//   return Object.assign({}, state, {
//     posts: [...state.posts, action.payload]
//   })
// }
//
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
