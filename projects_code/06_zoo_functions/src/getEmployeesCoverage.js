const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function filterSpeciesData(id) {
  const speciesData = species
    .filter((specie) => id.find((employAnimal) => specie.id === employAnimal));
  return speciesData;
}

function findEmployNameId(name, id, allEmployers) {
  let employId = id; // Salvo o Id para realizar alguns tratamentos nele, caso seja undefined.
  if (employId === undefined) { // Se não for passado como Id, eu procuro o Id na lista pelo nome ou sobrenome da pessoa, para usar como base de busca somente o allemployees.
    const employData = employees
      .find((employ) => employ.firstName === name || employ.lastName === name);
    const { id: idFound } = employData;
    employId = idFound;
  }
  if (employId !== undefined) { // Caso o nome exista o employId recebe um dado diferente de undefined, para localizar na lista do allEmployers.
    const chosenEmploy = allEmployers.find((employ) => employ.id === employId);
    if (chosenEmploy === undefined) throw new Error('Informações inválidas');
    return chosenEmploy;
  }
  return undefined;
}

function allEmployees() {
  return employees.map((employ) => {
    const { id, firstName, lastName, responsibleFor } = employ;
    const speciesData = filterSpeciesData(responsibleFor);
    const speciesNames = speciesData.map((animal) => animal.name);
    const speciesLocations = speciesData.map((animal) => animal.location);
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: speciesNames,
      locations: speciesLocations,
    };
  });
}

function getEmployeesCoverage(input) {
  const allEmployers = allEmployees();
  if (typeof input === 'undefined') return allEmployers;
  const { name, id } = input;
  const chosenEmploy = findEmployNameId(name, id, allEmployers);
  return chosenEmploy;
}

// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
