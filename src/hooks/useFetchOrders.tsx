import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOrders } from "../service/orderServices";
import { useSelector } from "react-redux";
import { fetchOrdersAction } from "../redux/ordersSlices/action";
import { RootState } from "../redux/rootReducers";
import { OrderType } from "../types/types";
import { getUserInfoFromLocalStorage } from "../utilities/utilities";

interface OrdersData {
  orders: OrderType[];
  isLoading: boolean;
}

const useFetchOrders = (): OrdersData => {
  const [isLoading, setIsLoading] = useState(true);
  const orders = useSelector((state: RootState) => state.orders.items);
  const userInfo = getUserInfoFromLocalStorage();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrdersData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchOrders(+userInfo?.id!);
        dispatch(fetchOrdersAction(response));
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrdersData();

    return () => {};
  }, [dispatch]);

  return { orders, isLoading };
};

export default useFetchOrders;
