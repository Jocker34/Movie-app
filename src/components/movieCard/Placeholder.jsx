import styled from 'styled-components';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { VideoModal } from 'components/VideoModal';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';
import { RESOLUTION, IMAGE } from 'constants';
import { useState } from 'react';
import { useLazyVideoQuery } from 'services/endpoints/movies.builder';

export const MoviePlaceholder = ({ id, image }) => {
  const movieImage = image ? `${IMAGE}${image}` : MoviePlaceholderIMG;
  const [shown, setShown] = useState(false);
  const [triggerVideoQuery, { isSuccess, data }] = useLazyVideoQuery();

  const handleOnClick = (id) => {
    triggerVideoQuery(id);
    setShown(true);
  };

  return (
    <Container>
      {shown && isSuccess && <VideoModal data={data} setShown={setShown} />}
      <StyledImage src={movieImage} width={RESOLUTION.MEDIUM} height='206' />
      <StyledButton
        variant='contained'
        color='success'
        sx={style}
        onClick={() => handleOnClick(id)}
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

const style = {
  position: 'absolute',
  top: '40%',
  left: '30%',
  borderRadius: '10px',
  display: 'none',
};
