import { useEffect, useState } from 'react';
import { TMovie, TMovieResponse } from '../types/movies';
import apiClient from '../api/apiClient';
import Movie from '../components/Movie';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Paginator from '../components/Paginator';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [movies, setMovies] = useState<TMovie[]>([]);
  const { category } = useParams();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!category) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const { data } = await apiClient.get<TMovieResponse>(`/${category}`, {
          params: {
            language: 'en-US',
            page,
          },
        });
        setMovies(data.results);
      } catch (error) {
        console.error('영화불러오기 실패', error);
        setError('영화 정보를 가져오는데 실패하였습니다. 다시 시도해주세요');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [category, page]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <Paginator page={page} setPage={setPage} />
      </div>
      <div className={'flex justify-center px-20 py-10'}>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div className={'text-3xl font-bold text-red-500'}>에러 발생</div>
        ) : (
          <ul className={'grid grid-cols-6 gap-4'}>
            {movies?.map((movie: TMovie) => (
              <Movie movie={movie} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
