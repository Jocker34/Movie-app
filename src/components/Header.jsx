import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LanguageDropdown } from './header/LanguageDropdown ';
import { SerachBar } from './header/SearchBar';

export const Header = ({ setMovies }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/home`);
  };

  return (
    <AppBar position='static'>
      <Toolbar sx={{ padding: '20px 0 20px 0' }}>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <Typography
              onClick={handleOnClick}
              variant='h6'
              noWrap
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              TITLE
            </Typography>
          </Grid>
          <Grid item>
            <SerachBar setMovies={setMovies} />
          </Grid>
          <Grid item>
            <LanguageDropdown />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
