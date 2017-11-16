import { 
  CREATE_MODAL_TOGGLE,
  CREATE_TEAM_REQUEST,
  RECEIVE_TEAM
} from './actionTypes';

const initialState = {
  team: [],
  createModalVisible: false,
  createModalLoading: false
};

export default function home(state = initialState, action) {
  switch (action.type) {

    case CREATE_MODAL_TOGGLE:
      return { ...state, createModalVisible: !state.createModalVisible };

    case CREATE_TEAM_REQUEST:
      return { ...state, createModalLoading: true };

    case RECEIVE_TEAM:
      return { ...state, createModalLoading: false, team: action.payload }

    default: return state;
  }
}
