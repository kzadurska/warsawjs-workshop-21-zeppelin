import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';
import * as api from './api';

const startLogin = createAction(actionTypes.LOGIN_START);
const endLogin = createAction(actionTypes.LOGIN_END);

export function login({ username, password }) {
  return (dispatch, getState) => {
    dispatch(startLogin());
    return api
      .login({ username, password })
      .then((response) => {
        if (response.ok) {
          dispatch(endLogin({ username: response.username }));
        } else {
          dispatch(endLogin(new Error(response.errors.join('\n'))));
        }
      })
      .catch((error) => {
        dispatch(endLogin(new Error('Network error')));
      });
  };
}

export const logout = createAction(actionTypes.LOGOUT);

const startReadPosts = createAction(actionTypes.READ_POSTS_START);
const endReadPosts = createAction(actionTypes.READ_POSTS_END);

export function readPosts() {
  return (dispatch, getState) => {
    dispatch(startReadPosts());
    return api
      .readPostList()
      .then((response) => {
        if (response.ok) {
          debugger
          dispatch(endReadPosts({ posts: response.posts }));
        } else {
          dispatch(endReadPosts(new Error(response.errors.join('\n'))));
        }
      })
      .catch((error) => {
        dispatch(endReadPosts(new Error('Network error')));
      });
  };
}