function registerEventListeners() {
    const registerForm = document.getElementById('registerForm');
    const registrationBtn = document.getElementById('registrationBtn');
    registrationBtn.addEventListener('click', () => {
        registrationDetails();
    })
}

function registrationDetails() {
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;
    const regPassword2 = document.getElementById('regPassword2').value;
    // Implement if statment if passwords match
    console.log(regUsername, regPassword, regPassword2)
}

