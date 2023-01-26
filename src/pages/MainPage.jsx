import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Tabs } from './mainPage/Tabs';
import { MovieCardList } from 'components/MovieCardList';

import { useTranslation } from 'hooks/useTranslation';
import { useSelector } from 'react-redux';
import { getMovies } from 'store/selectors';

export const MainPage = () => {
  const { translate } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const movies = useSelector(getMovies);

  const postsPerPage = 18;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const count = Math.ceil(movies.length / postsPerPage);

  const handleOnChange = (e) => {
    setCurrentPage(parseInt(e.target.textContent));
  };

  const slicedMovies = movies.slice(indexOfFirstPost, indexOfLastPost);

  return movies.length !== 0 ? (
    <Grid
      container
      direction='column'
      sx={{ padding: '0 75px 0 75px', flex: '1' }}
    >
      <Grid item sx={{ paddingTop: '20px' }}>
        <Tabs />
      </Grid>
      <Grid item sx={{ flex: '1' }}>
        <MovieCardList data={slicedMovies} />
      </Grid>
      <Grid item>
        <StyledPagination
          count={count}
          onChange={handleOnChange}
          page={currentPage}
          size='large'
          hidePrevButton
          hideNextButton
        />
      </Grid>
    </Grid>
  ) : (
    <Grid
      container
      justifyContent='center'
      sx={{ color: 'common.white', marginTop: '20px' }}
    >
      <Typography variant='h4'>{translate('NO_RESULTS')}</Typography>
    </Grid>
  );
};

const StyledPagination = styled(Pagination)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  button: {
    color: theme.palette.common.white,
  },
  '& .MuiPaginationItem-root': {
    '&.Mui-selected': {
      backgroundColor: theme.palette.success.light,
    },
  },
}));
