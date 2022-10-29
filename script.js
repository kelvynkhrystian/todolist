// Declarações

const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const btnClear = document.getElementById("btnClearAll")
const taskBox = document.getElementById("task-box")
const li = document.getElementsByTagName("li")
const btnBox = document.getElementById("btn-box")

// escondendo os botões inicialmente
btnClear.style.display = 'none';
btnBox.style.display = 'none'

// Funções 

const addTask = () => {
  let valueTask = input.value;
  if (valueTask !== "") {
    let item = document.createElement("li");
    item.innerHTML = valueTask;
    item.classList.add("task-item");
    item.onclick = selectTask;
    item.ondblclick = removeTask;
    taskBox.appendChild(item);
    input.value = "";
    btnClear.style.display = 'block';
    btnBox.style.display = 'flex';
  }
}

const selectTask = event => {
  for (let i=0; i<li.length; i+=1) {

  }
  event.target.classList.toggle('selected');
}

const completedTask = event => {
  event.target.classList.toggle('task-item-ok');
}

const removeTask = event => {
  event.target.remove();
}

const clearAll = () => {

  for (let i=0; i<taskBox.children.length; i+=1) {
    while (taskBox.childElementCount > 0) {
      taskBox.removeChild(taskBox.children[i])
    }
  }
  btnClear.style.display = 'none';
  btnBox.style.display = 'none'
}

// Eventos

btnInput.addEventListener ("click", addTask);
btnClear.addEventListener ("click", clearAll);
