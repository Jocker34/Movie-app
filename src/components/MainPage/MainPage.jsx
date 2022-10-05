import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

import { mockedMovies } from 'movies';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { CategoriesTabs } from './components/CategoriesTabs/CategoriesTabs';

import { searchMovie } from 'helpers/serarchMovie';

export const MainPage = ({ search }) => {
	const [posts, setPosts] = useState(mockedMovies);
	const [currentPage, setCurrentPage] = useState(1);
	const [active, setActive] = useState();

	const postsPerPage = 30;
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;

	const count = Math.ceil(posts.length / postsPerPage);

	const handleOnChange = (page) => {
		setCurrentPage(page);
	};

	const movies = useMemo(() => {
		if (
			searchMovie(posts, search, indexOfFirstPost, indexOfLastPost)
				.length !== 0
		) {
			return (
				<>
					<CategoriesTabs
						active={active}
						setActive={setActive}
						posts={posts}
						setPosts={setPosts}
					/>
					<Movies>
						{searchMovie(
							posts,
							search,
							indexOfFirstPost,
							indexOfLastPost
						).map((post) => (
							<MovieCard
								key={post.id}
								title={post.original_title}
							/>
						))}
					</Movies>
					<StyledPagination
						count={count}
						onChange={(e) => handleOnChange(e.target.textContent)}
						page={postsPerPage}
						size='large'
					/>
				</>
			);
		} else {
			return (
				<NoResult>
					<h1>NO RESULTS FOUND</h1>
				</NoResult>
			);
		}
	}, [active, count, indexOfFirstPost, indexOfLastPost, posts, search]);

	return <Container>{movies}</Container>;
};

const Container = styled.div`
	display: flex;
	background-color: #181414;
	flex-direction: column;
	padding: 40px 60px 0 60px;
`;

const Movies = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const StyledPagination = styled(Pagination)`
	display: flex;
	justify-content: center;
	button {
		color: white;
	}
`;

const NoResult = styled.div`
	display: flex;
	color: white;
	justify-content: center;
`;
