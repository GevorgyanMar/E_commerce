import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Enter from "../pages/enter/Enter";
import AddProductForm from "../components/admin/AddProductForm";
import ProductList from "../components/products/ProductList";
import ProductDetails from "../components/products/ProductDetails";
import Profile from "../components/profile/Profile";
import OrderHistory from "../components/orders/OrderHistory";
import ShoppingCart from "../components/shoppingCart/ShoppingCart";

const Navigate: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Enter />} />

      <Route element={<Home />} path="/Home" />
      <Route element={<AddProductForm />} path="/Admin" />
      <Route element={<ProductList />} path="/Product" />
      <Route element={<ShoppingCart />} path="/Shopping-cart" />

      <Route element={<ProductDetails />} path="/Product/:id" />

      <Route element={<Profile />} path="/My-profile" />
      <Route element={<OrderHistory />} path="/Orders" />

      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
};

export default Navigate;
