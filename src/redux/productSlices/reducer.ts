import { FETCH_PRODUCTS, FILTER_PRODUCTS } from "./constants";
import { productType } from "../../types/types";
import { filterProducts } from "../../utilities/utilities";

export interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  payload: productType[];
}

export interface FilterProductsAction {
  type: typeof FILTER_PRODUCTS;
  payload: string;
}

export type ProductActionTypes = FetchProductsAction | FilterProductsAction;

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

    case FILTER_PRODUCTS:
      const filteredProducts =
        action.payload.trim() === ""
          ? state.products
          : filterProducts(state.products, action.payload);
      return {
        ...state,
        products: filteredProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
