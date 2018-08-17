import {LOAD_CANVAS, REMOVE_CANVAS, VIEW_CANVAS} from '../actionTypes';


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
    case VIEW_CANVAS:
      return {...action.currentCanvas};
    default:
      return state;
  }
}
