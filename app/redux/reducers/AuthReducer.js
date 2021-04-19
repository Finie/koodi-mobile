import {
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
  EDIT_USER,
  USERS_LOADING,
} from "../../actions/types";
const initialState = {
  users: [],
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case CREATE_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
      };
    case USERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
