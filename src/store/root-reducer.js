import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./user/user.reducer";
import { categorySlice } from "./categories/category.reducer";
import { cartReducer, cartSlice } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    categories: categorySlice.reducer,
    cart: cartSlice.reducer
})