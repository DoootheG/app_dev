const toDoForm = document.querySelector("#todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

const toDos = [];

function saveToDo(newToDo) {
  console.log(newToDo);
  localStorage.setItem(toDos, newToDo);
}

function delList(event) {
  const li = event.target.parentElement;
  li.remove();
}

function creatList(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(btn);
  btn.addEventListener("click", delList);
  toDoList.appendChild(li);
}

function getToDoList(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  creatList(newToDo);
  saveToDo(newToDo);
}

toDoForm.addEventListener("submit", getToDoList);
