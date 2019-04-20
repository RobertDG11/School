import { SHOW_CAROUSEL } from "./actions";
const initialState = {
  showCarousel: false
};
function rootReducer(state = initialState, action) {
  if (action.type === SHOW_CAROUSEL) {
    state.articles.push(action.payload);
  }
  return state;
}
export default rootReducer;
