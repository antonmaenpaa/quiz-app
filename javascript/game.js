// Dealer randomly deals a card between 1 and 20
function gamePlay() {
    getUserInput();
}

let dealtCard = Math.trunc(Math.random()* 20) + 1 ;
console.log(dealtCard);
let numberOfGuesses = 0;

function getUserInput() {
    const userForm = document.getElementById('form');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetchUserInput();
    })
}

function fetchUserInput() {
    const userInput = document.getElementById('user-input');
    const userGuess = Number(userInput.value);
    // console.log(userGuess);
    checkGuess(userGuess);
}

function checkGuess(userGuess) {
    const message = document.getElementById('dealer-msg');
    const guessesMessage = document.getElementById('number-of-guesses');

    if(dealtCard === userGuess) {
        numberOfGuesses++;
        console.log('You win!', userGuess)
        message.innerText = 'You Win!'
        guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    } 
    else if(dealtCard < userGuess) {
        numberOfGuesses++;
        message.innerText = 'Lower!'
        console.log('Lower');
        guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    } 
    else if(dealtCard > userGuess) {
        numberOfGuesses++;
        message.innerText = 'Higher!'
        console.log('Higher');
        guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    }
}



// Bot-1's guessing function   

// Bot-2's guessing function

// Bot-3's guessing function 