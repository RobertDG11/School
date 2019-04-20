import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import rootReducer from './reducers/reducers'

const reducer = combineReducers({
  form: reduxFormReducer,
  showCarousel: rootReducer
});
const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
