import React, { useState } from 'react';
import styled from 'styled-components';

import { mockedMovies } from 'movies';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Pagination } from './components/Pagination/Pagination';
import { CategoriesTabs } from './components/CategoriesTabs/CategoriesTabs';

export const MainPage = () => {
	const [posts, setPosts] = useState(mockedMovies);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostPerPage] = useState(30);
	const [active, setActive] = useState();

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<Container>
			<CategoriesTabs
				active={active}
				setActive={setActive}
				posts={posts}
				setPosts={setPosts}
			/>
			<Movies>
				{currentPosts.map((post) => (
					<MovieCard title={post.original_title} />
				))}
			</Movies>
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
		</Container>
	);
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
`;
