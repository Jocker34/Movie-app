import { useState } from 'react';

import { Header } from './components/Header/Header';
// import { MovieCard } from 'components/MovieCard/MovieCard';
// import { MoviePage } from 'components/MoviePage/MoviePage';
import { MainPage } from 'components/MainPage/MainPage';
// import { ActorPage } from 'components/ActorPage/ActorPage';

const App = () => {
	const [search, setSearch] = useState('');
	const [language, setLanguage] = useState('EN');
	return (
		<>
			<Header
				setSearch={setSearch}
				language={language}
				setLanguage={setLanguage}
			/>
			<MainPage search={search} />
			{/* <MoviePage language={language} /> */}
			{/* <ActorPage language={language} /> */}
		</>
	);
};
export default App;
