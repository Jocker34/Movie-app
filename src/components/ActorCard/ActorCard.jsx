import styled from 'styled-components';

import PersonIMG from 'images/Person.jpg';

export const ActorCard = () => {
	return (
		<ActorCardContainer>
			<Image>
				<img src={PersonIMG} alt='person-placeholder' width='150px' />
			</Image>
			<Description>
				<h2>Actor Name</h2>
				<h3>Played character</h3>
			</Description>
		</ActorCardContainer>
	);
};

const ActorCardContainer = styled.div`
	color: white;
	margin: 0 20px 0 20px;
`;

const Image = styled.div``;

const Description = styled.div``;
