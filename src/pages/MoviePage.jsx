import React, { useContext } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import { Description } from './moviePage/Description';
import { TopBilledCast } from './moviePage/TopBilledCast';
import { Recommendations } from './moviePage/Recommendations';
import { MovieImage } from './moviePage/MovieImage';
import LanguageContext from 'helpers/languageContext';

export const MoviePage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <Grid container direction='row' justifyContent='center' sx={style}>
        <MovieImage />
        <Information>
          <Description language={language} />
          <TopBilledCast language={language} />
        </Information>
      </Grid>
      <Recommendations language={language} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #181414;
  justify-content: center;
`;

const Information = styled.div`
  margin-left: 30px;
  width: 1150px;
`;

const style = {
  marginTop: '30px',
};
