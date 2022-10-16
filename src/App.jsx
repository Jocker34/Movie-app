import { useState } from 'react';

import { Header } from 'pages/Header';
// import { MovieCard } from 'components/MovieCard/MovieCard';
// import { MoviePage } from 'pages/MoviePage';
import { MainPage } from 'pages/MainPage';
// import { ActorPage } from 'pages/ActorPage';
import LanguageContext from 'helpers/languageContext';
const App = () => {
	const [search, setSearch] = useState('');
	const [language, setLanguage] = useState('EN');
	const value = { language, setLanguage };
	return (
		<>
			<LanguageContext.Provider value={value}>
				<Header setSearch={setSearch} />
				<MainPage search={search} />
				{/* <MoviePage /> */}
				{/* <ActorPage /> */}
			</LanguageContext.Provider>
		</>
	);
};
export default App;
