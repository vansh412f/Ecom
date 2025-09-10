// frontend/src/routes/CustomerProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../state/authStore';

function CustomerProtectedRoute() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // If the user is logged in, show the requested page.
  // Otherwise, redirect them to the /login page.
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default CustomerProtectedRoute;