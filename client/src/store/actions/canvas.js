import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_CANVAS, REMOVE_CANVAS} from '../actionTypes';

export const loadCanvas = canvas => ({
  type: LOAD_CANVAS,
  canvas
});

export const fetchCanvas = () => {
  return dispatch => {
    return apiCall('get', '/api/canvas')
      .then(res => {
        dispatch(loadCanvas(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const postNewCanvas = data => (dispatch, getState) => {
  let {currentUser} = getState();
  const id = currentUser.user.id;
  debugger;
  return apiCall('post', `/api/users/${id}/canvas`, {canvasData: data})
    .then(res => {})
    .catch(err => dispatch(addError(err)));
};
