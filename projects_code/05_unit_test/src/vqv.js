/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, age) => {
  if (!name || !age) return undefined;
  const paraPhrase = `Oi, meu nome é ${name}!\nTenho ${age} anos,\n`; // Quebrei a frase em duas variaveis uma que sofre alteração por conta dos parametros
  const fixedPhrase = 'trabalho na Trybe e mando muito em programação!\n#VQV!'; // E outra como fixa, que é uma frase que não sofre alteração \n é usado para determinar uma quebra de linha
  return paraPhrase + fixedPhrase;
};

module.exports = vqv;
