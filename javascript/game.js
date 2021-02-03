window.addEventListener('load', gamePlay);

function gamePlay() {
    startGame();
}

// Dealer randomly deals a card between 1 and 20
let dealtCard = Math.floor(Math.random()* 20) + 1;
console.log('Dealer card: ' + dealtCard);

// An array with user and bots
let whosTurn = ['user', 'botOne', 'botTwo'];


// save wins to LS
function setUserWinsToLS() {
    const usernameInput = JSON.parse(localStorage.getItem("user"));
    const playerName = usernameInput.username;
    playerWins = JSON.parse(localStorage.getItem(playerName));
    playerWins +=1;
    localStorage.setItem(playerName, playerWins);
}

function setBot1WinsToLS() {
    bot1Wins = JSON.parse(localStorage.getItem('bot1Wins'));
    bot1Wins +=1;
    localStorage.setItem('bot1Wins', bot1Wins);
}
function setBot2WinsToLS() {
    bot2Wins = JSON.parse(localStorage.getItem('bot2Wins'));
    bot2Wins +=1;
    localStorage.setItem('bot2Wins', bot2Wins);
}


// save losses to LS
function setBot1LossesToLS() {
    bot1Losses = JSON.parse(localStorage.getItem('bot1Losses'));
    bot1Losses +=1;
    localStorage.setItem('bot1Losses', bot1Losses);
    
}
function setBot2LossesToLS() {
    bot2Losses = JSON.parse(localStorage.getItem('bot2Losses'));
    bot2Losses +=1;
    localStorage.setItem('bot2Losses', bot2Losses);

}
function setUserLossesToLS() {
    const usernameInput = JSON.parse(localStorage.getItem("user"));
    const playerName = usernameInput.username;
    playerWins = JSON.parse(localStorage.getItem(playerName));
    playerLosses = JSON.parse(localStorage.getItem(playerName + ' losses'));
    playerLosses +=1;
    localStorage.setItem(playerName + ' losses', playerLosses);
}

// Global vars to hold wins/losses
let playerWins;
let bot1Wins;
let bot2Wins;

let playerLosses;
let bot1Losses;
let bot2Losses;

function startGame() {
    const startGame = document.getElementById('start-button');
    startGame.addEventListener('click', () => {
        generateRandomTurn();
    })
}

function playAgain() {
    const playAgain = document.getElementById('playAgain-button');
    playAgain.addEventListener('click', () => {
        window.location.reload();
    })
}

let guessedRight = false;

function counter() {
    let countDown = 10;
    let interval = setInterval(() => {
        let timer = document.getElementById('count-down');
        timer.innerText = countDown--;

        if (countDown <= -1) {
            if (guessedRight) {
                clearInterval(interval);
                playAgain();
            } else {
                clearInterval(interval);
                generateRandomTurn();
            }
        }
    }, 1000);
}


// function that pick a random bot or the user
function generateRandomTurn(){
    counter();
    // generates random value from whosTurn array
    let random = Math.floor(Math.random() * whosTurn.length)

    // if it's 'user' turn it call on getUserInput function
    if (whosTurn[random] == 'user'){
        const userInput = document.getElementById('user-input');
        userInput.classList.add('border-input');
        getUserInput();

    // if it's 'botOne' turn it call on getbotOneInput function
    } else if ( whosTurn[random] == 'botOne'){
        const userInput = document.getElementById('user-input');
        userInput.classList.remove('border-input');
        getBotOneInput();
    
    // if it's 'botTwo' turn, it call on getBotTwoInput function
    } else if (whosTurn[random] == 'botTwo'){
        const userInput = document.getElementById('user-input');
        userInput.classList.remove('border-input');
        getBotTwoInput();
    }
}

// logic for bot one, compare with dealer random number
function getBotOneInput() {
    const dealerSpeak = document.getElementById('higher-lower');
    dealerSpeak.innerHTML = '';
    const userTurn = document.getElementById("user-turn");

    const botTwoPTag = document.getElementById('bot-two-turn')
    const botOnePTag = document.getElementById('bot-one-turn')
    botOnePTag.innerText = 'Franks turn';

    const randomNumberbotOne = Math.floor(Math.random() * 20 + 1); 
    
    console.log('bot-one', randomNumberbotOne)
    
    if (dealtCard === randomNumberbotOne) {
        setTimeout(() => {
            botOnePTag.innerText = 'My guess is: ' + randomNumberbotOne;
            setTimeout(() => {
                dealerSpeak.innerText = 'Frank Wins!'
                const candy = document.getElementById('bot-one-img');
                candy.classList.remove('hide');
            }, 2000);
        }, 3000);
        // adds candy when bot one wins round

        
        userTurn.innerText = "";
        botTwoPTag.innerText = "";
        setBot1WinsToLS();
        setBot2LossesToLS();
        setUserLossesToLS();
        guessedRight = true;
    } else if(dealtCard > randomNumberbotOne) {
        setTimeout(() => {
            botOnePTag.innerText = 'My guess is: ' + randomNumberbotOne;
            setTimeout(() => {
                dealerSpeak.innerHTML = 'Higher!';
            }, 2000);
        }, Math.floor(Math.random() * 6000) + 3);
        userTurn.innerText = "";
        botTwoPTag.innerText = "";
        console.log('higher')

    } else if (dealtCard < randomNumberbotOne) {
        setTimeout(() => {
            botOnePTag.innerText = 'My guess is: ' + randomNumberbotOne;
            setTimeout(() => {
                dealerSpeak.innerHTML = 'Lower!';
            }, 2000);
        }, Math.floor(Math.random() * 6000) + 3);
        userTurn.innerText = "";
        botTwoPTag.innerText = ""
        console.log('lower')
    }
}

