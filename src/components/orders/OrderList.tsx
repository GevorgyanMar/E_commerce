import React, { ChangeEvent, FC, useState } from "react";
import Table from "../table/Table";
import { productType } from "../../types/types";
import Image from "../Image/Image";

interface OrderListProps {
  orderData: {
    items: productType[];
  }[];
}

const OrderList: FC<OrderListProps> = ({ orderData }) => {
  const cartItems =
    orderData?.[0]?.items
      ?.map((item) => {
        return item;
      })
      .flatMap((item) => item) || [];

  const columns = [
    { key: "id", header: "ID" },
    { key: "title", header: "Title" },
    { key: "description", header: "Description" },
    { key: "imageUrl", header: "Image" },
    { key: "count", header: "Quantity" },
    { key: "price", header: "Price" },
  ];

  const renderData = (data: productType[]) => {
    return data.map(({ id, title, description, imageUrl, count, price }) => ({
      id,
      title,
      description,
      imageUrl: (
        <Image
          src={imageUrl}
          alt={title}
          style={{ width: "50px", height: "50px" }}
        />
      ),
      count,
      price,
    }));
  };

  return (
    <div>
      <h2>All Orders</h2>
      <Table columns={columns} data={renderData(cartItems)} />
    </div>
  );
};

export default OrderList;
