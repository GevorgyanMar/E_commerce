import { createAction } from "../actionCreators";
import { FETCH_CARD, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./constants";

export const removeCartAction = createAction(REMOVE_FROM_CART);
export const updateQuantityAction = createAction(UPDATE_QUANTITY);
export const fetchCardAction = createAction(FETCH_CARD);
