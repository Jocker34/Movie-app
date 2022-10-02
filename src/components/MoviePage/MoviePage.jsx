import styled from 'styled-components';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ActorCard } from 'components/ActorCard/ActorCard';

import { LOREM } from 'constants';

export const MoviePage = () => {
	return (
		<Container>
			<Details>
				<ImageCoontainer>
					<img
						src={MoviePlaceholderIMG}
						alt='movie-placeholder'
						width='250px'
					/>
				</ImageCoontainer>
				<Information>
					<Description>
						<span>Title:</span>
						<h1>Movie Title</h1>
						<span>Overview:</span>
						<span>{LOREM}</span>
						<span>Release date:</span>
						<span>2021-05-26</span>
						<span>Revenue:</span>
						<span>$ 42 600 000</span>
						<span>Duration:</span>
						<span>2:14</span>
					</Description>
					<Actors>
						<h1>Top Billed Cast</h1>
						<ActorCardContainer>
							<ActorCard></ActorCard>
							<ActorCard></ActorCard>
							<ActorCard></ActorCard>
							<ActorCard></ActorCard>
							<ActorCard></ActorCard>
							<ActorCard></ActorCard>
						</ActorCardContainer>
					</Actors>
					<Images></Images>
				</Information>
			</Details>
			<Recommendations>
				<h1>RECOMMENDATION</h1>
				<MovieCardContainer>
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
				</MovieCardContainer>
			</Recommendations>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #181414;
`;

const Recommendations = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	align-items: center;
`;

const Details = styled.div`
	display: flex;
	margin: 20px 0 0 85px;
`;

const Images = styled.div``;

const Actors = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
`;

const Information = styled.div`
	margin-left: 30px;
`;

const ImageCoontainer = styled.div``;

const MovieCardContainer = styled.div`
	display: flex;
`;

const ActorCardContainer = styled.div`
	display: flex;
`;
