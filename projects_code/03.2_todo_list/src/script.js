// Elementos principais
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskBtn = document.getElementById('criar-tarefa');
const clearTaskBtn = document.getElementById('apaga-tudo');
const clearCompletedTaskBtn = document.getElementById('remover-finalizados');
const saveListBtn = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const deleteSelected = document.getElementById('remover-selecionado');

// Criação de item na lista
function addTaskInput() {
  const createItem = document.createElement('li');
  createItem.innerText = taskInput.value;
  taskList.appendChild(createItem);
  taskInput.value = '';
}

// Seleção de apenas um item na lista.
function selectAnItem(event) {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    selectedItem.classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}

// Adiciona ou remove a classe completed
function markCompletedTasks(event) {
  event.target.classList.toggle('completed');
}

// Limpa todos itens da lista de tarefas
function btnCleanTaskList() {
  if (taskList.children !== 0) {
    while (taskList.children.length !== 0) {
      taskList.lastElementChild.remove();
    }
  }
}

// Limpa Todos itens da classe Completed
function cleanCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  if (completedTasks.length !== 0) {
    for (let index = 0; index < completedTasks.length; index += 1) {
      completedTasks[index].remove();
    }
  }
}

// Salva itens da lista no localStorage, Agradecimento ao Douglas Souza da monitoria, que indiretamente me ajudou a fazer isso funcionar em uma das monitorias passadas, com algumas explicações.
function saveList() {
  localStorage.setItem('tasklist', JSON.stringify(taskList.innerHTML));
  alert('Lista salva!');
}

// Move o item para cima.
function moveUpItem() {
  if (document.querySelector('.selected') !== null) {
    const currentTaskSelected = document.querySelector('.selected');
    if (currentTaskSelected.previousSibling !== null) {
      taskList.insertBefore(currentTaskSelected, currentTaskSelected.previousSibling);
    }
  }
}

// Move para cima o proximo irmão do atual :D
function moveDownItem() {
  if (document.querySelector('.selected') !== null) {
    const currentTaskSelected = document.querySelector('.selected');
    if (currentTaskSelected.nextSibling !== null) {
      taskList.insertBefore(currentTaskSelected.nextSibling, currentTaskSelected);
    }
  }
}

function deleteSelectedItem() {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').remove();
  }
}

// Adiciona evento de clique para adicionar a tarefa na lista.
taskBtn.addEventListener('click', addTaskInput);
// Inicia a função de seleção de item na lista.
taskList.addEventListener('click', selectAnItem);
// Adiciona e remove a classe de Tarefa Completada.
taskList.addEventListener('dblclick', markCompletedTasks);
// Adiciona evento de clique para limpar todos itens da lista de tarefas
clearTaskBtn.addEventListener('click', btnCleanTaskList);
// Adiciona evento de clique para limpar apenas os itens completos
clearCompletedTaskBtn.addEventListener('click', cleanCompletedTasks);
// Adiciona evento de clique para Salvar lista de tarefas.
saveListBtn.addEventListener('click', saveList);
// Adiciona evento de clique para mover para cima o item.
moveUp.addEventListener('click', moveUpItem);
// Adiciona o evento de clique para mover para baixo o item.
moveDown.addEventListener('click', moveDownItem);
// Adiciona evento de remover o item selecionado.
deleteSelected.addEventListener('click', deleteSelectedItem);

window.onload = function fullLoad() {
  // Carrega os itens salvos da lista
  taskList.innerHTML = JSON.parse(localStorage.getItem('tasklist'));
};
