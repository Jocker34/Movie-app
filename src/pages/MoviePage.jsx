import Grid from '@mui/material/Grid';

import { Description } from './moviePage/Description';
import { TopBilledCast } from './moviePage/TopBilledCast';
import { Movies } from 'components/Movies';
import { MovieImage } from './moviePage/MovieImage';
import { Images } from './moviePage/Images';

const RECOMMENDATIONS = 'RECOMMENDATIONS';

export const MoviePage = () => {
  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        sx={{ marginTop: '30px' }}
        columnSpacing={4}
      >
        <Grid item>
          <MovieImage />
        </Grid>
        <Grid item>
          <Grid container rowSpacing={4} sx={{ maxWidth: '1150px' }}>
            <Grid item>
              <Description />
            </Grid>
            <Grid item>
              <TopBilledCast />
            </Grid>
            <Grid item>
              <Images />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Movies text={RECOMMENDATIONS} />
    </>
  );
};
