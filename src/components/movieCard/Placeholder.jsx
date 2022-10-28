import styled from 'styled-components';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';
import { RESOLUTION, ALT } from 'constants';

export const MoviePlaceholder = ({ image }) => {
  return (
    <Container>
      <StyledImage
        src={
          image
            ? `https://image.tmdb.org/t/p/w500${image}`
            : MoviePlaceholderIMG
        }
        alt={ALT.MOVIE}
        width={RESOLUTION.MEDIUM}
        height='206'
      />

      <StyledButton
        variant='contained'
        color='success'
        sx={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          borderRadius: '10px',
          display: 'none',
        }}
      >
        <PlayArrowIcon />
      </StyledButton>
    </Container>
  );
};
const Container = styled.div``;

const StyledButton = styled(Button)`
  ${Container}:hover & {
    display: flex;
  }
`;

const StyledImage = styled.img`
  border-radius: 5px;
  ${Container}:hover & {
    filter: brightness(50%);
  }
`;
