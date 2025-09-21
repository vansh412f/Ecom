import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../state/authStore';

function CustomerProtectedRoute() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default CustomerProtectedRoute;