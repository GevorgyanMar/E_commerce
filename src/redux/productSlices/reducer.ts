import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
} from "./constants";
import { productType } from "../../types/types";

import {
  applyFilters,
  //  filterData,
  filterProducts,
  sortProducts,
} from "../../utilities/utilities";

export interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  payload: productType[];
}

export interface sortProductsAction {
  type: typeof SORT_PRODUCTS;
  payload: "title" | "price";
}

export interface searchProductsAction {
  type: typeof SEARCH_PRODUCTS;
  payload: string;
}
export interface filterProductsAction {
  type: typeof FILTER_PRODUCTS;
  payload: {
    countFilter: number;
    priceFilter: number;
    titleFilter: string;
    descriptionFilter: string;
  };
}

export type ProductActionTypes =
  | FetchProductsAction
  | filterProductsAction
  | searchProductsAction
  | sortProductsAction;

interface ProductState {
  products: productType[];
}

const initialState: ProductState = {
  products: [],
};

const productReducer = (
  state = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: filterProducts(state.products, action.payload),
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        products: sortProducts(state.products, action.payload),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        products: applyFilters(state.products, action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;
