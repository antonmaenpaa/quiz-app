window.addEventListener('load', loginEventListeners);

function loginEventListeners() {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', () => {
        loginDetails();
    });
}

function loginDetails() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const usernameInputField = document.getElementById('username');
    const passwordInputField = document.getElementById('password');    
    const registeredUser = JSON.parse(localStorage.getItem("user"));

    if (username === registeredUser.username && password === registeredUser.password) {
        location.href = "./index.html"
        passwordInputField.classList.remove('add-border-input');
        usernameInputField.classList.remove('add-border-input');
    } else if (username === "" && password === "") {
        passwordInputField.classList.add('add-border-input');
        usernameInputField.classList.add('add-border-input');

    } else if(username !== registeredUser.username) {
        usernameInputField.classList.add('add-border-input');

    } else if(password !== registeredUser.password) {
        passwordInputField.classList.add('add-border-input');
    }
}
