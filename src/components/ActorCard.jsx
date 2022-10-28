import styled from 'styled-components';
import Typography from '@mui/material/Typography';

import PersonIMG from 'images/Person.jpg';
import { RESOLUTION } from 'constants';

export const ActorCard = () => {
  return (
    <Container>
      <img src={PersonIMG} alt='person-placeholder' width={RESOLUTION.MEDIUM} />
      <div>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          Actor Name
        </Typography>
        <Typography variant='subtitle2'>Played character</Typography>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: white;
`;
