/* Iniciando PR
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayParametro) => {
  const newArray = arrayParametro;
  let numbersArraySum = 0;
  const division = newArray.length; // Organizar melhor o valor para ser dividido pela quantidade de index no array
  if (newArray.length === 0) {
    return undefined;
  }
  for (let index = 0; index < newArray.length; index += 1) {
    if (typeof newArray[index] !== 'number') {
      return undefined;
    }    
    numbersArraySum += newArray[index];
  }
  const averageArray = numbersArraySum / division;
  return Math.round(averageArray);
};

module.exports = average;
