import styled from 'styled-components';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';
import { RESOLUTION } from 'constants';

export const MoviePlaceholder = () => {
  return (
    <Container id='wrapper'>
      <StyledImage
        src={MoviePlaceholderIMG}
        width={RESOLUTION.MEDIUM}
        height='206'
      />
      <StyledButton variant='contained' color='success' sx={style}>
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

const style = {
  position: 'absolute',
  top: '40%',
  left: '30%',
  borderRadius: '10px',
  display: 'none',
};
