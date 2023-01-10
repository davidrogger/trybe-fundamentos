// Desafio 10
function techList(arrayTechLearn, name) {
  if (arrayTechLearn.length <= 0) {
    return 'Vazio!';
  }
  let filterTech = arrayTechLearn.sort();
  let listTechName = [];
  for (let index in filterTech) {
    listTechName.push(
      {
        tech: filterTech[index],
        name,
      },
    );
  }
  return listTechName;
}

// Desafio 11
function generatePhoneNumber(arrayPhone) {
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (permitionToRegister(arrayPhone)) {
    let joinPhoneNumber = arrayPhone.join('');
    let replacePhoneNumber = joinPhoneNumber.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3'); // mas nem sobre decreto que eu decoro esse replace
    return replacePhoneNumber;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}
// Complemento para Desafio 11
function permitionToRegister(arrayPhone) {
  let notAllowed = 0;
  for (let index in arrayPhone) {
    let countRepNumberTmp = 0;
    for (let indexCheck in arrayPhone) {
      if (arrayPhone[index] == arrayPhone[indexCheck]) {
        countRepNumberTmp += 1;
      }
      if (countRepNumberTmp >= 3) {
        notAllowed += 1;
      }
    }
    if (arrayPhone[index] > 9 || arrayPhone[index] < 0) {
      notAllowed += 1;
    }
  }
  if (notAllowed === 0) {
    return true;
  }
  return false;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absLineA = Math.abs(lineA);
  let absLineB = Math.abs(lineB);
  let absLineC = Math.abs(lineC);

  if (absLineA > absLineB + absLineC) {
    return false;
  } if (absLineB > absLineA + absLineC) {
    return false;
  } if (absLineC > absLineB + absLineA) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(stringDrink) {
  let findNumber = /\d+/g; // Barras é usado para determinar uma expressão nessa expressão usamos digitos númericos \d, com + para localizar mais que 1 digito, e g para achar todos eles dentro da string.
  let filterNumberArray = stringDrink.match(findNumber);
  let sumNumbers = 0;
  for (let index in filterNumberArray) {
    let beNumber = parseInt(filterNumberArray[index]);
    sumNumbers += beNumber;
  }
  if (sumNumbers > 1) {
    return `${sumNumbers} copos de água`;
  }
  return `${sumNumbers} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
