import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'hooks/useTranslation';
import { mockImages } from 'mocks';
import ImageJPG from 'images/Image.jpg';

export const Images = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12}>
      <Typography variant='h4' sx={{ marginBottom: '30px' }}>
        {translate('IMAGES')}
      </Typography>
      <Grid container justifyContent='flexStart' spacing={4}>
        {mockImages.map((images) => (
          <Grid key={images.id} item>
            <img alt={'movie'} src={ImageJPG} width='240px' />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
