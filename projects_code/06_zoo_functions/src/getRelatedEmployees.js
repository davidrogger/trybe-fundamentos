const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // Mapea todos os managers.
  const allManagers = employees.map((employ) => employ.managers);
  // Reduz para apenas um array com todos os ID managers e se algum dos IDs desse array forem igual ao ID passado, retorna verdadeiro, se não retorna false.
  return allManagers
    .reduce((mainArray, element) => [...mainArray, ...element], [])
    .some((idManager) => idManager === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    // Filtra os employees que possuem o manager passado no parametro, e salva em um array.
    const employeesRelated = employees
      .filter((employ) => employ.managers
        .find((manager) => manager === managerId));
    // Mapea somente o nome e sobrenome em um array do array criado no filtro.
    return employeesRelated.map((employ) => `${employ.firstName} ${employ.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
