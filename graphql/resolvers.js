import { addMovie, getMovie, getMovies, removeMovie } from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovie(id),
  },
  Mutation: {
    addMovie: (_, { title, score }) => addMovie(title, score),
    removeMovie: (_, { id }) => removeMovie(id),
  }
};

export default resolvers;
