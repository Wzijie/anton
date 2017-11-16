import { message } from 'antd';
import {
  REGIST_REQUEST,
  REGIST_LOADEND
} from './actionTypes.js';
import { postJson } from '../../common/httpRequest.js';
import { checkLoginStateSuccess } from '../app/actions';

function registLoadend() {
  return { type: REGIST_LOADEND };
}

export function regist(values) {
  return (dispatch) => {
    dispatch({ type: REGIST_REQUEST });
    postJson('/regist', values)
      .then((result) => {
        console.log(result);
        if (result.success) {
          message.success(result.message);
          dispatch(checkLoginStateSuccess(result));
        } else {
          message.error(result.message);
        }
        dispatch(registLoadend());
      })
      .catch((error) => {
        message.error(error.message);
        dispatch(registLoadend());
      });
  }
}
