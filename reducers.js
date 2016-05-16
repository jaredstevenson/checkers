import {filter} from 'lodash';
import { ADD_USER, CHANGE_USER_NAME, ADD_POST, DELETE_USER, DELETE_POST} from './constants.js';


const initialState = {
  users: [],
  posts: []
}
export function reducer(state = initialState, action){
      switch(action.type) {
        case ADD_USER:
          return addUser(state, action);

        case CHANGE_USER_NAME:
          return changeUserName (state, action);
          // add post to user

        case ADD_POST:
          return addComment (state, action);

        case DELETE_USER:
          return deleteUser (state, action);
          //delete user
        case DELETE_POST:
          return deletePost (state, action);


    }
}

function addUser (state, action) {
  return Object.assign({}, state, {
    users: [...state.users, action.payload]
  })
}

function changeUserName (state, action) {
  return Object.assign({}, state, {
    users: state.users.map((user) => {
      if (user.id === action.payload.id) {
        return Object.assign({}, user, {
          name: action.payload.name
        })
      }
      return user;
    })
  })
}

function addComment (state, action) {
  return Object.assign({}, state, {
    posts: [...state.posts, action.payload]
  })
}

function deleteUser (state, action) {
  return Object.assign({}, state, {
    users: filter(state.users, (user)=>{
      return (action.payload !== user.id)
    })
  })
}

function deletePost (state, action) {
  console.log("delete post", state, action);
  return Object.assign({}, state, {
    posts: filter(state.posts, (post)=>{
      return (action.payload != post.postId)
    })
  })
}
