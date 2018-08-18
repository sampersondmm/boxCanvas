import {LOAD_CANVAS, REMOVE_CANVAS, SET_CURRENT_CANVAS,CLEAR_CURRENT_CANVAS} from '../actionTypes';


export const canvas = (state = [], action) => {
  switch(action.type){
    case LOAD_CANVAS:
      return [...action.canvas];
    case REMOVE_CANVAS:
      return state.filter(canvas => canvas._id !== action.id)
    default:
      return state;
  }
};

export const currentCanvas = (state = {},action) => {
  switch(action.type){
    case SET_CURRENT_CANVAS:
      return {...action.currentCanvas};
    case CLEAR_CURRENT_CANVAS:
      return {}
    default:
      return state;
  }
}
