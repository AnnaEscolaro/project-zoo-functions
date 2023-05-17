const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findAnimal = data.employees.find((employee) => employee.id === id)
    .responsibleFor.find((element) => element);
  const findBiggestAge = data.species.find((specie) => specie.id === findAnimal)
    .residents.reduce((acc, element) => (acc > element.age ? acc : element.age), 0);
  const findOldestAnimal = Object.values(data.species.find((specie) => specie.id === findAnimal)
    .residents.find((element) => element.age === findBiggestAge));
  return findOldestAnimal;
};

module.exports = getOldestFromFirstSpecies;
