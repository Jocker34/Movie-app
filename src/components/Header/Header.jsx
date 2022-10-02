import styled from 'styled-components';

import { SearchBar } from 'components/Header/SerachBar/SerachBar';
import { Button } from 'common/Button/Button';
import { Dropdown } from './Dropdown/Dropdown';

export const Header = () => {
	const items = [
		{
			id: 1,
			value: 'PL',
		},
		{
			id: 2,
			value: 'EN',
		},
	];
	return (
		<HeaderContainer>
			<Title>TITLE</Title>
			<SearchBar />
			<Dropdown items={items} />
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

const StyledButton = styled(Button)`
	margin-right: 85px;
`;
