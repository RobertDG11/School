import { combineReducers } from "redux";
import { formReducer } from "redux-form";

export default function createReducer(extraReducerObjects = {}) {
  return combineReducers({
    form: formReducer,
    ...extraReducerObjects
  });
}
