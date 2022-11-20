import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import Typography from '@mui/material/Typography';
import { MoviePlaceholder } from './movieCard/Placeholder';

export const MovieCard = ({ title, className, image, rate }) => {
  return (
    <Container className={className}>
      <div>
        <StyledBadge
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          badgeContent={rate}
          color='success'
        >
          <MoviePlaceholder image={image} />
        </StyledBadge>
      </div>
      <div>
        <TextCointainer>
          <Typography variant='subtitle1'>{title}</Typography>
        </TextCointainer>
        <TextCointainer>
          <Typography variant='subtitle2' sx={{ fontSize: 'small' }}>
            Genre - 1
          </Typography>
        </TextCointainer>
      </div>
    </Container>
  );
};

const Container = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  width: '150px',
}));

const TextCointainer = styled('div')(() => ({
  paddingTop: '10px',
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    borderRadius: '4px',
    top: '15px',
    left: '8px',
    backgroundColor: theme.palette.success.light,
  },
}));
