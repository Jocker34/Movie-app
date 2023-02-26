import { useState } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from 'theme';
import Grid from '@mui/material/Grid';

import { Header } from 'components/Header';
import { MoviePage } from 'pages/MoviePage';
import { MainPage } from 'pages/MainPage';
import { ActorPage } from 'pages/ActorPage';
import LanguageContext from 'context/languageContext';

const App = () => {
  const [language, setLanguage] = useState('EN');
  const [movies, setMovies] = useState([]);

  const value = { language, setLanguage };

  const routes = useRoutes([
    {
      path: '/home',
      element: <MainPage movies={movies} setMovies={setMovies} />,
    },
    {
      path: '/movie/:id',
      element: <MoviePage />,
    },
    {
      path: '/actor/:id',
      element: <ActorPage />,
    },
    {
      path: '*',
      element: <Navigate to='/home' />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageContext.Provider value={value}>
        <Grid container direction='column' sx={{ minHeight: '100vh' }}>
          <Header setMovies={setMovies} />
          {routes}
        </Grid>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
};
export default App;
