import { Link, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <nav>
        <Link to="/v1">홈</Link> |
        {isAuthenticated ? (
          <Link to="/v1/signout">로그아웃</Link>
        ) : (
          <Link to="/v1/signin">로그인</Link>
        )}
        | <Link to="/v1/users/me">내 정보 조회</Link> | <hr />
        <Outlet />
      </nav>
    </div>
  );
}

export default App;
