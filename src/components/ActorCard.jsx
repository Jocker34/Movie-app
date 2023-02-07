import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PersonIMG from 'images/Person.jpg';
import { RESOLUTION, IMAGE } from 'constants';

export const ActorCard = ({ name, character, image }) => {
  const actorImage = image ? `${IMAGE}${image}` : PersonIMG;
  return (
    <Grid maxWidth={'150px'}>
      <img
        src={actorImage}
        alt='person-placeholder'
        width={RESOLUTION.MEDIUM}
      />
      <Typography variant='h6'>{name}</Typography>
      <Typography variant='subtitle2'>{character}</Typography>
    </Grid>
  );
};
