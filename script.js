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
  btnBox.style.display = 'none'
}

const clear = () => {

  let selected = document.querySelector('.selected')
  selected.remove()
  // if (selected.class === 'selected') {
   
  // }
}

// Eventos

btnInput.addEventListener ("click", addTask);
btnClearAll.addEventListener ("click", clearAll);
btnClear.addEventListener("click", clear);
// btnMoveUp.addEventListener('click', moveUp);
// btnMoveDown.addEventListener('click', moveDown);
