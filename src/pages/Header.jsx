import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DropdownBar } from './header/DropdownBar';
import { SerachBar } from './header/SearchBar';

export const Header = ({ setSearch }) => {
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: '#282424',
      }}
    >
      <Toolbar>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' noWrap>
            TITLE
          </Typography>
          <SerachBar setSearch={setSearch} />
          <DropdownBar />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
