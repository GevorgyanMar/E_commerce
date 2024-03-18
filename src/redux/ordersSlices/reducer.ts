import { productType } from "../../types/types";
import {
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CHECKOUT,
  FETCH_ORDER,
} from "./constants";

type OrderState = {
  id: number;
  userId: string | null;
  date: null;
  items: productType[];
};

const initialState: OrderState = {
  id: 0,
  userId: null,
  date: null,
  items: [],
};

const ordersReducer = (state: OrderState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        ...state,
        items: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.itemId),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case CHECKOUT:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default ordersReducer;
