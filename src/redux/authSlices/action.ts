import { createAction } from "../actionCreators";
import { FETCH_USER_DATA, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./constants";

export const loginAction = createAction(LOGIN_SUCCESS);
export const registerAction = createAction(REGISTER_SUCCESS);
export const fetchDataAction = createAction(FETCH_USER_DATA);
