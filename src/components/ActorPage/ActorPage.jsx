import styled from 'styled-components';

import PersonJPG from 'images/Person.jpg';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Image } from 'common/Image/Image';

import { LOREM, PERSON_PHOTOS, MOVIE_PHOTO, RESOLUTION, ALT } from 'constants';
import { translate } from 'helpers/translate';

export const ActorPage = ({ language }) => {
	return (
		<Container>
			<Details>
				<Image
					src={PersonJPG}
					alt={ALT.PERSON}
					width={RESOLUTION.BIG}
				/>
				<Information>
					<Description>
						<TextCointainer>
							<StyledH1>
								{translate(language).ACTOR_PAGE.NAME}
							</StyledH1>
						</TextCointainer>
						<TextCointainer>
							<span>
								{translate(language).ACTOR_PAGE.BIRTHDAY}
							</span>
							<span>2021-05-26</span>
						</TextCointainer>
						<TextCointainer>
							<span>{translate(language).ACTOR_PAGE.PLACE}</span>
							<span>2021-05-26</span>
						</TextCointainer>
						<TextCointainer>
							<span>
								{translate(language).ACTOR_PAGE.BIOGRAPHY}
							</span>
							<span>{LOREM}</span>
						</TextCointainer>
					</Description>
					<Actors>
						<h1>{translate(language).ACTOR_PAGE.PHOTOS}</h1>
						<ActorCardContainer>
							{PERSON_PHOTOS.map((photo) => (
								<Image
									key={photo.id}
									src={PersonJPG}
									alt={ALT.PERSON}
									width={RESOLUTION.MEDIUM}
								/>
							))}
						</ActorCardContainer>
					</Actors>
				</Information>
			</Details>
			<KnownBy>
				<h1>{translate(language).ACTOR_PAGE.KNOWN_BY}</h1>
				<MovieCardContainer>
					{MOVIE_PHOTO.map((movie) => (
						<MovieCard key={movie.id} />
					))}
				</MovieCardContainer>
			</KnownBy>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #181414;
	justify-content: center;
`;

const KnownBy = styled.div`
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

const StyledH1 = styled.h1`
	margin: 0;
`;
