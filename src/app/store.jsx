import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    products: productReducer,
    cart: cartReducer,
  },
});