import { message } from 'antd';
import { get } from '../../common/httpRequest';
import { checkLoginStateSuccess } from '../app/actions';
import { 
  CREATE_MODAL_TOGGLE,
  CREATE_TEAM_REQUEST,
  RECEIVE_TEAM
} from './actionTypes';

export function logout() {
  return (dispatch) => {
    get('/logout')
      .then((result) => {
        console.log(result);
        dispatch(checkLoginStateSuccess(result));
        message.success(result.message);
      })
      .catch((error) => {
        message.error(error.message);
      });
  }
}

export function createModalToggle() {
  return { type: CREATE_MODAL_TOGGLE };
}

export function receiveTeam(team) {
  return { type: RECEIVE_TEAM, payload: team };
}

export function createTeam(socket, newTeam) {
    socket.emit('createTeam', newTeam)
    return { type: CREATE_TEAM_REQUEST };
}
