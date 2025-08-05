
// Redux slice for managing orders state and persistence
import { createSlice } from '@reduxjs/toolkit';

// Initial state: load from localStorage or use default static data
const initialState = {
  orders: JSON.parse(localStorage.getItem('orders')) || [
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: '/images/img_female15.png' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: { type: 'In Progress', color: '#8a8cd9', icon: '/images/img_dot_indigo_a100.svg' },
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: '/images/img_female09.png' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: { type: 'Complete', color: '#4aa785', icon: '/images/img_dot_teal_100.svg' },
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar: '/images/img_male08.png' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: { type: 'Pending', color: '#59a8d4', icon: '/images/img_dot_light_blue_100.svg' },
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: '/images/img_male06.png' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: { type: 'Approved', color: '#ffc554', icon: '/images/img_dot_yellow_200.svg' },
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: '/images/img_female08.png' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: { type: 'Rejected', color: '#777777', icon: '/images/img_dot.svg' },
    },
  ],
};


// Create orders slice with reducers for add and set
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    // Add a new order and persist to localStorage
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    // Replace all orders and persist to localStorage
    setOrders: (state, action) => {
      state.orders = action.payload;
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
  },
});


// Export actions and reducer
export const { addOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
