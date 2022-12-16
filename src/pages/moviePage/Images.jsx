import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'hooks/useTranslation';
import ImageJPG from 'images/Image.jpg';

export const Images = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12}>
      <Typography variant='h4' sx={{ marginBottom: '30px' }}>
        {translate('IMAGES')}
      </Typography>
      <Grid container justifyContent='flexStart' spacing={4}>
        {Array.from(Array(8).keys()).map((images) => (
          <Grid key={images} item>
            <img alt={'movie'} src={ImageJPG} width='240px' />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
