const slicePosts = (posts, indexOfFirstPost, indexOfLastPost) => {
  return posts.slice(indexOfFirstPost, indexOfLastPost);
};

export const searchMovie = (
  posts,
  query,
  indexOfFirstPost,
  indexOfLastPost
) => {
  if (!query) {
    return slicePosts(posts, indexOfFirstPost, indexOfLastPost);
  }
  return posts.filter((post) => {
    slicePosts(posts, indexOfFirstPost, indexOfLastPost);
    const postName = post.original_title.toLowerCase();
    const queryName = query.toLowerCase();
    return postName.includes(queryName);
  });
};
