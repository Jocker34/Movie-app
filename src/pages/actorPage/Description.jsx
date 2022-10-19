import { useContext } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { translate } from 'helpers/translate';
import LanguageContext from 'helpers/languageContext';
import { LOREM } from 'constants';

export const Description = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='flex-start'
      sx={style}
    >
      <TextCointainer>
        <Typography variant='h3'>
          {translate(language).ACTOR_PAGE.NAME}
        </Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>
          {translate(language).ACTOR_PAGE.BIRTHDAY}
        </Typography>
        <Typography variant='body1'>2021-05-26</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>
          {translate(language).ACTOR_PAGE.PLACE}
        </Typography>
        <Typography variant='body1'>2021-05-26</Typography>
      </TextCointainer>
      <TextCointainer>
        <Typography variant='subtitle2'>
          {translate(language).ACTOR_PAGE.BIOGRAPHY}
        </Typography>
        <Typography variant='body1'>{LOREM}</Typography>
      </TextCointainer>
    </Grid>
  );
};

const TextCointainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

const style = {
  color: 'white',
};
