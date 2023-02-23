import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {
  useLazyPopularQuery,
  useLazyTopRatedQuery,
  useLazyUpComingQuery,
} from 'services/endpoints/movies.builder';

export const Tabs = ({
  setMovies,
  setCurrentTab,
  setCurrentPage,
  setTotalPages,
}) => {
  const [active, setActive] = useState('');
  const [triggerPopular, { data: popularData }] = useLazyPopularQuery();
  const [triggerTopRated, { data: topRatedData }] = useLazyTopRatedQuery();
  const [triggerUpComing, { data: upComingData }] = useLazyUpComingQuery();

  const handleToggleButtons = (event, active) => {
    switch (active) {
      case 'Popular':
        setMovies(popularData.results);
        setCurrentTab(active);
        setTotalPages(popularData.total_pages);
        setCurrentPage(popularData.page);
        break;
      case 'TopRated':
        setMovies(topRatedData.results);
        setCurrentTab(active);
        setTotalPages(topRatedData.total_pages);
        setCurrentPage(topRatedData.page);
        break;
      case 'UpComing':
        setMovies(upComingData.results);
        setCurrentTab(active);
        setTotalPages(upComingData.total_pages);
        setCurrentPage(upComingData.page);
        break;
      default:
        break;
    }
    setActive(active);
  };

  useEffect(() => {
    triggerPopular();
    triggerTopRated();
    triggerUpComing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container direction='row' justifyContent='flex-end'>
      <ToggleButtonGroup
        color='secondary'
        exclusive
        aria-label='Platform'
        value={active}
        onChange={handleToggleButtons}
      >
        <ToggleButton value='Popular'>Popular</ToggleButton>
        <ToggleButton value='TopRated'>Top rated</ToggleButton>
        <ToggleButton value='UpComing'>Upcoming</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};
