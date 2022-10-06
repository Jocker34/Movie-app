import React, { useState } from 'react';
import styled from 'styled-components';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';
import MovieHoverJPG from 'images/MovieHover.jpg';
import { RESOLUTION, ALT } from 'constants';

export const MoviePlaceholder = () => {
	const [hover, setHover] = useState(false);
	return (
		<StyledImage
			src={hover ? MovieHoverJPG : MoviePlaceholderIMG}
			alt={ALT.MOVIE}
			width={RESOLUTION.MEDIUM}
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}
		/>
	);
};

const StyledImage = styled.img`
	border-radius: 5px;
`;
