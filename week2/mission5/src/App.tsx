import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MoviesPage from './pages/MoviesPage';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ':category',
        element: <MoviesPage />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
