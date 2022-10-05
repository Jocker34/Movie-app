import React from 'react';
import styled from 'styled-components';

import { CATEGORIES } from 'constants';

export const CategoriesTabs = ({ active, setActive, posts, setPosts }) => {
	const sortMoviesBy = (index) => {
		if (index === 0) {
			posts.sort((a, b) => a.original_title.localeCompare(b.original_title));
			setPosts(posts);
		} else if (index === 1) {
			posts.sort((a, b) => a.popularity - b.popularity);
			setPosts(posts);
		} else if (index === 2) {
			posts.sort((a, b) => a.id - b.id);
			setPosts(posts);
		}
		setActive(index);
	};

	return (
		<Container>
			{CATEGORIES.map((element, index) => (
				<Tabs
					key={index}
					active={active === index}
					onClick={() => sortMoviesBy(index)}
				>
					{element}
				</Tabs>
			))}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	margin-left: auto;
	border: 1px solid white;
	border-radius: 5px;
`;

const Tabs = styled.div`
	color: ${(props) => (props.active ? 'black' : 'white')};
	background-color: ${(props) => (props.active ? 'white' : 'black')};
	padding: 6px 20px 6px 20px;
	border: 1px solid white;
`;
