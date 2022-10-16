import React, { useContext } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import { Image } from 'common/Image/Image';
import { Description } from './actorPage/Description';
import { KnowBy } from './actorPage/KnowBy';
import { Photos } from './actorPage/Photos';
import LanguageContext from 'helpers/languageContext';

import PersonJPG from 'images/Person.jpg';
import { RESOLUTION, ALT } from 'constants';

export const ActorPage = () => {
	const { language } = useContext(LanguageContext);
	return (
		<Container>
			<Grid container direction='row' justifyContent='center' sx={style}>
				<StyledImage
					src={PersonJPG}
					alt={ALT.PERSON}
					width={RESOLUTION.BIG}
				/>
				<Information>
					<Description language={language} />
					<Photos />
				</Information>
			</Grid>
			<KnowBy />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #181414;
	justify-content: center;
`;

const Information = styled.div`
	margin-left: 30px;
	width: 1150px;
`;

const StyledImage = styled(Image)`
	margin: 0 15px 0 15px;
`;

const style = {
	marginTop: '30px',
};
