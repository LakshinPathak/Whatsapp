import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      // Retrieve user from localStorage on initial load
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      return null;
    }
  });

  const login = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
    } catch (error) {
      console.error('Failed to save user to localStorage:', error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem('user'); // Remove user from localStorage
    } catch (error) {
      console.error('Failed to remove user from localStorage:', error);
    }
  };

  // Debugging: Log user state changes
  useEffect(() => {
    console.log('Auth state updated:', user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
