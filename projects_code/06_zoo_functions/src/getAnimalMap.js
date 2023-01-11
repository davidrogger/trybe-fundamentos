const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimallocation(location) {
  return location.reduce((obj, region) => {
    const mainObj = obj; // Para resolver um problema com o lint, coloquei o acc dentro de uma variavel.
    const animals = species
      .filter((specie) => specie.location === region).map((specie) => specie.name); // Filter para localizar bicho referentes aquela região que está correndo no momento, seguindo de um map, para coletarmos apenas os nomes daquele filtro.
    mainObj[region] = animals;
    return mainObj;
  }, {});
}

function allAnimalsLocation() { // Coleta todos localizações existentes em species.
  const allRegions = species.map((specie) => specie.location);
  const allRegionsFilter = allRegions
    .filter((location, index) => allRegions.indexOf(location) === index); // Remove regiões repetidas.
  return allRegionsFilter;
}

// Função para coletar o nome de todos residentes, e caso existe um dado de sexo, ele filtra pelo sexo apresentado.
function animalNames(animalName, sexFilter) {
  const allResidents = species
    .find((specie) => specie.name === animalName).residents;
  if (sexFilter !== undefined) {
    const residentsBySex = allResidents.filter((resident) => resident.sex === sexFilter);
    return residentsBySex.map((resident) => resident.name);
  }
  const allResidentsNames = allResidents.map((resident) => resident.name);
  return allResidentsNames;
}

function includeNamesTrue(obj, allRegions, sexFilter) {
  const newObj = {};
  allRegions.forEach((region) => {
    newObj[region] = [];
  });
  allRegions.forEach((region) => { // 'Percorrer' cada chave do objeto
    newObj[region] = [];
    obj[region].forEach((animal) => {
      const eachObj = {};
      eachObj[animal] = animalNames(animal, sexFilter); // Função criada para manipular quais dados vão ser adicionados como valor.
      newObj[region].push(eachObj);
    });
  });
  return newObj;
}

// acessa cada array das chaves de regioes, coleta as chaves internas, para acessalos e organiza-los.
function sortedTrue(obj, allRegions) {
  allRegions.forEach((region) => {
    obj[region].forEach((specie) => {
      const animal = Object.keys(specie);
      specie[animal].sort();
    });
  });
}

function getAnimalMap(options) {
  const allRegions = allAnimalsLocation();
  const allRegionsWithAnimals = getAnimallocation(allRegions);
  if (typeof options === 'object' && options.includeNames) {
    const includeTrue = includeNamesTrue(allRegionsWithAnimals, allRegions, options.sex);
    if (options.sorted) sortedTrue(includeTrue, allRegions);
    return includeTrue;
  }
  return allRegionsWithAnimals;
}

// console.log(getAnimalMap());
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

// Usado material do Matheus Battisti para remover elementos repetidos no map de regiões // https://www.horadecodar.com.br/2020/08/15/remover-elementos-repetidos-de-um-vetor-em-javascript-repetidos-array/.

module.exports = getAnimalMap;
