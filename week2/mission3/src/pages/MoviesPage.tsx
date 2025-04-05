import { useEffect, useState } from 'react';
import { TMovie, TMovieResponse } from '../types/movies';
import apiClient from '../api/apiClient';
import Movie from '../components/Movie';

const MoviesPage = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await apiClient.get<TMovieResponse>('/popular', {
          params: {
            language: 'en-US',
            page: 1,
          },
        });
        setMovies(data.results);
      } catch (error) {
        console.error('영화불러오기 실패', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={'flex justify-center px-20 py-10'}>
      <ul className={'grid grid-cols-6 gap-4'}>
        {movies?.map((movie: TMovie) => (
          <Movie movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
