import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";
const api = "YOUR_BACKEND_API_URL";

//@dispatch is also a function provided by redux, if we return a function from ation creator that will automatically be called with a dispatch function
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${api}/signup`, formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Possible error statement here" });
  }
};

//@@After making the post request, I will get a JWT token

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${api}/signin`, formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid Credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};
