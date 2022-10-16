import { useState } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { sortByPopular, sortByRated, sortByUpComing } from 'helpers/sortMovies';

export const Tabs = ({ posts, setPosts }) => {
	const [alignment, setAlignment] = useState('');

	const handleToggleButtons = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	return (
		<Grid container direction='row' justifyContent='flex-end'>
			<StyledToggleButtonGroup
				color='secondary'
				exclusive
				aria-label='Platform'
				value={alignment}
				onChange={handleToggleButtons}
			>
				<ToggleButton
					value='popular'
					onClick={() => sortByPopular(posts, setPosts)}
				>
					Popular
				</ToggleButton>
				<ToggleButton
					value='topRated'
					onClick={() => sortByRated(posts, setPosts)}
				>
					Top rated
				</ToggleButton>
				<ToggleButton
					value='upcoming'
					onClick={() => sortByUpComing(posts, setPosts)}
				>
					Upcoming
				</ToggleButton>
			</StyledToggleButtonGroup>
		</Grid>
	);
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
	background-color: white;
	width: fit-content;
`;