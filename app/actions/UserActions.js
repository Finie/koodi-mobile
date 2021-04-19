import axios from "axios";
import {
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
  EDIT_USER,
  USERS_LOADING,
} from "./types";

export const getUsers = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/auth/otp/authenticate").then((res) =>
    dispatch({
      type: GET_USERS,
      payload: res.data,
    }),
  );
};
export const createUser = (item) => (dispatch) => {
  axios.post("/auth/otp/authenticate", item).then((res) =>
    dispatch({
      type: CREATE_USER,
      payload: res.data,
    }),
  );
};
export const deleteUser = (id) => (dispatch) => {
  axios.delete(`/auth/otp/authenticate/${id}`).then((res) =>
    dispatch({
      type: DELETE_USER,
      payload: id,
    }),
  );
};
export const setUsersLoading = () => {
  return {
    type: USERS_LOADING,
  };
};
