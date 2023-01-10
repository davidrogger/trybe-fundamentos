// Elementos principais
const allColorPaletts = document.querySelectorAll('.ball');
const ballsContainer = document.getElementById('balls-container');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const resetGame = document.getElementById('reset-game');
const score = document.getElementById('score');

// Retorna uma string RGB aleatória.
function randomRgbColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);

  const newColor = `(${rColor} , ${gColor} , ${bColor})`;
  return newColor;
}

// Aplica um background diferente para cada item da classe ball, uma contendo a cor indicado na resposta.
function dyeBalls() {
  const correctColorPosition = Math.floor(Math.random() * allColorPaletts.length);
  const colorAnswer = rgbColor.innerText;
  for (let index = 0; index < allColorPaletts.length; index += 1) {
    if (index === correctColorPosition) {
      allColorPaletts[index].style.backgroundColor = `rgb${colorAnswer}`;
    } else {
      allColorPaletts[index].style.backgroundColor = `rgb${randomRgbColor()}`;
    }
  }
}

// Adiciona pontos no score.
function scoreCount(points) {
  const currentScore = parseInt(score.innerText, 10); // Lint solicita para definir um radix, valor convertido deve ser decimal.
  score.innerText = currentScore + points;
}

// Verificar se ja existe uma cor selecionada
function selectedAlready() {
  for (let index = 0; index < allColorPaletts.length; index += 1) {
    if (allColorPaletts[index].classList.contains('selected')) {
      allColorPaletts[index].classList.remove('selected');
      return true;
    }
  }
}

// Renova as cores das palettas, remove a selecao dos itens e atualiza o texto para escolher a cor.
function newGame() {
  rgbColor.innerText = randomRgbColor();
  dyeBalls();
  selectedAlready();
  answer.innerHTML = 'Escolha uma cor';
}

// Pega apenas os números da string em forma de array, e converte para string novamente.
function bgFilter(background) {
  const filterNumbers = /\d+/g; // RegexP Metacharacters acha todos os números "d", com mais de 1 digito "+". Modifier g acha todas compatibildiades.
  const colorString = background.match(filterNumbers).join('');
  return colorString;
}

// Caso não tenha nenhum item selecionado ele chama essa função para selecionar a cor e comparar se ela é a correta.
function selectColor(event) {
  event.target.classList.add('selected');
  const colorClicked = event.target.style.backgroundColor;
  const colorTrue = rgbColor.innerText;
  const colorClickedFiltered = bgFilter(colorClicked);
  const rgbColorFiltered = bgFilter(colorTrue);
  if (colorClickedFiltered !== rgbColorFiltered) {
    answer.innerHTML = 'Errou! Tente novamente!';
  } else {
    answer.innerHTML = 'Acertou!';
    scoreCount(3);
  }
}

// Verificar se o item cliado pertence as classe ball, e se ja possui algum item selecioanado
function bgCheck(event) {
  if (event.target.classList.contains('ball')) {
    if (selectedAlready()) {
      alert('Cor ja selecionada começando outra partida');
      newGame();
    } else {
      selectColor(event);
    }
  }
}

// Chama a função de adicionar cores.
dyeBalls();
// Adiciona Evento de Clique para selecionar uma cor como resposta.
ballsContainer.addEventListener('click', bgCheck);
// Adiciona Evento de Clique no botão de nova partida
resetGame.addEventListener('click', newGame);
