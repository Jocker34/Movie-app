import styled from 'styled-components';

export const Image = ({ src, alt, width }) => {
	return (
		<Container>
			<img src={src} alt={alt} width={width} />
		</Container>
	);
};

const Container = styled.div`
	margin: 0 15px 0 15px;
`;
