const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hOne = document.querySelector("h1");

function loginBtnClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    
    
    console.log(username);
    localStorage.setItem("username",username);
    paintGreeting(username);
}

function paintGreeting(username) {
    hOne.innerText = `Hello! my deer friend, ${username}`;
    hOne.classList.remove("hidden");
}

const saveUsername = localStorage.getItem("username");

if (saveUsername == null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginBtnClick);
}
else {
    paintGreeting(saveUsername);
}