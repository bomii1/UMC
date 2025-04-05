import Button from './Button';

const Navbar = () => {
  return (
    <div className={'flex gap-3 text-gray-500'}>
      <Button title="홈" />
      <Button title="인기영화" />
      <Button title="상영 중" />
      <Button title="평점 높은" />
      <Button title="개봉 예정" />
    </div>
  );
};

export default Navbar;
