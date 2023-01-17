import Grid from '@mui/material/Grid';
import { MovieCard } from 'components/MovieCard';

export const MovieCardList = ({ data }) => {
  return (
    <Grid
      container
      justifyContent='center'
      spacing={5}
      sx={{ paddingTop: '20px' }}
    >
      {data.map((post) => (
        <Grid key={post.id} item>
          <MovieCard title={post?.original_title} rate={post?.vote_average} />
        </Grid>
      ))}
    </Grid>
  );
};
