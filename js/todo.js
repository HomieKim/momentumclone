const toDoForm = document.getElementById("todo__form");
const toDoList = document.getElementById("todo__list");
const toDoInput = document.querySelector("#todo__form input");

const TODO_KEY = "todos"

let toDos = [];


function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const btn = event.target.parentElement;
    const li = btn.parentElement;
    li.remove();
    toDos = toDos.filter((todo)=> todo.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;    
    span.innerText = newTodo.text;
    button.innerHTML = '<i class="fas fa-times"></i>';
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handlerToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj ={
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handlerToDoSubmit);

const saveToDo = localStorage.getItem(TODO_KEY);

if(saveToDo !== null){
    const parsedTodo = JSON.parse(saveToDo);
    toDos = parsedTodo;
    parsedTodo.forEach(paintToDo);
}