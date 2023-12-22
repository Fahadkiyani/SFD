import React, { createContext, useState, useContext, useReducer } from "react";

// Create the context
const AuthContext = createContext();

// AuthProvider component to wrap your app with
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Function to set user data upon login
  const login = (userData) => {
    setUser(userData);
  };

  // Function to logout
  const logout = () => {
    setUser(null);
  };

  // Value provided by the context
  const value = {
    user,
    login,
    logout,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to access the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
