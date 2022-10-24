const input = document.getElementById("input")
const btnInput = document.getElementById("btnAdd")
const taskBox = document.getElementById("task-box")
const li = document.getElementsByTagName("li")

function addTarefa() {
  let valueTask = input.value;
  if (valueTask !== "") {
    let item = document.createElement("li");
    item.innerHTML = valueTask;
    item.className = "taskItem";
    taskBox.appendChild(item);
    input.value = "";
  }
}

// function concluiTarefa() {
//   let itemOK = li
//   itemOK.classList.toggle("task-item-ok");
//   console.log("ok")
// }

btnInput.addEventListener ("click", addTarefa);
// li.addEventListener ("click", concluiTarefa);
console.log(li)