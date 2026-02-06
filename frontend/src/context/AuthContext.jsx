import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  function login(tokenValue) {
    localStorage.setItem('token', tokenValue);
    setToken(tokenValue);
  }

  function logout() {
    localStorage.removeItem('token');
    setToken(null);
  }

  const value = { token, login, logout, isAuthenticated: !!token };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
