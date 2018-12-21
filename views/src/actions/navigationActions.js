import { DISPLAY_APP_BARS } from "./types";

export const displayAppBars = ()=> (dispatch) => {
    dispatch({
      type: DISPLAY_APP_BARS,
    });
  };