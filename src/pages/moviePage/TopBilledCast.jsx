import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { ActorCard } from 'components/ActorCard';
import { useTranslation } from 'hooks/useTranslation';
import { ACTORS } from 'constants';

export const TopBilledCast = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant='h4' sx={{ marginBottom: '30px' }}>
            {translate('TOP_BILLED_CAST')}
          </Typography>
        </Grid>
        <Grid sx={{ margin: 'auto' }}>
          <Button
            variant='outlined'
            sx={{ color: 'common.white', border: '1px solid white' }}
          >
            Show All
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent='flexStart' spacing={4}>
        {ACTORS.map((actors) => (
          <Grid key={actors.id} item>
            <ActorCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
