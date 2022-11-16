import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import { Description } from './actorPage/Description';
import { KnowBy } from './actorPage/KnowBy';
import { Photos } from './actorPage/Photos';

import PersonJPG from 'images/Person.jpg';
import { RESOLUTION, ALT } from 'constants';

export const ActorPage = () => {
  return (
    <Container>
      <Grid container direction='row' justifyContent='center' sx={style}>
        <div>
          <img src={PersonJPG} alt={ALT.PERSON} width={RESOLUTION.BIG} />
        </div>
        <Information>
          <Description />
          <Photos />
        </Information>
      </Grid>
      <KnowBy />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Information = styled.div`
  margin: 0 30px 0 30px;
  max-width: 1150px;
`;

const style = {
  marginTop: '30px',
};
