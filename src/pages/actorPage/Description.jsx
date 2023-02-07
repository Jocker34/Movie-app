import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
        <Typography variant='h3'>{data.name}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('BIRTHDAY')}</Typography>
        <Typography variant='body1'>{data.birthday}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('PLACE')}</Typography>
        <Typography variant='body1'>{data.place_of_birth}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2'>{translate('BIOGRAPHY')}</Typography>
        <Typography variant='body1'>{data.biography}</Typography>
      </Grid>
    </Grid>
  );
};
