import { addMovie, getMovie, getMovies } from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovie(id),
  },
  Mutation: {
    addMovie: (_, { title, score }) => addMovie(title, score)
  }
};

export default resolvers;
