import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { calculateTime } from 'helpers/calculateTime';
import { useTranslation } from 'hooks/useTranslation';

export const Description = ({ data }) => {
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
        <Typography variant='h3'>{data.original_title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('OVERVIEW')}</Typography>
        <Typography variant='body1'>{data.overview}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('DATE')}</Typography>
        <Typography variant='body1'>{data.release_date}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('REVENUE')}</Typography>
        <Typography variant='body1'>{`$ ${data.revenue}`}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('DURATION')}</Typography>
        <Typography variant='body1'>{calculateTime(data.runtime)}</Typography>
      </Grid>
    </Grid>
  );
};
