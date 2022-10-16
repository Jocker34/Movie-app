import styled from 'styled-components';
import Badge from '@mui/material/Badge';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';

import { ALT } from 'constants';
import { RESOLUTION } from 'constants';

export const MovieImage = () => {
	return (
		<div>
			<StyledBadge
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				badgeContent={9.9}
				color='success'
			>
				<img
					src={MoviePlaceholderIMG}
					alt={ALT.MOVIE}
					width={RESOLUTION.BIG}
				/>
			</StyledBadge>
		</div>
	);
};

const StyledBadge = styled(Badge)(() => ({
	'& .MuiBadge-badge': {
		borderRadius: '4px',
		top: '15px',
		left: '8px',
		backgroundColor: '#40b43c',
	},
}));