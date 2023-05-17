const data = require('../data/zoo_data');

const getEmployee = (employeeObj) => {
  if (!employeeObj) {
    return data.employees;
  }
  if (employeeObj.name) {
    const employeeNameFound = data.employees.find((employee) =>
      employeeObj.name === employee.firstName || employeeObj.name === employee.lastName);
    return employeeNameFound;
  }
  if (employeeObj.id) {
    const employeeIdFound = data.employees.find((employee) =>
      employeeObj.id === employee.id);
    return employeeIdFound;
  }
};

const formatCoverage = (employee) => {
  const employeeCoverage = { id: '', fullName: '', species: [], locations: [] };
  employeeCoverage.id = employee.id;
  employeeCoverage.fullName = `${employee.firstName} ${employee.lastName}`;
  const animalNames = employee.responsibleFor.map((item) => data
    .species.find((specie) => specie.id === item))
    .map((el) => el.name);
  employeeCoverage.species = animalNames;
  const location = employee.responsibleFor.map((item) => data
    .species.find((specie) => specie.id === item))
    .map((el) => el.location);
  employeeCoverage.locations = location;
  return employeeCoverage;
};

const allEmployeesCoverage = () => {
  const allEmployees = getEmployee();
  const coverageAll = allEmployees.map((employee) => formatCoverage(employee));
  return coverageAll;
};

const getEmployeesCoverage = (objParameter) => {
  const employeeFound = getEmployee(objParameter);
  if (employeeFound === undefined) {
    throw new Error('Informações inválidas');
  }
  if (!objParameter) {
    return allEmployeesCoverage();
  }
  return formatCoverage(employeeFound);
};

//   returnObj.id = employeeFound.id;
//   returnObj.fullName = `${employeeFound.firstName} ${employeeFound.lastName}`;
//   const animalNames = employeeFound.responsibleFor.map((item) => data
//     .species.find((specie) => specie.id === item))
//     .map((el) => el.name);
//   returnObj.species = animalNames;
//   const location = employeeFound.responsibleFor.map((item) => data
//     .species.find((specie) => specie.id === item))
//     .map((el) => el.location);
//   returnObj.locations = location;
//   return returnObj;

// console.log(getEmployeesCoverage({ name: 'Anna' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
