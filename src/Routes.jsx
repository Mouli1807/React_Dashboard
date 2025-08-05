
// App routing configuration using React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import OrderListDashboard from './pages/OrderListDashboard';
import ECommerceAnalyticsDashboard from './pages/ECommerceAnalyticsDashboard';


// Define all app routes
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Orders dashboard route */}
        <Route path="/orders" element={<OrderListDashboard />} />
        {/* E-Commerce analytics dashboard route */}
        <Route path="/analytics" element={<ECommerceAnalyticsDashboard />} />
        {/* Default route */}
        <Route path="/" element={<ECommerceAnalyticsDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;