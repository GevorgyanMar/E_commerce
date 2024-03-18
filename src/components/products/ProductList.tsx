import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../../service/productServices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import { productType } from "../../types/types";
import {
  fetchProductsAction,
  filteredProductsAction,
  sortProductsAction,
} from "../../redux/productSlices/action";
import "./product.scss";

import Search from "../search/Search";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const fetchProductsData = async () => {
    try {
      const response = await fetchProducts();
      dispatch(fetchProductsAction(response));
    } catch (error) {
      console.log(error, "err");
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, [dispatch]);

  const handleSearch = (searchQuery: string) => {
    dispatch(filteredProductsAction(searchQuery));
    if (searchQuery.trim() === "") {
      fetchProductsData();
    }
  };

  const handleSort = (sortBy: "title" | "price") => {
    dispatch(sortProductsAction(sortBy));
  };

  return (
    <>
      <Search products={products} onSearch={handleSearch} />
      <div className="product-flex">
        <div className="sort-buttons">
          <button onClick={() => handleSort("title")}>Sort by Title</button>
          <button onClick={() => handleSort("price")}>Sort by Price</button>
        </div>
        {products.map((product: productType) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
