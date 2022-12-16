import Grid from '@mui/material/Grid';

import { Description } from './actorPage/Description';
import { Movies } from 'components/Movies';
import { Photos } from './actorPage/Photos';

import PersonJPG from 'images/Person.jpg';
import { RESOLUTION, ALT } from 'constants';

const KNOWN_BY = 'KNOWN_BY';

export const ActorPage = () => {
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
          <img src={PersonJPG} alt={ALT.PERSON} width={RESOLUTION.BIG} />
        </Grid>
        <Grid item>
          <Grid container rowSpacing={4} sx={{ maxWidth: '1150px' }}>
            <Grid item>
              <Description />
            </Grid>
            <Grid item>
              <Photos />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Movies text={KNOWN_BY} />
    </>
  );
};
