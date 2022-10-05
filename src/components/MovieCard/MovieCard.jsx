import styled from 'styled-components';

import { MoviePlaceholder } from './Placeholder/Placeholder';

export const MovieCard = ({ title }) => {
	return (
		<MovieCardContainer>
			<div>
				<Raiting>9.9</Raiting>
				<MoviePlaceholder />
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
	margin: 30px 25px 0 25px;
	width: 150px;
`;

const Raiting = styled.div`
	position: relative;
	width: 20px;
	padding: 1px 8px 1px 8px;
	background-color: #40b43c;
	bottom: -30px;
	right: 10px;
	border-radius: 4px;
`;
