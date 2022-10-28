// Declarações

const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const btnClear = document.getElementById("btnClearAll")
const taskBox = document.getElementById("task-box")
const li = document.getElementsByTagName("li")

// Funções 

const addTask = () => {
  let valueTask = input.value;
  if (valueTask !== "") {
    let item = document.createElement("li");
    item.innerHTML = valueTask;
    item.classList.add("task-item");
    item.onclick = completedTask;
    item.ondblclick = removeTask;
    taskBox.appendChild(item);
    input.value = "";
    btnClear.style.display = 'block'
  }
}

const completedTask = event => {
  event.target.classList.toggle('task-item-ok');
}

const removeTask = event => {
  event.target.remove();
}

const clearAll = () => {

  console.log(taskBox.children);
  console.log(" ");
  console.log(" ");

  for (let i=0; i<=taskBox.children.length; i+=1) {
    let itemLi = taskBox.children[i]
    // console.log(taskBox.children[i].innerHTML);
    // console.log(itemLi);
    // taskBox.removeChild(itemLi)
    itemLi.innerHTML = ''
  }

  // btnClear.style.display = 'none'
}

// Evento principal

btnInput.addEventListener ("click", addTask);
btnClear.addEventListener ("click", clearAll);
