import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  toast: ''
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, toast: 'password changed' };
    case EMAIL_CHANGED:
      // state.email = action.payload;
      // return state;
      return { ...state, email: action.payload, toast: 'email changed' };
    case LOGIN_USER:
      return { ...state, loading: true, error: '', toast: 'login user' };
    case LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.paload,
        error: 'loginSuccess',
        loading: false,
        email: '',
        password: '',
        toast: 'login success!!'
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Auth Failed.', passowrd: '', loading: false, toast: 'Really???' };
    default:
      return state;
  }
};
