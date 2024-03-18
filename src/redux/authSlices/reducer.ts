import { UserType } from "../../types/types";
import { FETCH_USER_DATA, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./constants";

type loginUserType = {
  email: string;
  password: string;
};

type AuthState = {
  users: UserType[];
  loginUser?: loginUserType | null;
};

const initialState: AuthState = {
  users: [],
  loginUser: null,
};

const authReducer = (
  state: AuthState = initialState,
  action: any
): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case FETCH_USER_DATA:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default authReducer;
