import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import canvas from './canvas';

const rootReducer = combineReducers({
  currentUser,
  errors,
  canvas,
})

export default rootReducer;
