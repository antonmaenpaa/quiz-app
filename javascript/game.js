
// Dealer randomly deals a card between 1 and 20
let dealtCard = Math.trunc(Math.random()* 20) + 1 ;

// an array with user and bots
let whosTurn = ['user', 'botOne', 'botTwo'];


function gamePlay() {

    generateRandomTurn();


}

// function that pick a random bot or the user
function generateRandomTurn(){

        // generates random value from whosTurn array
        let random = Math.floor(Math.random() * whosTurn.length)
 
        // if it's 'user' turn it call on getUserInput function
        if (whosTurn[random] == 'user'){
            const userInput = document.getElementById('user-input');
            userInput.classList.add('border-input');
            getUserInput();
    
        // if it's 'botOne' turn it call on getbotOneInput function
        } else if ( whosTurn[random] == 'botOne'){
            // console.log('bot-one')
            const userInput = document.getElementById('user-input');
            userInput.classList.remove('border-input');
            getBotOneInput();
        
        // if it's 'botTwo' turn, it call on getBotTwoInput function
        } else if (whosTurn[random] == 'botTwo'){
            // console.log('bot-two')
            const userInput = document.getElementById('user-input');
            userInput.classList.remove('border-input');
    
            getBotTwoInput();
        }
}

// logic for bot one, compare with dealer random number
function getBotOneInput() {
    const botTwoPTag = document.getElementById('bot-two-turn')
    const botOnePTag = document.getElementById('bot-one-turn')
    botOnePTag.innerText = 'My turn';

    const randomNumberbotOne = Math.floor(Math.random() * 20 + 1)
    console.log('dealer-card', dealtCard);
    console.log('bot-one', randomNumberbotOne)


    if (dealtCard === randomNumberbotOne) {
        console.log('you Win')

        // adds candy when bot one wins round
        const candy = document.getElementById('bot-one-img');
        candy.classList.remove('hide');

        botTwoPTag.innerText = ""

    } else if(dealtCard > randomNumberbotOne) {

        setTimeout(generateRandomTurn, 3000);
        botTwoPTag.innerText = ""
        console.log('higher')

    } else if(dealtCard < randomNumberbotOne) {
        
        setTimeout(generateRandomTurn, 3000);
        botTwoPTag.innerText = ""
        console.log('lower')
    }
    // console.log('botEEIIIT')
}


// logic for bot two, compare with dealer random number
function getBotTwoInput() {
    const botOnePTag = document.getElementById('bot-one-turn')
    const botTwoPTag = document.getElementById('bot-two-turn')
    botTwoPTag.innerText = 'My turn';


    const randomNumberbotTwo = Math.floor(Math.random() * 20 + 1)
    console.log('dealer-card', dealtCard);
    console.log('bot-two', randomNumberbotTwo)

    if (dealtCard === randomNumberbotTwo) {

        // adds candy when bot two wins round
        const candyBotTwo = document.getElementById('bot-two-img');
        candyBotTwo.classList.remove('hide');

        botOnePTag.innerText = ""
        console.log('you Win')

    } else if(dealtCard > randomNumberbotTwo) {

        setTimeout(generateRandomTurn, 3000);
        botOnePTag.innerText = ""
        console.log('higher')

    } else if(dealtCard < randomNumberbotTwo) {

        setTimeout(generateRandomTurn, 3000);
        botOnePTag.innerText = ""
        console.log('lower')
    }
    // console.log('botTVÅÅÅÅ')
}

// console.log(dealtCard);
// let numberOfGuesses = 0;

function getUserInput() {
    console.log('dealer-card', dealtCard);

    const botOnePTag = document.getElementById('bot-one-turn')
    const botTwoPTag = document.getElementById('bot-two-turn')
    botOnePTag.innerText = '';
    botTwoPTag.innerText = '';
    
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
    // const guessesMessage = document.getElementById('number-of-guesses');

    if(dealtCard === userGuess) {
        // numberOfGuesses++;
        console.log('You win!', userGuess)
        message.innerText = 'You Win!'
        let candyUser = document.getElementById('user-img');
        candyUser.classList.remove('hide');
        // guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    } 
    else if(dealtCard < userGuess) {
        // numberOfGuesses++;
        console.log('dealer-card', dealtCard);
        message.innerText = 'Lower!'
        console.log('Lower');
        setTimeout(generateRandomTurn, 3000);
   
        // guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    } 
    else if(dealtCard > userGuess) {
        // numberOfGuesses++;
        console.log('dealer-card', dealtCard);
        message.innerText = 'Higher!'
        console.log('Higher');
        setTimeout(generateRandomTurn, 3000);

        
        // guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    }
}



// Bot-1's guessing function   

// Bot-2's guessing function

// Bot-3's guessing function 