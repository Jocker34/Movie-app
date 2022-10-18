import React from 'react';
import styled from 'styled-components';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';
import MovieHoverJPG from 'images/MovieHover.jpg';
import { RESOLUTION, ALT } from 'constants';

export const MoviePlaceholder = () => {
  return <StyledImage alt={ALT.MOVIE} width={RESOLUTION.MEDIUM} />;
};

const StyledImage = styled.img`
  border-radius: 5px;
  content: url(${MoviePlaceholderIMG});
  :hover {
    content: url(${MovieHoverJPG});
  }
`;
