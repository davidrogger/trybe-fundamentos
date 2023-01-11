const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Encontra o elemento dentro de species com o nome igual e guarda em uma constante.
  const chosenAnimal = species.find((eachObj) => eachObj.name === animal);
  // Passa por todos elementos dentro da chave residentes e coleta suas idades e guarda em um constante.
  const allAnimalAges = chosenAnimal.residents.map((eachResident) => eachResident.age);
  // Poderia ter usado reduce também, mas preferir usar Math.min, que retorna o menor número, usando o spdread para iterar os números dentro do bloco de comparação dele, caso não seja usado, ele retornaria um NaN.
  const minimalAge = Math.min(...allAnimalAges);
  if (minimalAge >= age) {
    return true;
  }
  return false;
}

// console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
