import styled from 'styled-components';

import { MoviePlaceholder } from './Placeholder/Placeholder';

export const MovieCard = ({ title }) => {
	return (
		<MovieCardContainer>
			<Image>
				<Test>9.9</Test>
				<MoviePlaceholder />
			</Image>
			<Description>
				<h5>{title}</h5>
				<h6>Genre - 1</h6>
			</Description>
		</MovieCardContainer>
	);
};

const MovieCardContainer = styled.div`
	color: white;
	margin: 30px 25px 0 25px;
	width: 150px;
`;

const Image = styled.div``;

const Description = styled.div``;

const Test = styled.div`
	position: relative;
	width: 20px;
	padding: 1px 8px 1px 8px;
	background-color: #40b43c;
	bottom: -30px;
	right: 10px;
	border-radius: 4px;
`;
