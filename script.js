const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const taskBox = document.getElementById("task-box")
const div= document.getElementById("task-item")

function addTarefa() {
  let valueTask = input.value;
  if (valueTask !== "") {
    let item = document.createElement("div");
    item.innerHTML = valueTask;
    item.className = "task-item";
    taskBox.appendChild(item);
    input.value = "";
  }
}

function concluiTarefa() {
  div.classList.toggle("task-item-ok");
}

btnInput.addEventListener ("click", addTarefa);
div.addEventListener ("click", concluiTarefa);