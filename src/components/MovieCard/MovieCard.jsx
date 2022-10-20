import styled from 'styled-components';
import Badge from '@mui/material/Badge';

import Typography from '@mui/material/Typography';
import { MoviePlaceholder } from './Placeholder/Placeholder';

export const MovieCard = ({ title, className }) => {
  return (
    <Container className={className}>
      <div>
        <StyledBadge
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          badgeContent={9.9}
          color='success'
        >
          <MoviePlaceholder />
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

const Container = styled.div`
  color: white;
  width: 150px;
`;

const TextCointainer = styled.div`
  padding-top: 10px;
`;

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    borderRadius: '4px',
    top: '15px',
    left: '8px',
    backgroundColor: '#40b43c',
  },
}));
