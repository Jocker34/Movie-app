import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from 'theme';

import { Header } from 'components/Header';
// import { MoviePage } from 'pages/MoviePage';
import { MainPage } from 'pages/MainPage';
// import { ActorPage } from 'pages/ActorPage';
import LanguageContext from 'context/languageContext';

const App = () => {
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('EN');
  const value = { language, setLanguage };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
