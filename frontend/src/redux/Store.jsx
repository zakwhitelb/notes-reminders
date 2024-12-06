// System
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import ThemeReducer from "./slices/ThemeSlice"

const store = configureStore({
  reducer: {
    theme: ThemeReducer
  },
});

export default store;
