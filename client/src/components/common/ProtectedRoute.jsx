import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // TEMP mock

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
