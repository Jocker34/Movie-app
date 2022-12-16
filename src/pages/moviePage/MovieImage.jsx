import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';

import { ALT } from 'constants';
import { RESOLUTION } from 'constants';

export const MovieImage = () => {
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
        <img src={MoviePlaceholderIMG} alt={ALT.MOVIE} width={RESOLUTION.BIG} />
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
