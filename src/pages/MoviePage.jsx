import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import { Description } from './moviePage/Description';
import { TopBilledCast } from './moviePage/TopBilledCast';
import { Recommendations } from './moviePage/Recommendations';
import { MovieImage } from './moviePage/MovieImage';
import { Images } from './moviePage/Images';

export const MoviePage = () => {
  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        sx={{ marginTop: '30px' }}
      >
        <MovieImage />
        <Information>
          <Description />
          <TopBilledCast />
          <Images />
        </Information>
      </Grid>
      <Recommendations />
    </>
  );
};

const Information = styled.div`
  margin: 0 30px 0 30px;
  max-width: 1150px;
`;
