import axios from "axios";
import { OrderType, productType } from "../types/types";

const API_URL = "http://localhost:3001/orders";

export const addToOrder = async (data: OrderType) => {
  try {
    const response = await axios.post(`${API_URL}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOrders = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const addToOrderItems = async (
  userId: number,
  productToAdd: productType
) => {
  try {
    const orders = await fetchOrders(userId);
    let existingOrder: OrderType;

    if (orders && orders.length > 0) {
      existingOrder = orders[0];
      existingOrder.items.push(productToAdd);
      await axios.put(`${API_URL}/${existingOrder.id}`, existingOrder);
    } else {
      const newOrder = {
        userId: userId,
        date: new Date().toISOString(),
        items: [productToAdd],
      } as OrderType;
      await addToOrder(newOrder);
    }
  } catch (error) {
    console.error("Error adding product to order:", error);
    throw error;
  }
};
