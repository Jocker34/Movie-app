import React from 'react';
import styled from 'styled-components';

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	const test = () => {
		for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
			pageNumbers.push(i);
		}
	};
	test();

	return (
		<Container>
			{pageNumbers.map((number) => (
				<a onClick={() => paginate(number)} href='!#'>
					{number}
				</a>
			))}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	a {
		color: white;
		float: left;
		padding: 8px 16px;
	}

	a.active {
		background-color: #4caf50;
		color: white;
	}

	a:hover:not(.active) {
		background-color: #ddd;
	}
`;
