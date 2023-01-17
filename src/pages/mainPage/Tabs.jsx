import { useState } from 'react';
import Grid from '@mui/material/Grid';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {
  useLazyPopularQuery,
  useLazyTopRatedQuery,
  useLazyUpComingQuery,
} from 'services/endpoints/movies.builder';

export const Tabs = () => {
  const [active, setActive] = useState('');
  const [triggerPopularMovies] = useLazyPopularQuery();
  const [triggerTopRateMovies] = useLazyTopRatedQuery();
  const [triggerUpCominMovies] = useLazyUpComingQuery();

  const handleToggleButtons = (event, active) => {
    setActive(active);
  };

  return (
    <Grid container direction='row' justifyContent='flex-end'>
      <ToggleButtonGroup
        color='secondary'
        exclusive
        aria-label='Platform'
        value={active}
        onChange={handleToggleButtons}
      >
        <ToggleButton value='popular' onClick={() => triggerPopularMovies()}>
          Popular
        </ToggleButton>
        <ToggleButton value='topRated' onClick={() => triggerTopRateMovies()}>
          Top rated
        </ToggleButton>
        <ToggleButton value='upcoming' onClick={() => triggerUpCominMovies()}>
          Upcoming
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};
