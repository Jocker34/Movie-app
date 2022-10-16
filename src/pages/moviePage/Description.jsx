import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { translate } from 'helpers/translate';
import { LOREM } from 'constants';

export const Description = ({ language }) => {
	return (
		<Grid
			container
			direction='column'
			justifyContent='flex-start'
			alignItems='flex-start'
			sx={style}
		>
			<TextCointainer>
				<Typography variant='subtitle2'>
					{translate(language).MOVIE_PAGE.TITLE}
				</Typography>
				<Typography variant='h3'>
					{translate(language).MOVIE_PAGE.MOVIE_TITLE}
				</Typography>
			</TextCointainer>
			<TextCointainer>
				<Typography variant='subtitle2'>
					{translate(language).MOVIE_PAGE.OVERVIEW}
				</Typography>
				<Typography variant='body1'>{LOREM}</Typography>
			</TextCointainer>
			<TextCointainer>
				<Typography variant='subtitle2'>
					{translate(language).MOVIE_PAGE.DATE}
				</Typography>
				<Typography variant='body1'>2021-05-26</Typography>
			</TextCointainer>
			<TextCointainer>
				<Typography variant='subtitle2'>
					{translate(language).MOVIE_PAGE.REVENUE}
				</Typography>
				<Typography variant='body1'>$ 42 600 000</Typography>
			</TextCointainer>
			<TextCointainer>
				<Typography variant='subtitle2'>
					{translate(language).MOVIE_PAGE.DURATION}
				</Typography>
				<Typography variant='body1'>2:14</Typography>
			</TextCointainer>
		</Grid>
	);
};

const TextCointainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 30px;
`;

const style = {
	color: 'white',
};
