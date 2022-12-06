const toDoForm = document.getElementById("todoForm");
const toDoInPut = document.getElementById("todo");
const toDoList = document.getElementById("toDoList");

let toDos = [];

function saveList() {
  localStorage.setItem("list", JSON.stringify(toDos));
}

function delList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((element) => element.id !== parseInt(li.id));
  saveList();
}

function creatList(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", delList);
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = {
    text: toDoInPut.value,
    id: Date.now(),
  };
  toDoInPut.value = "";
  toDos.push(newToDo);
  creatList(newToDo);
  saveList(newToDo);
}

toDoForm.addEventListener("submit", handleSubmit);

const listObj = JSON.parse(localStorage.getItem("list"));

if (listObj !== null) {
  listObj.forEach(creatList);
  toDos = listObj;
}
