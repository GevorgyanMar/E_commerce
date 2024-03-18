import React, { FC } from "react";
import useFetchOrders from "../../hooks/useFetchOrders";
import OrderList from "./OrderList";
import OrderDate from "./OrderDate";

const OrderHistory: FC = () => {
  const { orders } = useFetchOrders();

  return (
    <>
      <OrderDate />
      <OrderList orderData={orders} />;
    </>
  );
};

export default OrderHistory;
