import { TMovie } from '../types/movies';

interface MovieProps {
  movie: TMovie;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ movie }: MovieProps) => {
  const overview = (description: string) => {
    return description.slice(0, 50) + '...';
  };

  return (
    <div className="relative group w-[150px]">
      <img
        className="w-full h-auto rounded-md group-hover:blur-sm transition duration-300"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40 rounded-md">
        <div>
          <p className="text-white text-lg font-medium text-center px-2">
            {movie.title}
          </p>
          <p className="text-white text-sm font-light text-center px-2">
            {overview(movie.overview)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
