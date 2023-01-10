// Desafio 1
function compareTrue(p1, p2) {
  let compare = p1 && p2;
  return compare;
}

// Desafio 2
function calcArea(base, heigh) {
  let result = (base * heigh) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringPhrase) {
  let splitPhrase = stringPhrase.split(' ');
  return splitPhrase;
}

// Desafio 4
function concatName(arrayString) {
  let lastFirst = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties * 1);
  return total;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let majorNumber = arrayNumbers[0];
  let majorCount = 0;
  for (let indexMain in arrayNumbers) {
    if (majorNumber < arrayNumbers[indexMain]) {
      majorNumber = arrayNumbers[indexMain];
    }
  }
  for (let indexMain in arrayNumbers) {
    if (majorNumber == arrayNumbers[indexMain]) {
      majorCount += 1;
    }
  }
  return majorCount;
}
// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanceFromCat1;
  let distanceFromCat2;
  if (mouse > cat1) {
    distanceFromCat1 = mouse - cat1;
  } else {
    distanceFromCat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    distanceFromCat2 = mouse - cat2;
  } else {
    distanceFromCat2 = cat2 - mouse;
  }
  if (distanceFromCat1 === distanceFromCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceFromCat1 < distanceFromCat2) {
    return 'cat1';
  }
  if (distanceFromCat1 > distanceFromCat2) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 === 0) {
      arrayNumbers[index] = 'fizzBuzz';
    } else if (arrayNumbers[index] % 5 === 0) {
      arrayNumbers[index] = 'buzz';
    } else if (arrayNumbers[index] % 3 === 0) {
      arrayNumbers[index] = 'fizz';
    } else {
      arrayNumbers[index] = 'bug!';
    }
  }
  return arrayNumbers;
}

// Desafio 9
function encode(stringPhrase) {
  let stringCode = stringPhrase;
  let codeList = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let replaceStrings in codeList) {
    stringCode = stringCode.replaceAll(replaceStrings, codeList[replaceStrings]);
  }
  return stringCode;
}

function decode(stringPhrase) {
  let stringCode = stringPhrase;
  let codeList = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let replaceStrings in codeList) {
    stringCode = stringCode.replaceAll(codeList[replaceStrings], replaceStrings);
  }
  return stringCode;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
