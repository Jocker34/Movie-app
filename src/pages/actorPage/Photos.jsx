import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PersonJPG from 'images/Person.jpg';
import { PERSON_PHOTOS, RESOLUTION, ALT } from 'constants';
import { translate } from 'helpers/translate';

export const Photos = ({ language }) => {
  return (
    <Grid item xs={12}>
      <Typography variant='h4' sx={Bold}>
        {translate(language).ACTOR_PAGE.PHOTOS}
      </Typography>
      <Grid container justifyContent='flexStart' spacing={4}>
        {PERSON_PHOTOS.map((photo) => (
          <Grid key={photo} item>
            <img
              key={photo.id}
              src={PersonJPG}
              alt={ALT.PERSON}
              width={RESOLUTION.MEDIUM}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Bold = {
  fontWeight: 'bold',
  m: 1,
  margin: '0 0 30px 0',
  color: 'white',
};
