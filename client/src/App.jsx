import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FeedProvider } from './context/FeedContext';
import { ProfileProvider } from './context/ProfileContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Auth Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Main Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Network from './pages/Network';
import Messaging from './pages/Messaging';
import Jobs from './pages/Jobs';
import Notifications from './pages/Notifications';
import Search from './pages/Search';
import Settings from './pages/Settings';
import Premium from './pages/Premium';
import NotFound from './pages/NotFound';

// Protected Route Component
import ProtectedRoute from './components/common/ProtectedRoute';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <FeedProvider>
          <ProfileProvider>
            <Routes>
              {/* Auth Routes */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              {/* Protected Routes */}
              <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:userId" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/network" element={<Network />} />
                <Route path="/messaging" element={<Messaging />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/search" element={<Search />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/premium" element={<Premium />} />
              </Route>

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProfileProvider>
        </FeedProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;