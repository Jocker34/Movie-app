import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { MovieCardList } from './MovieCardList';
import { useTranslation } from 'hooks/useTranslation';

export const Movies = ({ text, data }) => {
  const { translate } = useTranslation();
  const movies = data.slice(0, 5);

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
