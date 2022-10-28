import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

import { topRatedMovies } from 'topRatedMovies';
import { MovieCard } from 'components/MovieCard';
import { Tabs } from './mainPage/Tabs';

import { searchMovie } from 'helpers/serarchMovie';

export const MainPage = ({ search }) => {
  const [posts, setPosts] = useState(topRatedMovies);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 30;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const count = Math.ceil(posts.length / postsPerPage);

  const handleOnChange = (page) => {
    setCurrentPage(parseInt(page));
  };

  return searchMovie(posts, search, indexOfFirstPost, indexOfLastPost)
    .length !== 0 ? (
    <Container>
      <Box>
        <Tabs posts={posts} setPosts={setPosts} />
        <Movies>
          {searchMovie(posts, search, indexOfFirstPost, indexOfLastPost).map(
            (post) => (
              <StyledMovieCard
                key={post.id}
                title={post.original_title}
                image={post.backdrop_path}
                rate={post.vote_average}
              />
            )
          )}
        </Movies>
        <StyledPagination
          count={count}
          onChange={(e) => handleOnChange(e.target.textContent)}
          page={currentPage}
          size='large'
          hidePrevButton
          hideNextButton
        />
      </Box>
    </Container>
  ) : (
    <NoResult>
      <h1>NO RESULTS FOUND</h1>
    </NoResult>
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
  justify-content: flex-start;
  min-height: 80vh;
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

const StyledMovieCard = styled(MovieCard)`
  margin: 30px 25px 0 25px;
`;
