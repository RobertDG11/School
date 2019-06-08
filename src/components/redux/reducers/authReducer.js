import {
  AUTHENTICATE,
  DEAUTHENTICATE,
  UPDATE_TOKEN,
  SUCCESS_MESSAGE,
  ERROR_MESSAGE
} from "../constants/index";

const initialState = {
  isAuth: false,
  user: {},
  token: "",
  successMessage: "",
  errorMessage: ""
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
        errorMessage: ""
      };
    case DEAUTHENTICATE:
      return {
        ...initialState
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

export default authReducer;
