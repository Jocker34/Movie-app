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
