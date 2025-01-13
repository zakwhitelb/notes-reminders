import { createSlice } from '@reduxjs/toolkit';

const initialTheme = localStorage.getItem("theme") || "light";
// Ensure the DOM is updated during initialization
document.querySelector('body').setAttribute('data-theme', initialTheme);
localStorage.setItem('theme', initialTheme);

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initialTheme,
  },
  reducers: {
    ToggleTheme: (state) => {
      // Toggle the theme value
      state.value = state.value === "light" ? "dark" : "light";

      // Update localStorage and the DOM
      document.querySelector('body').setAttribute('data-theme', state.value);
      localStorage.setItem('theme', state.value);
    },
  },
});

export const { ToggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
