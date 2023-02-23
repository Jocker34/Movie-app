import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'hooks/useTranslation';
import { IMAGE } from 'constants';

export const Images = ({ data }) => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12}>
      <Typography variant='h4' sx={{ marginBottom: '30px' }}>
        {translate('IMAGES')}
      </Typography>
      <Grid container justifyContent='flexStart' spacing={4}>
        {data.backdrops.slice(0, 8).map((images) => (
          <Grid key={images.file_path} item>
            <img
              alt={'movie'}
              src={`${IMAGE}${images.file_path}`}
              width='240px'
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
