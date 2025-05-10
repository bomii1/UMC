import { useNavigate } from 'react-router-dom';
import logout from '../api/logout';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const { _logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      _logout();
      navigate('/v1');
    } catch (error) {
      console.error('로그아웃 실패', error);
      alert('로그아웃에 실패했습니다. 잠시후 다시 시도해주세요.');
    }
  };
  return (
    <>
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </>
  );
};

export default Logout;
