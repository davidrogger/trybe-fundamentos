const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  // encontra dentro dos elemento employees o first e last name que são verdadeiros e retorna aquele objeto
  return employees
    .find((employ) => employ.firstName === employeeName || employ.lastName === employeeName);
}

console.log(getEmployeeByName('Elser'));

module.exports = getEmployeeByName;
