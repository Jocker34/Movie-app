export const showGenres = (genresId, allGenres) => {
  const result = allGenres.filter((item) => {
    return genresId.includes(item.id);
  });
  return result.map((a) => a.name).join(' ');
};
