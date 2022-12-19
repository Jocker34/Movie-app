import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MoviePlaceholder } from './movieCard/Placeholder';

export const MovieCard = ({ title, rate }) => {
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
        <MoviePlaceholder />
      </StyledBadge>
      <CardContent>
        <Typography variant='subtitle1'>{title}</Typography>
        <Typography variant='subtitle2' sx={{ fontSize: 'small' }}>
          Genre - 1
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
