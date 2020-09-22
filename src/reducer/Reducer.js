import { combineReducers } from "redux";
import {SET_USER} from './types';

const initialUserState = {

  isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer
});

export default rootReducer;