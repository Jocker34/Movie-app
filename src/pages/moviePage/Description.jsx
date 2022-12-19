import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { LOREM } from 'constants';
import { useTranslation } from 'hooks/useTranslation';

export const Description = () => {
  const { translate } = useTranslation();

  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='flex-start'
      rowSpacing={4}
    >
      <Grid item>
        <Typography variant='subtitle2'>{translate('TITLE')}</Typography>
        <Typography variant='h3'>{translate('MOVIE_TITLE')}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('OVERVIEW')}</Typography>
        <Typography variant='body1'>{LOREM}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('DATE')}</Typography>
        <Typography variant='body1'>2021-05-26</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('REVENUE')}</Typography>
        <Typography variant='body1'>$ 42 600 000</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('DURATION')}</Typography>
        <Typography variant='body1'>2:14</Typography>
      </Grid>
    </Grid>
  );
};
