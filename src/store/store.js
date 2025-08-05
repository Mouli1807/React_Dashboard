
// Redux store configuration for the app
import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './ordersSlice';

// Create the Redux store with orders slice
const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
});

// Export the configured store
export default store;
