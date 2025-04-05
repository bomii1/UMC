import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default apiClient;
