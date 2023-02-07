import Grid from '@mui/material/Grid';
import { MovieCard } from 'components/movieCardList/MovieCard';

export const MovieCardList = ({ data }) => {
  return (
    <Grid
      container
      justifyContent='center'
      spacing={5}
      sx={{ paddingTop: '20px' }}
    >
      {data.map((post) => (
        <Grid key={post.id || post} item>
          <MovieCard
            title={post?.original_title}
            rate={post?.vote_average}
            id={post?.id}
            image={post?.poster_path}
            genres={post?.genre_ids}
          />
        </Grid>
      ))}
    </Grid>
  );
};
