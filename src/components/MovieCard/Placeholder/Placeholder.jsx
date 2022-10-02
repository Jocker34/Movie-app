import React from 'react';
import styled from 'styled-components';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';
export const MoviePlaceholder = () => {
	return (
		<StyledImage
			src={MoviePlaceholderIMG}
			alt='movie-placeholder'
			width='150px'
		/>
	);
};

const StyledImage = styled.img`
	border-radius: 5px;
`;
