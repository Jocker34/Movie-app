import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { MovieCardList } from './MoviCardList';
import { useTranslation } from 'hooks/useTranslation';

export const Movies = ({ text }) => {
  const { translate } = useTranslation();
  const movies = [...Array(5).keys()];

  return (
    <Grid item xs={12} justifyContent='center'>
      <Grid container justifyContent='center'>
        <Typography variant='h4' sx={{ marginBottom: '30px' }}>
          {translate(text)}
        </Typography>
      </Grid>
      <MovieCardList data={movies} />
    </Grid>
  );
};
