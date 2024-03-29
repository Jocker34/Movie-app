import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useTranslation } from 'hooks/useTranslation';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {
  useLazySearchQuery,
  useLazyNowPlayingQuery,
} from 'services/endpoints/movies.builder';

export const SerachBar = ({ setMovies }) => {
  const { translate } = useTranslation();
  const [emptySearch, setEmptySerach] = useState(true);
  const [
    triggerSearchMovies,
    { isSuccess: fetchSearchMovies, data: searchMoviesData },
  ] = useLazySearchQuery();
  const [
    triggerNowPlayingMovies,
    { isSuccess: fetchNowPlayingMovies, data: nowPlayingMoviesData },
  ] = useLazyNowPlayingQuery();

  const handleOnChange = (e) => {
    if (!e.target.value) {
      setEmptySerach(true);
      triggerNowPlayingMovies();
    }
  };

  const searchOnPressEnter = (e) => {
    if (e.key === 'Enter') {
      setEmptySerach(false);
      triggerSearchMovies(e.target.value);
    }
  };

  useEffect(() => {
    if (fetchSearchMovies && !emptySearch) {
      setMovies(searchMoviesData.results);
      return;
    }
    if (fetchNowPlayingMovies) {
      setMovies(nowPlayingMoviesData.results);
    }
  }, [
    emptySearch,
    fetchNowPlayingMovies,
    fetchSearchMovies,
    nowPlayingMoviesData,
    searchMoviesData,
    setMovies,
  ]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={translate('SERACH')}
        inputProps={{ 'aria-label': 'search' }}
        onKeyDown={searchOnPressEnter}
        onChange={handleOnChange}
      />
    </Search>
  );
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
}));
