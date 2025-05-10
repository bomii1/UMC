import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    alert('접근권한이 없습니다!');
    return <Navigate to="/v1/signin" replace />;
  }
  return children;
};

export default ProtectedRoute;
