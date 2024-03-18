import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../../service/productServices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import { productType } from "../../types/types";
import {
  fetchProductsAction,
  filteredProductsAction,
} from "../../redux/productSlices/action";
import "./product.scss";

import Search from "../search/Search";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetchProducts();
        dispatch(fetchProductsAction(response));
      } catch (error) {
        console.log(error, "err");
      }
    };

    fetchProductsData();
  }, [dispatch]);

  const handleSearch = (searchQuery: string) => {
    dispatch(filteredProductsAction(searchQuery));
  };

  return (
    <>
      <Search products={products} onSearch={handleSearch} />
      <div className="product-flex">
        {products.map((product: productType) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
