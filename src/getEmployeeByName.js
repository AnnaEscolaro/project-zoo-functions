const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const selectedEmployee = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return selectedEmployee;
};

module.exports = getEmployeeByName;
