import Typography from '@mui/material/Typography';

import PersonIMG from 'images/Person.jpg';
import { RESOLUTION } from 'constants';

export const ActorCard = () => {
  return (
    <>
      <img src={PersonIMG} alt='person-placeholder' width={RESOLUTION.MEDIUM} />
      <Typography variant='h6'>Actor Name</Typography>
      <Typography variant='subtitle2'>Played character</Typography>
    </>
  );
};
