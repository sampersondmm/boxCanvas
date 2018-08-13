import {LOAD_CANVAS, REMOVE_CANVAS} from '../actionTypes';

const canvas = (state = [], action) => {
  switch(action.type){
    case LOAD_CANVAS:
      return [...action.canvas];
    default:
      return state;
  }
};

export default canvas;
