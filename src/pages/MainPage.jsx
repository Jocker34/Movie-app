import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Tabs } from './mainPage/Tabs';
import { MovieCardList } from 'components/MovieCardList';

import {
  useLazyNowPlayingQuery,
  useLazyPopularQuery,
  useLazyTopRatedQuery,
  useLazyUpComingQuery,
} from 'services/endpoints/movies.builder';
import { useTranslation } from 'hooks/useTranslation';

export const MainPage = ({ movies, setMovies }) => {
  const { translate } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentTab, setCurrentTab] = useState('NowPlaying');
  const [
    triggerNowPlayingQuery,
    { isSuccess: fetchNowPlaying, data: nowPlayingData },
  ] = useLazyNowPlayingQuery();
  const [triggerPopular, { isSuccess: fetchPopular, data: popularData }] =
    useLazyPopularQuery();
  const [triggerTopRated, { isSuccess: fetchTopRated, data: topRatedData }] =
    useLazyTopRatedQuery();
  const [triggerUpComing, { isSuccess: fetchUpComing, data: upComingData }] =
    useLazyUpComingQuery();

  const handleOnChange = (e) => {
    switch (currentTab) {
      case 'NowPlaying':
        triggerNowPlayingQuery(e.target.textContent);
        break;
      case 'Popular':
        triggerPopular(e.target.textContent);
        break;
      case 'TopRated':
        triggerTopRated(e.target.textContent);
        break;
      case 'UpComing':
        triggerUpComing(e.target.textContent);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    triggerNowPlayingQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentTab === 'NowPlaying' && fetchNowPlaying) {
      setMovies(nowPlayingData.results);
      setTotalPages(nowPlayingData.total_pages);
      setCurrentPage(nowPlayingData.page);
    }
    if (currentTab === 'Popular' && fetchPopular) {
      setMovies(popularData.results);
      setCurrentPage(popularData.page);
    }
    if (currentTab === 'TopRated' && fetchTopRated) {
      setMovies(topRatedData.results);
      setCurrentPage(topRatedData.page);
    }
    if (currentTab === 'UpComing' && fetchUpComing) {
      setMovies(upComingData.results);
      setCurrentPage(upComingData.page);
    }
  }, [
    currentTab,
    fetchNowPlaying,
    fetchPopular,
    fetchTopRated,
    fetchUpComing,
    nowPlayingData,
    popularData,
    setMovies,
    topRatedData,
    upComingData,
  ]);

  return fetchNowPlaying && movies.length !== 0 ? (
    <Grid
      container
      direction='column'
      sx={{ padding: '0 75px 0 75px', flex: '1' }}
    >
      <Grid item sx={{ paddingTop: '20px' }}>
        <Tabs
          setTotalPages={setTotalPages}
          setMovies={setMovies}
          setCurrentTab={setCurrentTab}
          setCurrentPage={setCurrentPage}
        />
      </Grid>
      <Grid item sx={{ flex: '1' }}>
        <MovieCardList data={movies} />
      </Grid>
      <Grid item>
        <StyledPagination
          count={totalPages}
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
