import { useState } from 'react';
import Grid from '@mui/material/Grid';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { sortByPopular, sortByRated, sortByUpComing } from 'helpers/sortMovies';

export const Tabs = ({ posts, setPosts }) => {
  const [active, setActive] = useState('');

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
        <ToggleButton
          value='popular'
          onClick={() => sortByPopular(posts, setPosts)}
        >
          Popular
        </ToggleButton>
        <ToggleButton
          value='topRated'
          onClick={() => sortByRated(posts, setPosts)}
        >
          Top rated
        </ToggleButton>
        <ToggleButton
          value='upcoming'
          onClick={() => sortByUpComing(posts, setPosts)}
        >
          Upcoming
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};
