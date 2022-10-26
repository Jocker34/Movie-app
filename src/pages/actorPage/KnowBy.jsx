import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { useTranslation } from 'helpers/useTranslation';

import { MOVIE_PHOTO } from 'constants';

export const KnowBy = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12} justifyContent='center'>
      <Typography variant='h4' sx={style}>
        {translate('KNOWN_BY')}
      </Typography>
      <Grid container justifyContent='center' spacing={3}>
        {MOVIE_PHOTO.map((movie) => (
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
