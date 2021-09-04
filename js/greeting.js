const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todo_form = document.querySelector("#todo__form")
const todo_list = document.querySelector("#list_container")
const C_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(C_HIDDEN);
    todo_form.classList.remove(C_HIDDEN);
    todo_list.classList.remove(C_HIDDEN);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    printGreeting();
}

function printGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(C_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(C_HIDDEN);
    todo_form.classList.add(C_HIDDEN);
    todo_list.classList.add(C_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    printGreeting();
}



