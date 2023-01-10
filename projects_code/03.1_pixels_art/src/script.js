window.onload = function () {
  const blackPallet = document.getElementById('black-pallet');
  blackPallet.classList.add('selected');
  dyeSelectedColor();
  eraseBoard();
};

function fillBoard(boardSize) {
  const boardPixel = document.getElementById('pixel-board');
  if (boardSize > 50) {
    boardSize = 50;
  }
  if (boardSize < 5) {
    boardSize = 5;
  }
  for (let pixelColumn = 0; pixelColumn < boardSize; pixelColumn += 1) {
    const columnLine = document.createElement('div'); // cria as linhas
    boardPixel.appendChild(columnLine); // insere a primeira linha no board
    for (let pixelLine = 0; pixelLine < boardSize; pixelLine += 1) {
      const newPixel = document.createElement('div'); // cria a sequencia de pixels que vai na linha correspodente ao loop anterior
      newPixel.classList.add('pixel');
      columnLine.appendChild(newPixel); // preenche a linha com os elementos daquela linha
    }
  }
}

function fillPaletColors() {
  const blackPalet = document.getElementById('black-pallet');
  const bluePalet = document.getElementById('blue-pallet');
  const redPalet = document.getElementById('red-pallet');
  const grayPalet = document.getElementById('gray-pallet');
  const colorPalet02 = randomColor();
  const colorPalet03 = randomColor();
  const ColorPalet04 = randomColor();
  blackPalet.style.backgroundColor = 'black';
  bluePalet.style.backgroundColor = colorPalet02;
  redPalet.style.backgroundColor = colorPalet03;
  grayPalet.style.backgroundColor = ColorPalet04;
}
fillPaletColors();

function createPixelBoard() {
  let boardSize = 5;
  fillBoard(boardSize);
  const generateBtn = document.getElementById('generate-board');
  generateBtn.addEventListener('click', () => {
    const customBoardSize = document.getElementById('board-size');
    if (customBoardSize.value > 0) {
      boardSize = customBoardSize.value;
      deletePixels();
      fillBoard(boardSize);
    } else {
      alert('Board Inválido!');
    }
  });
}
createPixelBoard();

function selectPallet() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', (event) => {
    const selectedPalet = document.querySelector('.selected');
    selectedPalet.classList.remove('selected');
    event.target.classList.add('selected');
    dyeSelectedColor();
  });
}
selectPallet();

function dyeSelectedColor() {
  const selectedColor = document.querySelector('.selected');
  const dyeColor = selectedColor.style.backgroundColor;
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    event.target.style.backgroundColor = dyeColor;
  });
}

function eraseBoard() {
  const eraseBtn = document.getElementById('clear-board');
  const eraseColor = 'white';
  eraseBtn.addEventListener('click', () => {
    const pixelsBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelsBoard.length; index += 1) {
      pixelsBoard[index].style.backgroundColor = eraseColor;
    }
  });
}

function deletePixels() {
  const boardPixel = document.getElementById('pixel-board');
  const allBoardPixelsElements = boardPixel.children;
  while (allBoardPixelsElements.length !== 0) {
    boardPixel.removeChild(boardPixel.firstElementChild);
  }
}

function randomColor() {
  const rColor = Math.floor(Math.random() * (100 - 200)) + 100; // números entre 100 e 200 (para não ter tonalidades perto do preto e do branco).
  const gColor = Math.floor(Math.random() * (100 - 200)) + 100;
  const bColor = Math.floor(Math.random() * (100 - 200)) + 100;
  const colorString = `rgb(${rColor}, ${gColor}, ${bColor})`;
  return colorString;
}
