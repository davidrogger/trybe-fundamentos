const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Iniciando PR

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  // Filter é usado para percorrer todos elementos da especie usando os elementos encontrados no find, dos ids, para organiza-los dentro de um array.
  return species.filter((eachSpecie) => ids.find((eachId) => eachId === eachSpecie.id));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

module.exports = getSpeciesByIds;
