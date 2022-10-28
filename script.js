// Declarações

const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
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
    taskBox.appendChild(item);
    input.value = "";
  }
}

const completedTask = event => {
  event.target.classList.toggle('task-item-ok');
}

// Evento principal

btnInput.addEventListener ("click", addTask);

