import { SHOW_CAROUSEL } from "../constants/index";

const initialState = {
  showCarousel: true
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_CAROUSEL:
        return {
            ...state,
            showCarousel: action.payload
        };
    default: return state;
  }
}

export default rootReducer;
