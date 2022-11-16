import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';

import { topRatedMovies } from 'topRatedMovies';
import { MovieCard } from 'components/MovieCard';
import { Tabs } from './mainPage/Tabs';

import { searchMovie } from 'helpers/serarchMovie';

export const MainPage = ({ search }) => {
  const [posts, setPosts] = useState(topRatedMovies);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 20;
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
        <Grid container justifyContent='center' sx={{ minHeight: '80vh' }}>
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
        </Grid>
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
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '40px 60px 0 60px',
});

const StyledPagination = styled(Pagination)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  button: {
    color: theme.palette.common.white,
  },
}));

const NoResult = styled('div')({
  display: 'flex',
  color: 'white',
  justifyContent: 'center',
});

const StyledMovieCard = styled(MovieCard)`
  margin: 30px 25px 0 25px;
`;
