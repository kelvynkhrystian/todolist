const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const taskBox = document.getElementById("task-box")

function addTarefa() {
  let valueTask = input.value;
  if (valueTask !== "") {
    let item = document.createElement("li");
    item.innerHTML = valueTask;
    item.className = "task-item";
    taskBox.appendChild(item);
    input.value = "";
  }
}

const li = document.getElementsByClassName("task-item")

function concluiTarefa() {
  let itemOK = li
  itemOK.classList.toggle("task-item-ok");
  console.log("ok")
}

btnInput.addEventListener ("click", addTarefa);
li.addEventListener ("dblclick", concluiTarefa);