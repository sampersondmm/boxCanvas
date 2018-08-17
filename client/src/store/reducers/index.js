import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import navbar from './navbar';
import {canvas, currentCanvas} from './canvas';

const rootReducer = combineReducers({
  currentUser,
  errors,
  canvas,
  currentCanvas,
  navbar,
})

export default rootReducer;
