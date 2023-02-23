import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from 'theme';
import Grid from '@mui/material/Grid';

import { Header } from 'components/Header';
// import { MoviePage } from 'pages/MoviePage';
import { MainPage } from 'pages/MainPage';
// import { ActorPage } from 'pages/ActorPage';
import LanguageContext from 'context/languageContext';

const App = () => {
  const [language, setLanguage] = useState('EN');
  const [movies, setMovies] = useState([]);

  const value = { language, setLanguage };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageContext.Provider value={value}>
        <Grid container direction='column' sx={{ minHeight: '100vh' }}>
          <Header setMovies={setMovies} />
          <MainPage movies={movies} setMovies={setMovies} />

          {/* <MoviePage /> */}
          {/* <ActorPage /> */}
        </Grid>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
};
export default App;
