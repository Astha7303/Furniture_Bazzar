// ProtectedRoute.js
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin");

  return isAdmin === "true" ? children : <Navigate to="/admin" />;
}

export default ProtectedRoute;