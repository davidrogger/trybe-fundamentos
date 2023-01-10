// DOM Gathering
const generateLetterBtn = document.getElementById('criar-carta');
const letterText = document.getElementById('carta-texto');
const displayNewLetter = document.getElementById('carta-gerada');
console.log();

// 'Banco de dados' de todas classes dividas por grupos.
function dbClasses() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const skewGroup = ['skewleft', 'skewright'];
  const allGroupClasses = [styleGroup, sizeGroup, rotationGroup, skewGroup];
  return allGroupClasses;
}

// Com base no tamanho do array, escolhe aleatoriamente um index
function randomArrayIndex(arrayItem) {
  const randomIndexValue = Math.floor(Math.random() * arrayItem.length);
  return randomIndexValue;
}

// Organiza em um grupo de selecionados, pegando um index aleatório.
function groupFilter(allGroup, groupSelected, qtItem) {
  while (groupSelected.length !== qtItem) {
    const randomIndex = randomArrayIndex(allGroup);
    if (groupSelected.indexOf(allGroup[randomIndex]) === -1) { // Se o item ja foi adicionado, ele não deve ser adicionado.
      groupSelected.push(allGroup[randomIndex]);
    }
  }
}

// Define uma quantidade aleatória de grupos para escolher.
function randomIndexPick() {
  const allGroups = dbClasses();
  let qtGroups = 4; // RandomArrayIndex(allGroups); // Quantidade aleatória de repetições com base no tamanho do array. No contexto da pergunta, foi dito que não seria necessariamente preciso, adicionar os 4 grupos de estilo, por isso criei a possibilidade de pegar uma quantidade aleatória de grupos para aplicar nas palavras, porém no quesito 17, o verificador exige, que cada palavra possua um de cada grupo.
  if (qtGroups === 0) { // Se a quantidade de grupos for igual a 0, ele deve atribuir uma nova quantidade, até ficar diferente de 0.
    while (qtGroups === 0) {
      qtGroups = randomArrayIndex(allGroups);
    }
  }
  const groupsSelected = [];
  groupFilter(allGroups, groupsSelected, qtGroups);
  return groupsSelected;
}

// Função que aplica as classes com base na seleção aleatorio de grupos.
function applyingClasses(word) {
  const groupsSelected = randomIndexPick();
  for (let index = 0; index < groupsSelected.length; index += 1) {
    const randomIndex = randomArrayIndex(groupsSelected[index]); // Pega um valor aleatório do valor dentro do grupo de selecionados.
    word.classList.add(groupsSelected[index][randomIndex]);
  }
}

// Remove as classes ja existentes em cada item coletado, e atribui uma nova classe aleatória.
function newLetterClasses(item) {
  item.removeAttribute('class');
  applyingClasses(item);
}

// Coleta todos itens da carta.
function newLetterByClick() {
  const itensRenew = document.querySelectorAll('span');
  itensRenew.forEach(newLetterClasses);
}

// Preenche o campo carta-texto com a mensagem.
function notAllow() {
  displayNewLetter.innerText = 'Por favor, digite o conteúdo da carta.';
}

// Verificar se há contéudo no input.
function allowToSend() {
  if (letterText.value.length > 0) {
    return true;
  }
  notAllow();
}

// Limpa tudo da carta-texto
function eraseDisplay() {
  displayNewLetter.innerText = '';
}

// Cria os elementos span, no display, com cada frase que foi digitada.
function createNewElement(item) {
  if (item === '') {
    notAllow();
  } else {
    const wordSpan = document.createElement('span');
    applyingClasses(wordSpan);
    wordSpan.innerText = item;
    displayNewLetter.appendChild(wordSpan);
  }
}

// Adiciona no campo de contador, a quantidade de palavras que foram colocadas na carta.
function wordletterCount(element) {
  const countLetter = document.getElementById('carta-contador');
  countLetter.innerText = element.length;
}

// Verifica se há conteúdo no display, caso sim, limpa o contéudo, e cria o novo conteúdo digitado.
function newLetterCreate() {
  if (allowToSend()) {
    if (displayNewLetter.children.length > 0) {
      eraseDisplay();
    }
    eraseDisplay();
    const textSplited = letterText.value.split(' ');
    textSplited.forEach(createNewElement);
    wordletterCount(textSplited);
  }
}

// Implementa a ação de clique no botão de Gerar carta.
generateLetterBtn.addEventListener('click', newLetterCreate);
// Implemente evento de clique no elemento que aparecem as palavras com classes diferentes.
displayNewLetter.addEventListener('click', newLetterByClick);
