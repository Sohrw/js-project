const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo (event) {
    const deleteList = event.target.parentElement;
    deleteList.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteList.id));
    saveToDos();
}


function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}