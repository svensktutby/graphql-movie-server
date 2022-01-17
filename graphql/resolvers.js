import { getPersonById, people } from './db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getPersonById(id),
  }
};

export default resolvers;
