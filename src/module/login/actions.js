import { message } from 'antd';
import {
  LOGIN_REQUEST,
  LOGIN_LOADEND
} from './actionTypes.js';
import { postJson } from '../../common/httpRequest';
import { checkLoginStateSuccess } from '../app/actions';

function loginLoadend() {
  return { type: LOGIN_LOADEND };
}

export function login(values) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    postJson('/login', values)
      .then((result) => {
        console.log(result);
        if (result.success) {
          dispatch(checkLoginStateSuccess(result));
          message.success(result.message);
        } else {
          message.error(result.message);
        }
        dispatch(loginLoadend());
      })
      .catch((error) => {
        message.error(error.message);
        dispatch(loginLoadend());
      });
  }
}
