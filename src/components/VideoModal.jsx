import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import { useTranslation } from 'hooks/useTranslation';

import { YOUTUBE } from 'constants';

export const VideoModal = ({ src, data, setShown }) => {
  const { translate } = useTranslation();

  const trailerIsAvailable = data.results[0];
  return (
    <Grid container sx={style}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardActions>
              <CloseIcon onClick={() => setShown(false)} />
            </CardActions>
            <CardContent>
              {!!trailerIsAvailable ? (
                <iframe
                  title={src}
                  allowFullScreen
                  height='315px'
                  src={`${YOUTUBE}${data.results[0].key}`}
                  width='560px'
                />
              ) : (
                <Typography variant='h4'>
                  {translate('TRAILER_NO_AVAILABLE')}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

const style = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 2,
};
