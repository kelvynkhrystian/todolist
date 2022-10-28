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

  console.log(taskBox.childElementCount);
  

  for (index of taskBox) {
    if (taskBox.childElementCount > 0) {
      taskBox.firstElementChild.remove()
    }
  }

  // function clearList() {
  //   let liList = document.querySelector("#lista-tarefas")
  //   for (index in liList) {
  //     if (liList.childElementCount !== 0) {
  //       liList.firstElementChild.remove(index)
  //     }
  //   }
  // }
}

// Evento principal

btnInput.addEventListener ("click", addTask);
btnClear.addEventListener ("click", clearAll);
