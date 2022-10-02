import styled from 'styled-components';

import { Input } from 'common/Input/Input';
import { INPUT } from 'constants.js';

export const SearchBar = () => {
	return (
		<>
			<StyledInput placeholder={INPUT.SEARCH} />
		</>
	);
};

const StyledInput = styled(Input)`
	background-color: white;
	margin: 20px 0 20px 0;
	width: 400px;
	border-radius: 5px;
`;
