import axios from "axios";
import { productType } from "../types/types";
import { getUserInfoFromLocalStorage } from "../utilities/utilities";

const API_URL = "http://localhost:3001/shopingCard";

export const addToCard = async (data: productType) => {
  try {
    const response = await axios.post(`${API_URL}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCards = () => {
  const user = getUserInfoFromLocalStorage();
  return axios
    .get(`${API_URL}?userId=${user?.id!}`, {})
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
      throw error;
    });
};
export const removeFromCard = async (productId: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
