const mainSection = document.querySelector('.items');
const cartSection = document.querySelector('.cart__items');
const emptyCartBtn = document.querySelector('.empty-cart');
// const bottomCart = document.querySelector('.bottom-cart-container');

// function hiddenBottomInfo() {
//   console.log(cartSection.children.length);
//   if (cartSection.children.length !== 0) {
//     bottomCart.setAttribute('style', 'display:flex');
//   } else {
//     bottomCart.setAttribute('style', 'display:none');
//   }
// }

// Cria um elemento de imagem, e adiciona o caminho a sorce, no fornecimento do parametro.
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

// Cria novos elementos ao receber os 3 parametros passados.
function createCustomElement(element, className, innerText) {
  const newElement = document.createElement(element);
  newElement.className = className;
  newElement.innerHTML = innerText;
  return newElement;
}

// Cria o elemento span com o texto de carregando
function createLoadingText(parent) {
  parent.appendChild(createCustomElement('span', 'loading', 'CARREGANDO...'));
}

// Ao receber um obj com os dados de Id, name e imagem, chama a função de criação de elementos e os organiza com os dados fornecidos do objeto.
function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  const btnTxt = 'Adicionar ao carrinho!';
  const btnIco = '<i class="material-icons" style="font-size:20px;color:white">shopping_cart</i>';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', `${btnTxt}${btnIco}`));

  return section;
}

// Coleta os valores dos itens que foram separados por classe, e faz o calculo do valor total, monstrando dentro da classe de preço total.
function totalCartPriceCalculation() {
  const totalPrice = document.querySelector('.total-price');
  const allItensInCart = Array.from(cartSection.getElementsByClassName('item-price'));
  const itensCalculation = allItensInCart
    .reduce((calc, price) => calc + parseFloat(price.innerText), 0);
  totalPrice.innerText = itensCalculation; // .toFixed(2);
}

// Remove o elemento clicado dentro da lista do carrinho.
function cartItemClickListener(event) {
  // event.target.remove();
  cartSection.removeChild(event.currentTarget);
  totalCartPriceCalculation();
  saveCartItems(cartSection.innerHTML);
  hiddenBottomInfo();
}

// Cria o item da lista, e determina a posição de cada elemento, para ser apresentado.
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  const price = `<strong class='item-price'>${salePrice}</strong>`;
  li.innerHTML = `SKU: ${sku} | NAME: ${name} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Usa o parametro de ID para localizar na ID os dados, criando um objeto compativel para o uso da criação de elementos no carrinho.
async function getItemData(itemId) {
  createLoadingText(cartSection);
  const dataId = await fetchItem(itemId);
  const loadingText = document.querySelector('.loading');
  loadingText.remove();
  const { id, title, price } = dataId;
  const essencialData = { sku: id, name: title, salePrice: price };
  const itemAdd = createCartItemElement(essencialData);
  cartSection.appendChild(itemAdd);
  totalCartPriceCalculation();
  saveCartItems(cartSection.innerHTML);
}

// Atraves do parent do alvo(botão) encontra o Id dentro da classe item__sku.
function getIdFromParent(element) {
  const itemId = element.target.parentNode.querySelector('.item__sku').innerText;
  getItemData(itemId);
  hiddenBottomInfo();
}

// Adiciona um evento para todos os botões de Adicionar ao carrinho.
function buttonEvent(array) {
  const newArray = Array.from(array);
  newArray.forEach((item) => item.addEventListener('click', getIdFromParent));
}

// Cria um elemento compatível usando os dados recebidos da API, para criar os novos elementos na páginas.
function createSectonsByApi(apiResponse) {
  apiResponse.results.forEach(({ id, title, thumbnail }) => {
    const essencialData = { sku: id, name: title, image: thumbnail };
    mainSection.appendChild(createProductItemElement(essencialData));
  });
  const allButtons = document.getElementsByClassName('item__add');
  buttonEvent(allButtons);
}

// Função assíncrona que espera a resposta da API, para começar a criar as seções.
async function loadingFetchApiML() {
  const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  createLoadingText(mainSection);
  const itemsList = await fetchProducts(urlApi);
  const loadingText = document.querySelector('.loading');
  loadingText.remove();
  createSectonsByApi(itemsList);
}

// Recupera os dados salvos no localStorage e volta o conteúdo dentro da seção de carrinho.
function loadSavedCart() {
  cartSection.innerHTML = getSavedCartItems();
  const refreshList = Array.from(cartSection.getElementsByClassName('cart__item'));
  refreshList.forEach((item) => item.addEventListener('click', cartItemClickListener));
  totalCartPriceCalculation();
}

// Remove todos itens filhos do cartSection, para "esvaziar o carrinho".
function emptyCart() {
  cartSection.innerText = '';
  totalCartPriceCalculation();
  saveCartItems(cartSection.innerHTML);
  hiddenBottomInfo();
}

// Itens que serão carregados após o carregamento total da página.
window.onload = () => {
  loadingFetchApiML();
  loadSavedCart();
  emptyCartBtn.addEventListener('click', emptyCart);
};
