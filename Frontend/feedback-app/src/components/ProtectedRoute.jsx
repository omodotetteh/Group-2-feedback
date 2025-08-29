import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("username") === "admin@noble.com" &&
                          localStorage.getItem("password") === "Admin#123";
  if (!isAuthenticated) {          
  return  <Navigate to="/adminlogin" replace />;
};
return children;
}
export default ProtectedRoute;