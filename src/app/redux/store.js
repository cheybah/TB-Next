import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';

// Create a store with the reducer
export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

