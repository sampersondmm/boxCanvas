import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_CANVAS, REMOVE_CANVAS, VIEW_CANVAS} from '../actionTypes';

export const loadCanvas = canvas => ({
  type: LOAD_CANVAS,
  canvas
});

export const remove = id => ({
  type: REMOVE_CANVAS,
  id
})

export const viewCanvas = currentCanvas => ({
  type: VIEW_CANVAS,
  currentCanvas
})



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

export const removeCanvas = (user_id, canvas_id) => {
  return dispatch => {
    return apiCall('delete',`/api/users/${user_id}/canvas/${canvas_id}`)
      .then(() => dispatch(remove(canvas_id)))
      .catch(err => addError(err.message))
  }
}

export const postNewCanvas = data => (dispatch, getState) => {
  let {currentUser} = getState();
  const id = currentUser.user.id;
  return apiCall('post', `/api/users/${id}/canvas`, {canvasData: data})
    .then(res => {})
    .catch(err => dispatch(addError(err)));
};
