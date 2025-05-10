import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  _login: (token: string) => void;
  _logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const _login = (token: string) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
    console.log('login');
  };

  const _logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    console.log('logout');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, _login, _logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
