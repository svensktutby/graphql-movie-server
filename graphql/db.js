export let movies = [
  {
    id: 1,
    title: 'Fantastic Mr. Fox',
    score: 8,
  },
  {
    id: 2,
    title: 'With Fire and Sword',
    score: 7,
  },
  {
    id: 3,
    title: 'Interstellar',
    score: 9,
  },
  {
    id: 4,
    title: 'Austin Powers',
    score: 7,
  },
];

export const getMovies = () => movies;

export const getMovie = (movieId) => {
  return movies.find(({ id }) => id === movieId);
}

export const addMovie = (title, score) => {
  const newMovie = {
    id: movies.length + 1,
    title,
    score,
  }

  movies.push(newMovie);

  return newMovie;
}
