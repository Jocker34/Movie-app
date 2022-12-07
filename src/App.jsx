import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Header } from 'components/Header';
// import { MoviePage } from 'pages/MoviePage';
import { MainPage } from 'pages/MainPage';
// import { ActorPage } from 'pages/ActorPage';
import LanguageContext from 'helpers/languageContext';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

const App = () => {
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('EN');
  const value = { language, setLanguage };
  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={value}>
        <Header setSearch={setSearch} />
        <MainPage search={search} />
        {/* <MoviePage /> */}
        {/* <ActorPage /> */}
      </LanguageContext.Provider>
    </ThemeProvider>
  );
};
export default App;
