import { configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./shoes/shoesSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    shoes: shoesSlice,
    cart: cartSlice,
  },
});
