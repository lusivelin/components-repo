import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aside: {
    active: false,
  },
  theme: {
    systemDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
    current: localStorage.getItem("theme") || "light",
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleAside(state) {
      state.aside.active = !state.aside.active;
    },
    setTheme(state, action) {
      state.theme.current = action.payload;
    },
    toggleTheme(state) {
      const nextTheme = state.theme.current === "light" ? "dark" : "light";
      state.theme.current = nextTheme;
    },

    updateDarkMode(state, action) {
      state.theme.systemDarkMode = action.payload;
    },
  },
});

export const { toggleAside, toggleTheme, setTheme, updateDarkMode } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
