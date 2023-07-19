import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/redux/category";
import productReducer from "@/redux/product";
import dashboardReducer from "@/redux/ui/dashboard";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
