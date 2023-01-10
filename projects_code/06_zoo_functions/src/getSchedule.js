const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function eachDay(day) {
  const daytime = data.hours[day];
  const { open, close } = daytime;
  if (open === 0 && close === 0) return 'CLOSED';
  return `Open from ${open}am until ${close}pm`;
}

function exhibitionDay(day) {
  const animalExhibition = species
    .filter((specie) => specie.availability.find((dayOn) => dayOn === day))
    .map((specie) => specie.name);
  if (animalExhibition.length === 0) return 'The zoo will be closed!';
  return animalExhibition;
}

function dayTarget(objBase, day) {
  return { [day]: objBase[day] };
}

function animalTarget(animal) {
  return species.find((specie) => specie.name === animal).availability; // Encontra o animal alvo, coleta o elemento, e apresenta somente o elemento availability.
}

function getSchedule(scheduleTarget) {
  const objBase = {};
  const theWeek = Object.keys(data.hours);
  const allAnimalsNames = species.map((specie) => specie.name);
  theWeek.forEach((day) => {
    objBase[day] = { officeHour: eachDay(day), exhibition: exhibitionDay(day) };
  });
  if (allAnimalsNames.some((animal) => animal === scheduleTarget)) {
    return animalTarget(scheduleTarget);
  }
  if (theWeek.some((day) => day === scheduleTarget)) return dayTarget(objBase, scheduleTarget);
  return objBase;
}

console.log(getSchedule());

module.exports = getSchedule;
