import {
  CHECK_LOGIN_STATE_REQUEST,
  CHECK_LOGIN_STATE_SUCCESS,
  CHECK_LOGIN_STATE_FAIL
} from './actionTypes.js';
import { get } from '../../common/httpRequest';


export function checkLoginStateSuccess(loginInfo) {
  return {
    type: CHECK_LOGIN_STATE_SUCCESS,
    payload: loginInfo
  }
}

function checkLoginStateFail(message) {
  return {
    type: CHECK_LOGIN_STATE_FAIL,
    payload: message
  }
}

export function checkLoginState() {
  return (dispatch) => {
    dispatch({ type: CHECK_LOGIN_STATE_REQUEST });
    return get('/isLogin')
      .then((result) => {
        console.log(result);
        dispatch(checkLoginStateSuccess(result));
      })
      .catch((error) => {
        console.log(error);
        dispatch(checkLoginStateFail(error.message))
      })
  }
}

export function logout() {
  return () => {
    get('/logout')
      .then((result) => {
        console.log(result);
      });
  }
}

