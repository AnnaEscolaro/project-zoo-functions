const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...args) => {
  const filteredSpecies = [];
  const allSpecies = species;
  args.forEach((item) => allSpecies.forEach((specie) => {
    if (item === specie.id) {
      filteredSpecies.push(specie);
    }
  }));
  return filteredSpecies;
};

module.exports = getSpeciesByIds;
