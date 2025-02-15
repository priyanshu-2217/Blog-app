import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const auth = localStorage.getItem("token");
  return auth && auth !== null ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes; 
