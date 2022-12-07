import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { MovieCard } from 'components/MovieCard';
import { useTranslation } from 'hooks/useTranslation';

import { mockMoviePhoto } from 'mocks';

export const KnowBy = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12} justifyContent='center'>
      <Grid container justifyContent='center'>
        <Typography variant='h4' sx={{ marginBottom: '30px' }}>
          {translate('KNOWN_BY')}
        </Typography>
      </Grid>
      <Grid container justifyContent='center' spacing={3}>
        {mockMoviePhoto.map((movie) => (
          <Grid key={movie.id} item>
            <MovieCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
