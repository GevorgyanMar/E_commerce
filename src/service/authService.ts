import axios from "axios";
import { LoginUserType, UserType } from "../types/types";
import { USERS_LOCAL_STORAGE_KEY } from "../constants/constants";

const API_URL = "http://localhost:3001/users";

export const register = async (formData: UserType) => {
  try {
    const response = await axios.post(`${API_URL}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    localStorage.setItem(
      USERS_LOCAL_STORAGE_KEY,
      JSON.stringify(response.data[0])
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (formData: LoginUserType) => {
  try {
    const users = await getUsers();

    const loggedInUser = users.find(
      (user: LoginUserType) => user.email === formData.email
    );

    return { user: loggedInUser };
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId: number, updatedUserData: UserType) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, updatedUserData);

    const updatedUser = response.data;
    const users = JSON.parse(
      localStorage.getItem(USERS_LOCAL_STORAGE_KEY) || "[]"
    );

    const updatedUsers = users.map((user: UserType) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    localStorage.setItem(USERS_LOCAL_STORAGE_KEY, JSON.stringify(updatedUsers));

    return updatedUser;
  } catch (error) {
    throw error;
  }
};
