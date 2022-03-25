import React from "react";
import { useAuth } from "../context/auth-context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ ProtectedComp }) => {
  const { user } = useAuth();
  return (
    <div>
      {user.isUserLoggedIn ? ProtectedComp : <Navigate replace to="/login" />}
    </div>
  );
};

export default ProtectedRoute;
