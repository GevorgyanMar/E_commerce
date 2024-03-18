import { combineReducers } from "redux";
import authReducer from "./authSlices/reducer";
import productReducer from "./productSlices/reducer";
import ordersReducer from "./ordersSlices/reducer";
import cardReducer from "./cardSlices/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  orders: ordersReducer,
  cards: cardReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
