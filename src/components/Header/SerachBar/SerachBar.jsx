import styled from 'styled-components';

import { Input } from 'common/Input/Input';
import { translate } from 'helpers/translate';

export const SearchBar = ({ setSearch, language }) => {
	const handleOnChange = (e) => {
		e.target.value ? setSearch(e.target.value) : setSearch('');
	};
	return (
		<>
			<StyledInput
				placeholder={translate(language).INPUT.SERACH}
				onChange={handleOnChange}
			/>
		</>
	);
};

const StyledInput = styled(Input)`
	background-color: white;
	margin: 20px 0 20px 0;
	width: 400px;
	border-radius: 5px;
`;
