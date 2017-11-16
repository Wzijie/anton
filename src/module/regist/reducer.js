import { 
  REGIST_REQUEST,
  REGIST_LOADEND
} from './actionTypes.js';

const initialState = {
  registLoading: false
};

export default function regist(state = initialState, action) {
  switch (action.type) {

    case REGIST_REQUEST:
      return { ...state, registLoading: true };

    case REGIST_LOADEND:
    return { ...state, registLoading: false };

    default: return state;
  }
}
