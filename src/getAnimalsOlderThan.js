const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalType = species.filter((specie) => specie.name === animal);
  const [animalTypeObj] = animalType;
  const verifyAge = animalTypeObj.residents.every((resident) => resident.age >= age);
  return verifyAge;
};

console.log(getAnimalsOlderThan('lions', 12));

module.exports = getAnimalsOlderThan;
