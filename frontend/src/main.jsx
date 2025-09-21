import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import RootLayout from './components/layout/RootLayout';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import HomePage from './pages/public/HomePage';
import ProductDetailPage from './pages/public/ProductDetailPage';
import CartPage from './pages/public/CartPage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import WishlistPage from './pages/public/WishlistPage'; 
import CheckoutPage from './pages/public/CheckoutPage'; 
import OrderHistoryPage from './pages/user/OrderHistoryPage';
import CustomerProtectedRoute from './routes/CustomerProtectedRoute'; 
import CategoryPage from './pages/public/CategoryPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage'; 
import AdminAddProductPage from './pages/admin/AdminAddProductPage';


const router = createBrowserRouter([
  // Public Routes
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
  { path: 'category/:categoryName', element: <CategoryPage /> }, 
  { path: 'products/:productId', element: <ProductDetailPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { 
        element: <CustomerProtectedRoute />,
        children: [
          { path: 'checkout', element: <CheckoutPage /> },
          { path: 'profile/orders', element: <OrderHistoryPage /> },
          // Any other customer-only pages will go here
        ]
      }
    ],
  },
  // Admin Routes
  {
    path: '/admin',
    element: <ProtectedRoute />, // This protects all child routes
    children: [
      {
        element: <AdminLayout />, // This layout is shared by all admin pages
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: 'orders', element: <AdminOrdersPage /> },
          { path: 'products', element: <AdminProductsPage /> },
          { path: 'products/add', element: <AdminAddProductPage /> },
          { path: 'products/:productId/edit', element: <AdminEditProductPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
