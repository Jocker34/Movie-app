import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LanguageDropdown } from './header/LanguageDropdown ';
import { SerachBar } from './header/SearchBar';

export const Header = ({ setSearch }) => {
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
            <Typography variant='h6' noWrap>
              TITLE
            </Typography>
          </Grid>
          <Grid item>
            <SerachBar setSearch={setSearch} />
          </Grid>
          <Grid item>
            <LanguageDropdown />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
