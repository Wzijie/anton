import {
  LOGIN_REQUEST,
  LOGIN_LOADEND
} from './actionTypes.js';

const initialState = {
  loginLoading: false
};

export default function login(state = initialState, action) {
  switch (action.type) {

    case LOGIN_REQUEST:
      return { ...state, loginLoading: true };

    case LOGIN_LOADEND:
      return { ...state, loginLoading: false };

    default: return state;
  }
}
