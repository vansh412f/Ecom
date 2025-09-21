import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../state/authStore';

function ProtectedRoute() {
  const { isLoggedIn, user } = useAuthStore();

  // Check if user is logged in AND has the 'admin' role.
  return isLoggedIn && user?.role === 'admin' ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;