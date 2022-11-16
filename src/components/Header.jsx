import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { LanguageDropdown } from './header/LanguageDropdown ';
import { SerachBar } from './header/SearchBar';

export const Header = ({ setSearch }) => {
  return (
    <StyledAppBar>
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
          <LanguageDropdown />
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  position: 'static',
}));
