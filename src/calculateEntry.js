const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const entrantsCount = entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) {
      acc.child += 1;
      return acc;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      acc.adult += 1;
      return acc;
    }
    acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return entrantsCount;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants === [] || entrants === {}) {
    return 0;
  }
  const entrantsCounter = countEntrants(entrants);
  const sumPrice = (entrantsCounter.child * data.prices.child)
    + (entrantsCounter.adult * data.prices.adult)
    + (entrantsCounter.senior * data.prices.senior);
  return sumPrice;
};

module.exports = { calculateEntry, countEntrants };
