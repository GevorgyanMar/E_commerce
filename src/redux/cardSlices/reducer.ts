import { productType } from "../../types/types";
import { FETCH_CARD, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./constants";

type OrderState = {
  items: productType[];
};

const initialState: OrderState = {
  items: [],
};

const cardReducer = (state: OrderState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CARD:
      return {
        ...state,
        items: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.val }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cardReducer;
