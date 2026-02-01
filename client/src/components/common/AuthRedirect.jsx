import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthRedirect = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If already logged in, don't allow login/register pages
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AuthRedirect;
