import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  const newProps = { email: 'test@test.com', password: 'password' };
  // this.props = newProps;
  // this.state.password = 'password';
  // return () => {
    console.log(email, password);
  // };
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    // console.log('im here 222!!!');
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then(user => {
      // console.log('im here!!!');
    //   dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    // });
    firebase.auth().signInWithEmailAndPassword(newProps.email, newProps.password)
      .then(user => loginUserSuccess(dispatch, user))
      // .then(user => {
      //   // console.log('im here!!': user);
      //   dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      // })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
        // .then(user => {
        //   dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        // })
        // .catch(() => loginUserFail(dispatch));
          .catch(() => loginUserFail(dispatch));
      });
  };
};
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  // console.log('login success');
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};
