// good enough at init
// export default function(state, action) {
//   return state || {}
// }
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes'

const DEFAULT_AUTH = {
  username: null,
  isPending: false
}

function auth(state, action) {
  switch(action.type) {
    case actionTypes.LOGIN_START:
      return { ...state, username: null, isPending: true }
    case actionTypes.LOGIN_END:
      return action.error
      ? { ...state, username: null, isPending: false }
      : { ...state, username: action.payload.username, isPending: false}
      // after dispatch the data is in payload ^^
    case actionTypes.LOGOUT:
      return DEFAULT_AUTH
    default:
      return state || DEFAULT_AUTH
  }
}

const DEFAULT_POSTS = {
  posts: [],
  isPending: false
}

function projects(state, action) {
  switch(action.type) {
    case actionTypes.READ_POSTS_START:
      return { ...state, posts: null, isPending: true }
    case actionTypes.READ_POSTS_END:
      return action.error
      ? { ...state, posts: null, isPending: false }
      // overwrite old posts list with new fetched posts list
      : { ...state, posts: action.payload.posts, isPending: false}
    default:
      return state || DEFAULT_POSTS
  }
}

export default combineReducers({
  auth,
  projects
});