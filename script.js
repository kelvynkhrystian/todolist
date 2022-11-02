// Declarações
const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const btnClearAll = document.getElementById("btnClearAll")
const taskBox = document.getElementById("task-box")
const li = document.getElementsByTagName("li")
const btnBox = document.getElementById("btn-box")
const btnClear = document.getElementById("btnClear")
const btnMoveUp = document.getElementById("btnMoveUp")
const btnMoveDown = document.getElementById("btnMoveDown")

// escondendo os botões inicialmente
btnClearAll.style.display = 'none';
btnBox.style.display = 'none'

// Funções 

const addTask = () => {
  let valueTask = input.value;
  if (valueTask !== "") {
    let item = document.createElement("li");
    item.innerHTML = valueTask;
    item.classList.add("task-item");
    item.onclick = selectTask;
    item.ondblclick = completedTask;
    taskBox.appendChild(item);
    input.value = "";
    btnClearAll.style.display = 'block';
    btnBox.style.display = 'flex';
    saveList();
  }
}

const selectTask = event => {
  let selected = document.querySelectorAll(".task-item");
  for (let i=0; i<li.length; i+=1) {
    selected[i].classList.remove('selected')
  }
  event.target.classList.add('selected');
  saveList();
}

const completedTask = event => {
  event.target.classList.toggle('task-item-ok');
  saveList();
}

const clearAll = () => {
  for (let i=0; i<taskBox.children.length; i+=1) {
    while (taskBox.childElementCount > 0) {
      taskBox.removeChild(taskBox.children[i])
    }
  }
  btnClearAll.style.display = 'none';
  btnBox.style.display = 'none'

  // webstorage
  localStorage.clear();
}

const clear = () => {
  let selected = document.querySelector('.selected')
  selected.remove()
  if (li.length === 0) {
    btnClearAll.style.display = 'none';
    btnBox.style.display = 'none'
  }
  saveList();
}

const moveUp = () => {
  let itemSelected = document.querySelector('.selected');
  let itemAbove = itemSelected.previousElementSibling;

  // add condição - pois se n ele n para na primeira posição de cima
  if (itemAbove !== null) {
    itemSelected.parentElement.insertBefore(itemSelected, itemAbove);
  }
  saveList();
}

const moveDown = () => {
  let itemSelected = document.querySelector('.selected');
  let itemBelow = itemSelected.nextElementSibling.nextElementSibling;
  itemSelected.parentElement.insertBefore(itemSelected, itemBelow);
  saveList();
}

// Eventos
btnInput.addEventListener ("click", addTask);
btnClearAll.addEventListener ("click", clearAll);
btnClear.addEventListener("click", clear);
btnMoveUp.addEventListener('click', moveUp);
btnMoveDown.addEventListener('click', moveDown);

// WebStorage

const saveList = () => {
  const localS = [];
  const localSItens = document.querySelectorAll("li");

  for (let i=0; i<localSItens.length; i+=1) {
    localS.push(localSItens[i].innerText);
  }

  localStorage.setItem('list', JSON.stringify(localS));
}

const loadList = () => {
  const listLS = JSON.parse(localStorage.getItem('list')) || {};
  for (let i=0; i<listLS.length; i+=1) {
    const listItemLS = document.createElement('li');
    listItemLS.innerText = listLS[i];
    listItemLS.classList.add("task-item");
    listItemLS.onclick = selectTask;
    listItemLS.ondblclick = completedTask;

    if (listLS.length > 0) {
      btnClearAll.style.display = 'block';
      btnBox.style.display = 'flex';
    }
    
    taskBox.appendChild(listItemLS);
  }
}

window.onload = loadList;
