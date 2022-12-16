import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PersonJPG from 'images/Person.jpg';
import { useTranslation } from 'hooks/useTranslation';
import { RESOLUTION, ALT } from 'constants';

export const Photos = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12}>
      <Typography variant='h4' sx={{ marginBottom: '30px' }}>
        {translate('PHOTOS')}
      </Typography>
      <Grid container justifyContent='flexStart' spacing={4}>
        {Array.from(Array(4).keys()).map((photo) => (
          <Grid key={photo} item>
            <img src={PersonJPG} alt={ALT.PERSON} width={RESOLUTION.MEDIUM} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
