const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const taskBox = document.getElementById("task-box")
// const div = document.getElementsByClassName("task-item")

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

const div = document.getElementsByClassName("task-item")

function concluiTarefa() {
  let itemOK = div
  itemOK.classList.toggle("task-item-ok");
  console.log("ok")
}

btnInput.addEventListener ("click", addTarefa);
div.addEventListener ("click", concluiTarefa);