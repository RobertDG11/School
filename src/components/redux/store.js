import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
  form: reduxFormReducer
});
const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;