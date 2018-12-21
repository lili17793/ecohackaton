import { DISPLAY_APP_BARS } from '../actions/types';

const initialState = {
  isDisplayed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_APP_BARS:
      return {
        ...state,
        isDisplayed: true,
      };
    default:
      return state;
  }
};