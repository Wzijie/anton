import { combineReducers } from 'redux';
import app from './reducer';
import login from '../login/reducer';
import home from '../home/reducer';
import regist from '../regist/reducer';

const rootReducer = combineReducers({
  app,
  login,
  home,
  regist
});

export default rootReducer;
