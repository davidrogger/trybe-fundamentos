const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const chosenEmploy = employees.find((employ) => employ.id === id);
  const { responsibleFor } = chosenEmploy;
  const firstSpecie = responsibleFor[0];
  const firstData = species.find((specie) => specie.id === firstSpecie);
  const { residents } = firstData;
  const older = residents.reduce((oldest, resident) => {
    if (oldest > resident.age) {
      return oldest;
    }
    return resident.age;
  }, 0);
  const { name, sex, age } = residents.find((resident) => resident.age === older);
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
