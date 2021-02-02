window.addEventListener('load', registerEventListeners);

function registerEventListeners() {
    const registerForm = document.getElementById('registerForm');
    const registrationBtn = document.getElementById('registrationBtn');
    registrationBtn.addEventListener('click', () => {
        registrationDetails();
        
    })
}

function registrationDetails() {
    const regUsername = document.getElementById('regUsername');
    const regPassword = document.getElementById('regPassword');
    const regPassword2 = document.getElementById('regPassword2');

    inputUsername = regUsername.value;
    inputPassword = regPassword.value;
    inputPassword2 = regPassword2.value;

    // Implement if statment if passwords match
    if (inputUsername === "" || inputPassword === "" || inputPassword2 === "") {
        regUsername.classList.add('add-border-input');
        regPassword.classList.add('add-border-input');
        regPassword2.classList.add('add-border-input');
    } else if (inputPassword !== inputPassword2) {
        console.log('Your password doesnt match')
        regPassword.classList.add('add-border-input');
        regPassword2.classList.add('add-border-input');
    } else {
        regUsername.classList.remove('add-border-input');
        regPassword.classList.remove('add-border-input');
        regPassword2.classList.remove('add-border-input');
        const userObj = {
            username: regUsername.value,
            password: regPassword.value,
        };
        saveRegisteredUser(userObj);
        location.href = "./login.html"        
        console.log(userObj);
    }
}

function saveRegisteredUser(userObj) {
    localStorage.setItem("user", JSON.stringify(userObj));
}
