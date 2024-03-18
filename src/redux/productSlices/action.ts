import { createAction } from "../actionCreators";
import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
} from "./constants";

export const addProductAction = createAction(ADD_PRODUCT);

export const fetchProductsAction = createAction(FETCH_PRODUCTS);
export const filteredProductsAction = createAction(FILTER_PRODUCTS);
export const sortProductsAction = createAction(SORT_PRODUCTS);
