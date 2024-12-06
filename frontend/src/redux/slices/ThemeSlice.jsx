import { createSlice } from '@reduxjs/toolkit';
import { useLayoutEffect } from 'react';

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: localStorage.getItem("theme") || "light",
  },
  reducers: {
    ToggleTheme: (state) => {
      state.value === "light" ? "dark" : "light";

      useLayoutEffect(() => {
        document.querySelector('body').setAttribute('data-theme', state.value);
        localStorage.setItem('theme', state.value);
      }, [state.value]);

    },
  },
});

export const { ToggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
