import styled from 'styled-components';

import { SearchBar } from 'components/Header/SerachBar/SerachBar';
import { DropdownBar } from './DropdownBar/DropdownBar';

export const Header = ({ setSearch, language, setLanguage }) => {
	return (
		<HeaderContainer>
			<Title>TITLE</Title>
			<SearchBar setSearch={setSearch} language={language} />
			<DropdownBar language={language} setLanguage={setLanguage} />
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	background-color: #282424;
	justify-content: space-between;
`;

const Title = styled.h1`
	color: white;
	margin-left: 85px;
`;
