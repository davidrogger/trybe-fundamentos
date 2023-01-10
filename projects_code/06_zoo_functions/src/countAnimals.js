const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countSpecificSexAnimals(animal, sex) {
  const chosenAnimal = species.find((eachSpecie) => eachSpecie.name === animal);
  return chosenAnimal.residents.filter((eachAnimal) => eachAnimal.sex === sex).length;
}

function countAnimals(animal) {
  const allAnimals = species
    .reduce((finalObj, specie) => {
      const obj = finalObj; // lint não deixa usar o parametro para atribuir os valores diretamente, logo foi necessário criar uma constante recebendo o valor do obj final.
      obj[specie.name] = specie.residents.length; // Adiciono dentro do objeto a chave com o nome do animal e a quantidade de animais estipulei pelo tamanho do array dos residentes, se ele tem 5 itens lá, são 5 residentes.
      return obj;
    }, {});
  if (!animal) {
    return allAnimals;
  }
  if (animal.sex !== undefined) {
    const { specie, sex } = animal;
    return countSpecificSexAnimals(specie, sex);
  }
  if (animal.specie !== undefined) {
    const { specie } = animal;
    return allAnimals[specie];
  }
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
