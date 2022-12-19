import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { topRatedMovies } from 'topRatedMovies';
import { Tabs } from './mainPage/Tabs';
import { MovieCardList } from 'components/MoviCardList';

import { searchMovie } from 'helpers/serarchMovie';
import { useTranslation } from 'hooks/useTranslation';

export const MainPage = ({ search }) => {
  const { translate } = useTranslation();
  const [posts, setPosts] = useState(topRatedMovies);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 18;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const count = Math.ceil(posts.length / postsPerPage);

  const handleOnChange = (e) => {
    setCurrentPage(parseInt(e.target.textContent));
  };

  const resultOfSearch = searchMovie(
    posts,
    search,
    indexOfFirstPost,
    indexOfLastPost
  );

  return resultOfSearch.length !== 0 ? (
    <Grid container direction='column' sx={{ padding: '0 75px 0 75px' }}>
      <Grid item sx={{ paddingTop: '20px' }}>
        <Tabs posts={posts} setPosts={setPosts} />
      </Grid>
      <Grid item>
        <MovieCardList data={resultOfSearch} />
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
