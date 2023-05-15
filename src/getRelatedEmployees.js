const data = require('../data/zoo_data');

const isManager = (id) => {
  const verifyManager = data.employees
    .some((employee) => employee.managers
      .find((manager) => manager === id));
  return verifyManager;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const relatedEmployees = data.employees
      .filter((employee) => employee.managers
        .find((manager) => manager === managerId))
      .map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
    return relatedEmployees;
  }
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

module.exports = { isManager, getRelatedEmployees };
