import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer, // Add more reducers here
  },
});

export default store;
