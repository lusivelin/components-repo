import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/redux/category";
import productReducer from "@/redux/product";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;
