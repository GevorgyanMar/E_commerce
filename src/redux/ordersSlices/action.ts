import { createAction } from "../actionCreators";
import {
  CHECKOUT,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  FETCH_ORDER,
} from "./constants";

export const removeCartItem = createAction(REMOVE_FROM_CART);

export const updateQuantityAction = createAction(UPDATE_QUANTITY);

export const checkoutAction = createAction(CHECKOUT);

export const fetchOrdersAction = createAction(FETCH_ORDER);
