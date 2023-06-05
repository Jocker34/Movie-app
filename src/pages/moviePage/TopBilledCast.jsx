import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { ActorCard } from 'components/ActorCard';
import { useTranslation } from 'hooks/useTranslation';
import { useState } from 'react';

export const TopBilledCast = ({ data }) => {
  const [numberOfActors, setNumberOfActors] = useState(6);
  const { translate } = useTranslation();

  const handleOnClick = () => {
    numberOfActors === 6 ? setNumberOfActors(undefined) : setNumberOfActors(6);
  };

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant='h4' sx={{ marginBottom: '30px' }}>
            {translate('TOP_BILLED_CAST')}
          </Typography>
        </Grid>
        <Grid sx={{ margin: 'auto' }}>
          {data.cast.length >= 6 && (
            <Button
              onClick={handleOnClick}
              variant='outlined'
              sx={{ color: 'common.white', border: '1px solid white' }}
            >
              Show All
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid container justifyContent='flexStart' spacing={4}>
        {data.cast.slice(0, numberOfActors).map((actors) => (
          <Grid key={actors.id} item>
            <ActorCard
              name={actors.name}
              character={actors.character}
              image={actors.profile_path}
              id={actors.id}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
