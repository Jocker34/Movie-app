import styled from 'styled-components';

import MoviePlaceholderIMG from 'images/MoviePlaceholder.jpg';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ActorCard } from 'components/ActorCard/ActorCard';

import { LOREM, ACTORS, ALT, MOVIE_PHOTO } from 'constants';
import { translate } from 'helpers/translate';
import { RESOLUTION } from 'constants';

export const MoviePage = ({ language }) => {
	return (
		<Container>
			<Details>
				<div>
					<Raiting>9.9</Raiting>
					<img
						src={MoviePlaceholderIMG}
						alt={ALT.MOVIE}
						width={RESOLUTION.BIG}
					/>
				</div>
				<Information>
					<Description>
						<TextCointainer>
							<span>{translate(language).MOVIE_PAGE.TITLE}</span>
							<span>
								{translate(language).MOVIE_PAGE.MOVIE_TITLE}
							</span>
						</TextCointainer>
						<TextCointainer>
							<span>
								{translate(language).MOVIE_PAGE.OVERVIEW}
							</span>
							<span>{LOREM}</span>
						</TextCointainer>
						<TextCointainer>
							<span>{translate(language).MOVIE_PAGE.DATE}</span>
							<span>2021-05-26</span>
						</TextCointainer>
						<TextCointainer>
							<span>
								{translate(language).MOVIE_PAGE.REVENUE}
							</span>
							<span>$ 42 600 000</span>
						</TextCointainer>
						<TextCointainer>
							<span>
								{translate(language).MOVIE_PAGE.DURATION}
							</span>
							<span>2:14</span>
						</TextCointainer>
					</Description>
					<Actors>
						<h1>
							{translate(language).MOVIE_PAGE.TOP_BILLED_CAST}
						</h1>
						<ActorCardContainer>
							{ACTORS.map((actors) => (
								<ActorCard id={actors.id} />
							))}
						</ActorCardContainer>
					</Actors>
				</Information>
			</Details>
			<Recommendations>
				<h1>{translate(language).MOVIE_PAGE.RECOMMENDATIONS}</h1>
				<MovieCardContainer>
					{MOVIE_PHOTO.map((movie) => (
						<MovieCard key={movie.id} />
					))}
				</MovieCardContainer>
			</Recommendations>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #181414;
	justify-content: center;
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
	justify-content: center;
`;

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
	width: 1150px;
`;

const MovieCardContainer = styled.div`
	display: flex;
`;

const ActorCardContainer = styled.div`
	display: flex;
`;

const TextCointainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 30px;
`;

const Raiting = styled.div`
	position: relative;
	width: 20px;
	padding: 1px 8px 1px 8px;
	background-color: #40b43c;
	bottom: -30px;
	right: 10px;
	border-radius: 4px;
	color: white;
`;
