const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (Array.isArray(entrants)) {
    const allChildren = entrants.filter((entrant) => entrant.age < 18); // Cria um array com todos menores de 18 anos.
    const allAdults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50); // Cria um array com todos entre 18 e 49 anos.
    const allSeniores = entrants.filter((entrant) => entrant.age >= 50); // Cria um array com todos maiores de 49 anos.
    return { adult: allAdults.length, child: allChildren.length, senior: allSeniores.length };
  }
}

function calculateEntry(entrants) {
  if (Array.isArray(entrants)) {
    const { adult: adultPrice, child: childPrice, senior: seniorPrice } = data.prices;
    const { adult, child, senior } = countEntrants(entrants);
    return (childPrice * child) + (adultPrice * adult) + (seniorPrice * senior);
  }
  return 0;
}

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// console.log(countEntrants(entrants));

module.exports = { calculateEntry, countEntrants };
