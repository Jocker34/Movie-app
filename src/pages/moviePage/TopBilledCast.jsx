import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { ActorCard } from 'components/ActorCard/ActorCard';
import { useTranslation } from 'helpers/useTranslation';
import { ACTORS } from 'constants';

export const TopBilledCast = () => {
  const { translate } = useTranslation();

  return (
    <Grid item xs={12}>
      <Typography variant='h4' sx={Bold}>
        {translate('TOP_BILLED_CAST')}
      </Typography>
      <Grid container justifyContent='flexStart' spacing={4}>
        {ACTORS.map((actors) => (
          <Grid key={actors} item>
            <ActorCard id={actors.id} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Bold = {
  fontWeight: 'bold',
  m: 1,
  margin: '0 0 30px 0',
  color: 'white',
};
