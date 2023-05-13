const data = require('../data/zoo_data');

const isManager = (id) => {
  const verifyManager = data.employees
    .some((employee) => employee.managers
      .find((manager) => manager === id));
  return verifyManager;
};

const getRelatedEmployees = (managerId) => {
  //   if (isManager(managerId)) {
  //     data.employees.forEach((employee) => employee.managers.filter(managers) => managers === managerId)
  //   }
};

module.exports = { isManager, getRelatedEmployees };
