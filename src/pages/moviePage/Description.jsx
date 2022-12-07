import styled from 'styled-components';
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
    >
      <TextCointainer>
        <Typography variant='subtitle2'>{translate('TITLE')}</Typography>
        <Typography variant='h3'>{translate('MOVIE_TITLE')}</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>{translate('OVERVIEW')}</Typography>
        <Typography variant='body1'>{LOREM}</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>{translate('DATE')}</Typography>
        <Typography variant='body1'>2021-05-26</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>{translate('REVENUE')}</Typography>
        <Typography variant='body1'>$ 42 600 000</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>{translate('DURATION')}</Typography>
        <Typography variant='body1'>2:14</Typography>
      </TextCointainer>
    </Grid>
  );
};

const TextCointainer = styled.div`
  padding-bottom: 30px;
`;
