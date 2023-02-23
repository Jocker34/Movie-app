import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PersonJPG from 'images/Person.jpg';
import { useTranslation } from 'hooks/useTranslation';
import { RESOLUTION, ALT, IMAGE } from 'constants';

export const Photos = ({ data }) => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12}>
      <Typography variant='h4' sx={{ marginBottom: '30px' }}>
        {translate('PHOTOS')}
      </Typography>
      <Grid container justifyContent='flexStart' spacing={4}>
        {data.map((photo) => (
          <Grid key={photo} item>
            <img
              src={photo.file_path ? `${IMAGE}${photo.file_path}` : PersonJPG}
              alt={ALT.PERSON}
              width={RESOLUTION.MEDIUM}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
