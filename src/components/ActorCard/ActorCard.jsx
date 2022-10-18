import styled from 'styled-components';

import PersonIMG from 'images/Person.jpg';
import { RESOLUTION } from 'constants';

export const ActorCard = () => {
  return (
    <ActorCardContainer>
      <img src={PersonIMG} alt='person-placeholder' width={RESOLUTION.MEDIUM} />
      <div>
        <h2>Actor Name</h2>
        <h3>Played character</h3>
      </div>
    </ActorCardContainer>
  );
};

const ActorCardContainer = styled.div`
  color: white;
`;
