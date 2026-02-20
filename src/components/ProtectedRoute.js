import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // если не залогинен — на логин (а НЕ в profile)
  if (!token) return <Navigate to="/login" replace />;

  return children;
}