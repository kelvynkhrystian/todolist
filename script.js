// Declarações

const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const taskBox = document.getElementById("task-box")
const li = document.getElementsByTagName("li")

// Funções 

function addTask() {
  let valueTask = input.value;
  if (valueTask !== "") {
    let item = document.createElement("li");
    item.innerHTML = valueTask;
    item.classList.add("task-item");
    taskBox.appendChild(item);
    input.value = "";
  }
}



// Eventos

btnInput.addEventListener ("click", addTask);

