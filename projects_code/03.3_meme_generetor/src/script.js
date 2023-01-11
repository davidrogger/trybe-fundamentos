// Elementos Principais
const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imgInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeContainer = document.getElementById('meme-image-container');
const modifyBorder = document.getElementById('border-options');
const memeGallery = document.getElementById('meme-gallery');

// Insere o texto no container de meme-text
function insertTextInput() {
  memeText.innerHTML = textInput.value;
}

// Cria a imagem no container meme-image
// Agradecimentos ao Merrin K, stackoverflow.
// Pelo post dele, descobri como acessar a imagem contida no array file, e converte em uma URL.
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977

function imageContainerInsert() {
  memeImage.src = URL.createObjectURL(imgInsert.files[0]);
}

function applyBorder(event) {
  if (event.target.classList.contains('fireBorder')) {
    memeContainer.className = 'fireBorder';
  }
  if (event.target.classList.contains('waterBorder')) {
    memeContainer.className = 'waterBorder';
  }
  if (event.target.classList.contains('earthBorder')) {
    memeContainer.className = 'earthBorder';
  }
}

function applyGalleryMeme(event) {
  memeImage.src = event.target.src;
}

// Criando eventos
// Insere o texto dentro do container text após apertar enter
textInput.addEventListener('keyup', insertTextInput);
// Insere a imagem no container de imagem
imgInsert.addEventListener('change', imageContainerInsert);
// Insere a borda fire ao container da imagem
modifyBorder.addEventListener('click', applyBorder);
// Insere o evento de clique a imagem desejada
memeGallery.addEventListener('click', applyGalleryMeme);
