import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  const navigate = useNavigate();

  const navigation = (title: string): void => {
    switch (title) {
      case '홈':
        navigate('/');
        break;
      case '인기영화':
        navigate('/popular');
        break;
      case '상영 중':
        navigate('/now_playing');
        break;
      case '평점 높은':
        navigate('/top_rated');
        break;
      case '개봉 예정':
        navigate('/upcoming');
        break;
    }
  };

  return (
    <button
      onClick={() => navigation(props.title)}
      className={'cursor-pointer hover:text-green-200'}
    >
      {props.title}
    </button>
  );
};

export default Button;