// logic for bot two, compare with dealer random number
function getBotTwoInput() {
    const dealerSpeak = document.getElementById('higher-lower');
    dealerSpeak.innerHTML = '';
    const userTurn = document.getElementById("user-turn");

    const botOnePTag = document.getElementById('bot-one-turn')
    const botTwoPTag = document.getElementById('bot-two-turn')
    botTwoPTag.innerText = 'Lillys turn';

    const randomNumberbotTwo = Math.floor(Math.random() * 20 + 1);

    console.log('bot-two', randomNumberbotTwo)

    if (dealtCard === randomNumberbotTwo) {

        // adds candy when bot two wins round
        setTimeout(() => {
            botTwoPTag.innerText = 'My guess is: ' + randomNumberbotTwo;
            setTimeout(() => {
                dealerSpeak.innerText = 'Lilly Wins!';
                const candyBotTwo = document.getElementById('bot-two-img');
                candyBotTwo.classList.remove('hide');
            }, 2000);
        }, 3000);
        userTurn.innerText = "";
        botOnePTag.innerText = "";
        setBot2WinsToLS();
        setBot1LossesToLS();
        setUserLossesToLS();
        guessedRight = true;
    } else if(dealtCard > randomNumberbotTwo) {
        setTimeout(() => {
            botTwoPTag.innerText = 'My guess is: ' + randomNumberbotTwo;
            setTimeout(() => {
                dealerSpeak.innerHTML = 'Higher!';
            }, 2000);
        }, Math.floor(Math.random() * 6000) + 3);
        userTurn.innerText = "";
        botOnePTag.innerText = "";
        dealerSpeak.innerHTML = '';
        console.log('higher')

    } else if(dealtCard < randomNumberbotTwo) {
        setTimeout(() => {
            botTwoPTag.innerText = 'My guess is: ' + randomNumberbotTwo;
            setTimeout(() => {
                dealerSpeak.innerHTML = 'Lower!';
            }, 2000);
        }, Math.floor(Math.random() * 6000) + 3);
        userTurn.innerText = "";
        botOnePTag.innerText = "";
        console.log('lower')
    }
}

function getUserInput() {
    const dealerSpeak = document.getElementById('higher-lower');
    dealerSpeak.innerText = "";

    const botOnePTag = document.getElementById('bot-one-turn')
    const botTwoPTag = document.getElementById('bot-two-turn')
    botOnePTag.innerText = '';
    botTwoPTag.innerText = '';

    const usernameInput = JSON.parse(localStorage.getItem("user"));
    const playerName = usernameInput.username;
    const userTurn = document.getElementById("user-turn");
    userTurn.innerText = `${playerName}'s turn`;
    
    const userForm = document.getElementById('form');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetchUserInput(playerName, userTurn);
    })
}

function fetchUserInput(playerName, userTurn) {
    const userInput = document.getElementById('user-input');
    const userGuess = Number(userInput.value);
    if (userGuess > 20 || userGuess < 1) {
        dealerSpeak.innerText = `Please guess on a number between 1-20, ${playerName}`;
    }
    checkGuess(playerName, userGuess, userTurn);
}

function checkGuess(playerName, userGuess, userTurn) {
    const dealerSpeak = document.getElementById('higher-lower');
    userTurn.innerText = `My guess is ${userGuess}`;

    if(dealtCard === userGuess) {
        console.log('You win!', userGuess)
        const userTurn = document.getElementById("user-turn");
        userTurn.innerText = "";
        dealerSpeak.innerText = `${playerName} Wins!`
        let candyUser = document.getElementById('user-img');
        candyUser.classList.remove('hide');
        setUserWinsToLS();
        setBot1LossesToLS();
        setBot2LossesToLS();
        setTimeout(() => {
            userTurn.innerText = "";
            dealerSpeak.innerText = `${playerName} Wins!`
            setTimeout(() => {
                let candyUser = document.getElementById('user-img');
                candyUser.classList.remove('hide');
            }, 2000)
        }, 3000);

        guessedRight = true;
    } 
    else if(dealtCard < userGuess) {
        setTimeout(() => {
            dealerSpeak.innerText = 'Lower!';
        }, 2000);
        console.log('Dealer: Lower')
    } 
    else if(dealtCard > userGuess) {
        setTimeout(() => {
            dealerSpeak.innerText = 'Higher!';
        }, 2000);
        console.log('Dealer: Higher');
    }
}



// Bot-1's guessing function   

// Bot-2's guessing function

// Bot-3's guessing function 