const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const taskBox = document.getElementById("task-box")

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

btnInput.addEventListener ("click", addTarefa);