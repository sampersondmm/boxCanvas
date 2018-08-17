import {SHOW_NAVIGATION, HIDE_NAVIGATION} from '../actionTypes';


export const hideNavigation = () => {
  return {
    type: 'HIDE_NAVIGATION',
  }
}
export const showNavigation = () => {
  return {
    type: 'SHOW_NAVIGATION',
  }
}
