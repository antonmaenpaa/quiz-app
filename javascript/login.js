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
    console.log(username, password);


}