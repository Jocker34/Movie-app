import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LanguageContext from 'helpers/languageContext';
import { DropdownBar } from './header/DropdownBar';
import { translate } from 'helpers/translate';

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

export const Header = ({ setSearch }) => {
	const { language } = useContext(LanguageContext);
	const handleOnChange = (e) => {
		e.target.value ? setSearch(e.target.value) : setSearch('');
	};
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
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder={translate(language).INPUT.SERACH}
							inputProps={{ 'aria-label': 'search' }}
							onChange={handleOnChange}
						/>
					</Search>
					<DropdownBar />
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
