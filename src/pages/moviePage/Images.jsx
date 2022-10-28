import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'helpers/useTranslation';
import { IMAGES } from 'constants';
import ImageJPG from 'images/Image.jpg';

export const Images = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12}>
      <Typography variant='h4' sx={Bold}>
        {translate('IMAGES')}
      </Typography>
      <Grid container justifyContent='flexStart' spacing={4}>
        {IMAGES.map((images) => (
          <Grid key={images} item>
            <img id={images.id} alt={'movie'} src={ImageJPG} width='240px' />
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
