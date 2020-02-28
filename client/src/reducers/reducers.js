import {
    USER_TOKEN,
    USER_TOKEN_LOADING,
    USER_TOKEN_ERROR,
    COLORS,
    COLOR_LOADING,
    COLOR_ERROR
  } from "../actions/actions";
  
  const initialState = {
    userToken: "",
    userTokenLoading: false,
    userTokenError: "",
    colors: [],
    colorsLoading: false,
    colorsError: ""
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_TOKEN:
        return {
          ...state,
          userToken: action.payload
        };
      case USER_TOKEN_LOADING:
        return {
          ...state,
          userTokenLoading: !state.userTokenLoading
        };
      case USER_TOKEN_ERROR:
        return {
          ...state,
          userTokenError: action.payload
        };
      case COLORS:
        return {
          ...state,
          colors: action.payload
        };
      case COLOR_LOADING:
        return {
          ...state,
          colorsLoading: !state.colorsLoading
        };
      case COLOR_ERROR:
        return {
          ...state,
          colorsError: action.payload
        };
      default:
        return {
          state
        };
    }
  };
  