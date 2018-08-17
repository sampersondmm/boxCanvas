import {HIDE_NAVIGATION, SHOW_NAVIGATION} from '../actionTypes';

export default (state = {visible: true}, action) => {
  switch(action.type){
    case 'HIDE_NAVIGATION':
      var newState = {...state};
      newState.visible = false;
      return newState;
    case 'SHOW_NAVIGATION':
      var newState = {...state};
      newState.visible = true;
      return newState;
    default:
      return state;
  }
}
