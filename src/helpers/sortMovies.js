const CATEGORIES_TYPE = {
  PUPULAR: 'Popular',
  TOP_RATED: 'Top rated',
  UPCOMING: 'Upcoming',
};

export const sortMoviesBy = (element, index, posts, setPosts, setActive) => {
  if (element === CATEGORIES_TYPE.PUPULAR) {
    posts.sort((a, b) => a.original_title.localeCompare(b.original_title));
    setPosts(posts);
  } else if (element === CATEGORIES_TYPE.TOP_RATED) {
    posts.sort((a, b) => a.popularity - b.popularity);
    setPosts(posts);
  } else if (element === CATEGORIES_TYPE.UPCOMING) {
    posts.sort((a, b) => a.id - b.id);
    setPosts(posts);
  }
  setActive(index);
};

export const sortByPopular = (posts, setPosts) => {
  posts.sort((a, b) => a.original_title.localeCompare(b.original_title));
  setPosts([...posts]);
};
export const sortByRated = (posts, setPosts) => {
  posts.sort((a, b) => a.popularity - b.popularity);
  setPosts([...posts]);
};
export const sortByUpComing = (posts, setPosts) => {
  posts.sort((a, b) => a.id - b.id);
  setPosts([...posts]);
};
