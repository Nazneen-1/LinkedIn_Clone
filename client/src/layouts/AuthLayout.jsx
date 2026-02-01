import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from '../components/common/Loader';

const AuthLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader fullScreen />;
  }

  // If already logged in, redirect to home
  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;