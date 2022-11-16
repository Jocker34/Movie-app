import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { MovieCard } from 'components/MovieCard';

import { mockMoviePhoto } from 'mocks';
import { useTranslation } from 'hooks/useTranslation';

export const Recommendations = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12} justifyContent='center'>
      <Typography variant='h4' sx={style}>
        {translate('RECOMMENDATIONS')}
      </Typography>
      <Grid container justifyContent='center' spacing={3}>
        {mockMoviePhoto.map((movie) => (
          <Grid key={movie} item>
            <MovieCard key={movie.id} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const style = {
  fontWeight: 'bold',
  m: 1,
  margin: '0 0 30px 0',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
};
