// Declarações

const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const btnClearAll = document.getElementById("btnClearAll")
const btnSaveList = document.getElementById("btnSaveList")
const taskBox = document.getElementById("task-box")
const li = document.getElementsByTagName("li")
const btnBox = document.getElementById("btn-box")
const btnClear = document.getElementById("btnClear")
const btnMoveUp = document.getElementById("btnMoveUp")
const btnMoveDown = document.getElementById("btnMoveDown")

// escondendo os botões inicialmente
btnClearAll.style.display = 'none';
btnSaveList.style.display = 'none';
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
    btnSaveList.style.display = 'block';
    btnBox.style.display = 'flex';
  }
}

const selectTask = event => {
  let selected = document.querySelectorAll(".task-item");
  for (let i=0; i<li.length; i+=1) {
    selected[i].classList.remove('selected')
  }
  event.target.classList.add('selected');
}

const completedTask = event => {
  event.target.classList.toggle('task-item-ok');
}

// função de remover com 2 cliques - removida
// será adicionada uma funcão semelhante liga a um botão

// const removeTask = event => {
//   event.target.remove();
// }

const clearAll = () => {
  for (let i=0; i<taskBox.children.length; i+=1) {
    while (taskBox.childElementCount > 0) {
      taskBox.removeChild(taskBox.children[i])
    }
  }
  btnClearAll.style.display = 'none';
  btnSaveList.style.display = 'none';
  btnBox.style.display = 'none'

}

const clear = () => {
  let selected = document.querySelector('.selected')
  selected.remove()
  if (li.length === 0) {
    btnClearAll.style.display = 'none';
    btnSaveList.style.display = 'none';
    btnBox.style.display = 'none'
  }
}

const moveUp = () => {
  let itemSelected = document.querySelector('.selected');
  let itemAbove = itemSelected.previousElementSibling;

  // add condição - pois se n ele n para na primeira posição de cima
  if (itemAbove !== null) {
    itemSelected.parentElement.insertBefore(itemSelected, itemAbove);
  }
}

const moveDown = () => {
  let itemSelected = document.querySelector('.selected');
  let itemBelow = itemSelected.nextElementSibling.nextElementSibling;

  // não precisou da condição
  
  // if (itemBelow !== null) {
  //   itemSelected.parentElement.insertBefore(itemSelected, itemBelow);
  // }

  itemSelected.parentElement.insertBefore(itemSelected, itemBelow);
}

// Eventos

btnInput.addEventListener ("click", addTask);
btnClearAll.addEventListener ("click", clearAll);
btnClear.addEventListener("click", clear);
btnMoveUp.addEventListener('click', moveUp);
btnMoveDown.addEventListener('click', moveDown);

// WebStorage

const saveList = () => {
  // localStorage
  const localS = JSON.parse(localStorage.getItem('list')) || [];
  const localSItens = document.querySelectorAll(".task-item");
  console.log(localSItens);

  for (let i=0; i<localSItens.length; i+=1) {
    localS.push(localSItens[i].innerText);
  }

  localStorage.setItem('list', JSON.stringify(localS));
}


// Evento extra do webstorage
const btnSave = document.getElementById('btnSaveList');
btnSave.addEventListener('click', saveList)


const loadList = () => {
  const listLS = JSON.parse(localStorage.getItem('list')) || {};
  // console.log(listLocalStorage);
  for (let i=0; i<listLS.length; i+=1) {
    const listItemLS = document.createElement('li');
    listItemLS.innerText = listLS[i];
    listItemLS.classList.add("task-item");
    listItemLS.onclick = selectTask;
    listItemLS.ondblclick = completedTask;
    btnClearAll.style.display = 'block';
    btnSaveList.style.display = 'block';
    btnBox.style.display = 'flex';
    taskBox.appendChild(listItemLS);
  }
}

window.onload = loadList;