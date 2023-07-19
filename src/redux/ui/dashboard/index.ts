import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aside: {
    active: false,
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleAside(state) {
      state.aside.active = !state.aside.active;
    },
  },
});

export const { toggleAside } = dashboardSlice.actions;

export default dashboardSlice.reducer;
