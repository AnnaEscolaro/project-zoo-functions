const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...args) => {
  const filteredSpecies = [];
  const allSpecies = species;
  //   for (let index = 0; index < args.length; index += 1) {
  //     for (let index = 0; index < allSpecies.length; index += 1) {
  //       if (args[index] === allSpecies[index].id) {
  //         filteredSpecies.push(allSpecies[index]);
  //       }
  //     }
  //   }
  args.forEach((item) => allSpecies.forEach((specie) => {
    if (item === specie.id) {
      filteredSpecies.push(specie);
    }
  }));
  return filteredSpecies;
};

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
