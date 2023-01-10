const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('button');
const agreementButton = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function loginTest() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function agreeCheck() {
  if (agreementCheck.checked) {
    agreementButton.disabled = false;
  } else {
    agreementButton.disabled = true;
  }
}

function count() {
  const maxLength = 500;
  const currentyValue = textArea.value.length;
  const newCount = maxLength - currentyValue;
  counter.innerText = newCount;
}

function contentChecked(element) {
  const checkedBox = [];
  for (let index = 0; index < element.length; index += 1) {
    if (element[index].checked) {
      checkedBox.push(` ${element[index].value}`);
    }
  }
  return checkedBox;
}

function displayInput() {
  const nameInput = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const emailInput = document.getElementById('input-email').value;
  const houseInput = document.getElementById('house').value;
  const radioFamily = document.querySelector('[name="family"]:checked').value;
  const contentInput = document.getElementsByName('conteudos');
  const checkedBox = contentChecked(contentInput);
  const radioRate = document.querySelector('[name="rate"]:checked').value;
  const displayFinal = `Nome: ${nameInput} ${lastName}
  Email: ${emailInput}
  Casa: ${houseInput}
  Família: ${radioFamily}
  Matérias:${checkedBox}
  Avaliação: ${radioRate}
  Observações: ${textArea.value}`;

  document.getElementById('evaluation-form').innerText = displayFinal;
}

botao.addEventListener('click', loginTest);
agreementCheck.addEventListener('click', agreeCheck);
textArea.addEventListener('keyup', count);
agreementButton.addEventListener('click', displayInput);
