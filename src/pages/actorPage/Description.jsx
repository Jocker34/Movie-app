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
        <Typography variant='h3'>{translate('NAME')}</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>{translate('BIRTHDAY')}</Typography>
        <Typography variant='body1'>2021-05-26</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>{translate('PLACE')}</Typography>
        <Typography variant='body1'>2021-05-26</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>{translate('BIOGRAPHY')}</Typography>
        <Typography variant='body1'>{LOREM}</Typography>
      </TextCointainer>
    </Grid>
  );
};

const TextCointainer = styled.div`
  padding-bottom: 30px;
`;
