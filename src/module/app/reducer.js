import {
  CHECK_LOGIN_STATE_REQUEST,
  CHECK_LOGIN_STATE_SUCCESS,
  CHECK_LOGIN_STATE_FAIL
} from './actionTypes.js';

const initialState = {
  username: '',
  loginState: false,
  checkLoginStateLoading: false
};

export default function app(state = initialState, action) {
  switch (action.type) {

    case CHECK_LOGIN_STATE_REQUEST:
      return { ...state, checkLoginStateLoading: true };

    case CHECK_LOGIN_STATE_SUCCESS:
      const { status, session: { username = '' } } = action.payload;
      return { ...state, checkLoginStateLoading: false, loginState: status, username };

    case CHECK_LOGIN_STATE_FAIL:
      return { ...state, checkLoginStateLoading: false };

    default: return state;
  }
}
