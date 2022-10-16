import styled from 'styled-components';
import Badge from '@mui/material/Badge';

import { MoviePlaceholder } from './Placeholder/Placeholder';

export const MovieCard = ({ title, className }) => {
	return (
		<MovieCardContainer className={className}>
			<div>
				<StyledBadge
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					badgeContent={9.9}
					color='success'
				>
					<MoviePlaceholder />
				</StyledBadge>
			</div>
			<div>
				<h5>{title}</h5>
				<h6>Genre - 1</h6>
			</div>
		</MovieCardContainer>
	);
};

const MovieCardContainer = styled.div`
	color: white;
	width: 150px;
`;

const StyledBadge = styled(Badge)(() => ({
	'& .MuiBadge-badge': {
		borderRadius: '4px',
		top: '15px',
		left: '8px',
		backgroundColor: '#40b43c',
	},
}));
