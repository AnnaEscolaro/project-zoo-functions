const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const countAnimals = (animals) => {
  if (!animals) {
    const allAnimals = species.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }

  if (animals.species && animals.sex) {
    const selectedAnimal = species.find((specie) => specie.name === animals.species);
    return selectedAnimal.residents.filter((resident) => resident.sex === animals.sex).length;
  }

  if (animals.species) {
    return species.find((specie) =>
      specie.name === animals.species).residents.length;
  }
};

console.log(countAnimals());
console.log(countAnimals({ species: 'penguins' }));
console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
