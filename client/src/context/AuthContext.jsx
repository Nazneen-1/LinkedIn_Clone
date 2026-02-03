import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock user data
  const mockUser = {
    _id: "123",
    name: "John Doe",
    email: "john@example.com",
    headline: "Software Engineer",
    profilePicture: null,
    connections: [],
  };

  // Check if user is logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock validation
      if (!email || !password) {
        throw new Error("Please provide email and password");
      }

      // Set mock user
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("token", "mock-token-123");

      setLoading(false);
      return { success: true };
    } catch (err) {
      setError(err.message || "Login failed");
      setLoading(false);
      throw err;
    }
  };

  // Mock register function
  const register = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock validation
      if (!name || !email || !password) {
        throw new Error("Please fill in all fields");
      }

      // Create mock user with registration data
      const newUser = {
        _id: Date.now().toString(),
        name,
        email,
        headline: "New User",
        profilePicture: null,
        connections: [],
      };

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("token", "mock-token-123");

      setLoading(false);
      return { success: true };
    } catch (err) {
      setError(err.message || "Registration failed");
      setLoading(false);
      throw err;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // Update user profile
  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;