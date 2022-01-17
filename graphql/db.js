export const people = [
  {
    id: 1,
    name: 'Andy',
    age: '44',
    gender: 'male',
  },
  {
    id: 2,
    name: 'Eva',
    age: '12',
    gender: 'female',
  },
  {
    id: 3,
    name: 'Arciom',
    age: '21',
    gender: 'male',
  },
];

export const getPersonById = (personId) => {
  return people.find(({ id }) => id === personId);
}
