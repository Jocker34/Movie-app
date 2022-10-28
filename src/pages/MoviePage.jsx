import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import { Description } from './moviePage/Description';
import { TopBilledCast } from './moviePage/TopBilledCast';
import { Recommendations } from './moviePage/Recommendations';
import { MovieImage } from './moviePage/MovieImage';
import { Images } from './moviePage/Images';

export const MoviePage = () => {
  return (
    <Container>
      <Grid container direction='row' justifyContent='center' sx={style}>
        <MovieImage />
        <Information>
          <Description />
          <TopBilledCast />
          <Images />
        </Information>
      </Grid>
      <Recommendations />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #181414;
  justify-content: center;
`;

const Information = styled.div`
  margin: 0 30px 0 30px;
  max-width: 1150px;
`;

const style = {
  marginTop: '30px',
};
