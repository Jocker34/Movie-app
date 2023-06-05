import { useNavigate } from 'react-router';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PersonIMG from 'images/Person.jpg';
import { RESOLUTION, IMAGE } from 'constants';

export const ActorCard = ({ name, character, image, id }) => {
  const navigate = useNavigate();

  const actorImage = image ? `${IMAGE}${image}` : PersonIMG;

  const handleOnClick = () => {
    navigate(`/actor/${id}`);
  };
  return (
    <Grid maxWidth={'150px'}>
      <img
        src={actorImage}
        alt='person-placeholder'
        width={RESOLUTION.MEDIUM}
      />
      <Typography
        onClick={handleOnClick}
        variant='h6'
        sx={{
          '&:hover': {
            cursor: 'pointer',
            color: 'success.light',
          },
        }}
      >
        {name}
      </Typography>
      <Typography variant='subtitle2'>{character}</Typography>
    </Grid>
  );
};
