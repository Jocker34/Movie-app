import * as React from 'react';
import { useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useLazyMovieGenresQuery } from 'services/endpoints/movies.builder';
import { MoviePlaceholder } from '../movieCard/Placeholder';
import { showGenres } from 'helpers/showGenres';
import { useEffect } from 'react';

export const MovieCard = ({ title, rate, id, image, genres }) => {
  const navigate = useNavigate();

  const [
    triggerMovieGenres,
    { isSuccess: fetchMovieGenres, data: movieGenresData },
  ] = useLazyMovieGenresQuery();

  const handleOnClick = () => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    triggerMovieGenres();
  }, [triggerMovieGenres]);
  return (
    <Card variant='outlined' sx={style}>
      <StyledBadge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        badgeContent={rate}
        color='success'
      >
        <MoviePlaceholder id={id} image={image} />
      </StyledBadge>
      <CardContent>
        <Typography
          onClick={handleOnClick}
          variant='subtitle1'
          sx={{
            '&:hover': {
              cursor: 'pointer',
              color: 'success.light',
            },
          }}
        >
          {title}
        </Typography>
        <Typography variant='subtitle2' sx={{ fontSize: 'small' }}>
          {fetchMovieGenres && showGenres(genres, movieGenresData.genres)}
        </Typography>
      </CardContent>
    </Card>
  );
};

const style = {
  width: 150,
  backgroundColor: 'transparent',
  color: 'common.white',
  maxHeight: '370px',
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    borderRadius: '4px',
    top: '15px',
    left: '8px',
    backgroundColor: theme.palette.success.light,
  },
}));
