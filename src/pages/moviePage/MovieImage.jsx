import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import MoviePlaceholderJPG from 'images/MoviePlaceholder.jpg';
import { ALT, RESOLUTION, IMAGE } from 'constants';

export const MovieImage = ({ data }) => {
  const movieImage = data.poster_path
    ? `${IMAGE}${data.poster_path}`
    : MoviePlaceholderJPG;

  return (
    <>
      <StyledBadge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        badgeContent={9.9}
        color='success'
      >
        <img src={movieImage} alt={ALT.MOVIE} width={RESOLUTION.BIG} />
      </StyledBadge>
    </>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    borderRadius: '4px',
    top: '15px',
    left: '8px',
    backgroundColor: theme.palette.success.light,
  },
}));
