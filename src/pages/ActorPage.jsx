import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import { Description } from './actorPage/Description';
import { KnowBy } from './actorPage/KnowBy';
import { Photos } from './actorPage/Photos';

import PersonJPG from 'images/Person.jpg';
import { RESOLUTION, ALT } from 'constants';

export const ActorPage = () => {
  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        sx={{ marginTop: '30px' }}
      >
        <div>
          <img src={PersonJPG} alt={ALT.PERSON} width={RESOLUTION.BIG} />
        </div>
        <Information>
          <Description />
          <Photos />
        </Information>
      </Grid>
      <KnowBy />
    </>
  );
};

const Information = styled.div`
  margin: 0 30px 0 30px;
  max-width: 1150px;
`;
