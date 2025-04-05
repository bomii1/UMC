import { useNavigate } from 'react-router-dom';

interface PaginatorProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Paginator = ({ page, setPage }: PaginatorProps) => {
  const navigate = useNavigate();

  const pagination = (direction: 'prev' | 'next') => {
    const nextPage = direction === 'prev' ? Math.max(1, page - 1) : page + 1;

    setPage(nextPage);
    navigate(`?page=${nextPage}`);
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        className="p-3 rounded-md bg-pink-100"
        onClick={() => pagination('prev')}
        disabled={page === 1}
      >
        {'<'}
      </button>
      <span>{page} 페이지</span>
      <button
        className="p-3 rounded-md bg-pink-100"
        onClick={() => pagination('next')}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Paginator;
