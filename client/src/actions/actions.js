import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"

const API = "http://localhost:5000";

// User State
export const USER_TOKEN = "USER_TOKEN";
export const USER_TOKEN_LOADING = "USER_TOKEN_LOADING";
export const USER_TOKEN_ERROR = "USER_TOKEN_ERROR";

// Color State
export const COLORS = "COLORS";
export const COLOR_LOADING = "COLORS_LOADING";
export const COLOR_ERROR = "COLOR_ERROR";

export const userLogin = user => {
  return dispatch => {
      dispatch({ type: USER_TOKEN_LOADING })
    axios
      .post(API + "/api/login", user)
      .then(res => {
          localStorage.setItem("token", res.data.payload)
          dispatch({ type: USER_TOKEN, payload: res.data.payload })
          dispatch({ type: USER_TOKEN_LOADING })
      })
      .catch(err => {
          dispatch({ type: USER_TOKEN_ERROR, payload: err })
          dispatch({ type: USER_TOKEN_LOADING })
      });
  };
};

export const fetchColors = () => {
  return dispatch => {
    dispatch({ type: COLOR_LOADING })
    axiosWithAuth()
    .get(API + "/api/colors")
    .then(res => {
      dispatch({ type: COLORS, payload: res.data })
      dispatch({ type: COLOR_LOADING })
    })
    .catch(err => {
      dispatch({ type: COLOR_ERROR, payload: err })
      dispatch({ type: COLOR_LOADING })
    })
  }
}
