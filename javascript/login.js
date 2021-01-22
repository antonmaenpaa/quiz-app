window.addEventListener('load', loginEventListeners);

function loginEventListeners() {
    const userDetailsForm = document.getElementById('userDetailsForm');
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', () => {
        loginDetails();
    })
}

function loginDetails() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const usernameInputField = document.getElementById('username');
    const passwordInputField = document.getElementById('password');    
    const registeredUser = JSON.parse(localStorage.getItem("user"));

    if (username === registeredUser.username && password === registeredUser.password) {
        location.href = "./index.html"
    } else if (username === "" && password === "") {
        passwordInputField.classList.add('add-border-input');
        usernameInputField.classList.add('add-border-input');

    } else if(username !== registeredUser.username) {
        console.log('failed username')
        usernameInputField.classList.add('add-border-input');

    } else if(password !== registeredUser.password) {
        console.log('failed password')
        passwordInputField.classList.add('add-border-input');
    }
        
        
        // const removeBorder = passwordInputField.classList.remove('add-border-input')
        // setTimeout(() => {
        //     removeBorder;
        // }, 2000)
}