const toDoForm = document.getElementById("todoForm");
const toDoInPut = document.getElementById("todo");
const toDoList = document.getElementById("toDoList");

const toDos = [];

function saveList() {
  localStorage.setItem("list", JSON.stringify(toDos));
}
function creatList(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
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
console.log(listObj);

if (listObj !== null) {
  listObj.forEach(creatList);
}
