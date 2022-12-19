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
        <Typography variant='h3'>{translate('NAME')}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('BIRTHDAY')}</Typography>
        <Typography variant='body1'>2021-05-26</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('PLACE')}</Typography>
        <Typography variant='body1'>2021-05-26</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('BIOGRAPHY')}</Typography>
        <Typography variant='body1'>{LOREM}</Typography>
      </Grid>
    </Grid>
  );
};
