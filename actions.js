import { ADD_USER, CHANGE_USER_NAME, ADD_POST, DELETE_USER, DELETE_POST} from './constants.js';

export function addUser (user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function changeUserName (userId, newName) {
  return {
    type: CHANGE_USER_NAME,
    payload: {
      id: userId,
      name: newName
    }
  }
}

export function addComment (userId, comment, postId) {
  return {
    type: ADD_POST,
    payload: {
      id: userId,
      post: comment,
      postId: postId
    }

  }
}

export function deleteUser (userId){
  return {
    type: DELETE_USER,
    payload: userId
  }
}

export function deletePost (postId) {
  return {
    type: DELETE_POST,
    payload: postId
  }
}
