window.addEventListener('load', gamePlay);

function gamePlay() {
    startGame();
}

// Dealer randomly deals a card between 1 and 20
let dealtCard = Math.floor(Math.random()* 20) + 1;
console.log('Dealer card: ' + dealtCard);

// An array with user and bots
let whosTurn = ['user', 'botTwo', 'botOne'];

// Save wins to LS
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

// Save losses to LS
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

// Global variables to set wins/losses
let playerWins;
let bot1Wins;
let bot2Wins;

let playerLosses;
let bot1Losses;
let bot2Losses;

function startGame() {
    const startGame = document.getElementById('start-button');
    startGame.addEventListener('click', () => {
        // nextTurn();
        generateRandomFirstTurn()
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
                nextTurn();
            }
        }
    }, 1000);
}

function generateRandomFirstTurn() {
    const startGame = document.getElementById('start-button');
    const playAgain = document.getElementById('playAgain-button');
    startGame.classList.add('start-button-hide');
    playAgain.classList.add('play-again-button-hide');
    counter();
    let random = Math.floor(Math.random() * whosTurn.length);
    const userValue = document.getElementById('form');
    const userInput = document.getElementById('user-input');
    // if it's 'user' turn it call on getUserInput function
    if (whosTurn[random] == 'user'){
        userInput.classList.add('border-input');
        userValue.classList.remove('hide-form');
        getUserInput();
    // if it's 'botOne' turn it call on getbotOneInput function
    } else if ( whosTurn[random] == 'botOne'){
        userValue.classList.add('hide-form');
        getBotOneInput();
    // if it's 'botTwo' turn, it call on getBotTwoInput function
    } else if (whosTurn[random] == 'botTwo'){
        userValue.classList.add('hide-form');
        getBotTwoInput();
    }
}

// Update images based on win/loss
function updateUserProfileWinImage() {
    let userProfileImg = document.getElementById('user-profile-img');
    userProfileImg.src = './assets/player-win.svg';
}
function updateBot1ProfileWinImage() {
    let bot1ProfileImg = document.getElementById('bot1-profile-img');
    bot1ProfileImg.src = './assets/bot1-win.svg';
}
function updateBot2ProfileWinImage() {
    let bot2ProfileImg = document.getElementById('bot2-profile-img');
    bot2ProfileImg.src = './assets/bot2-win.svg';
}
function updateUserProfileLoseImage() {
    let userProfileImg = document.getElementById('user-profile-img');
    userProfileImg.src = './assets/player-lose.svg';
}
function updateBot1ProfileLoseImage() {
    let bot1ProfileImg = document.getElementById('bot1-profile-img');
    bot1ProfileImg.src = './assets/bot1-lose.svg';
}
function updateBot2ProfileLoseImage() {
    let bot2ProfileImg = document.getElementById('bot2-profile-img');
    bot2ProfileImg.src = './assets/bot2-lose.svg';
}
function updateDealerProfileImage() {
    let dealerProfileImg = document.getElementById('dealer');
    dealerProfileImg.src = './assets/dealer-win.svg';
}

// the length of woshTurn array = 2
let turn = Math.floor(whosTurn.length);

//sets array turn to 0
turn = 0;

// Generates next turn 
function nextTurn(){
    counter();
    if(turn === 2){
        turn = 0;
    } else {
        turn +=1;
    }
    
    const userValue = document.getElementById('form');
    const userInput = document.getElementById('user-input');
    // if it's 'user' turn it call on getUserInput function
    if (whosTurn[turn] == 'user'){
        userInput.classList.add('border-input');
        userValue.classList.remove('hide-form');
        getUserInput();

    // if it's 'botOne' turn it call on getbotOneInput function
    } else if ( whosTurn[turn] == 'botOne'){
        userValue.classList.add('hide-form');
        getBotOneInput();
    
    // if it's 'botTwo' turn, it call on getBotTwoInput function
    } else if (whosTurn[turn] == 'botTwo'){
        userValue.classList.add('hide-form');
        getBotTwoInput();
    }
}

// Logic for bot one, compare with dealers turn number
function getBotOneInput() {
    let bot1GuessAlt = ['One', 'Two', 'Three', 'Four', 'Five'];
    let randomizeBot1Guess = Math.floor(Math.random() * bot1GuessAlt.length);
    let randomNumberbotOne = randomizeBot1Guess;
    // Check which guessing index Bot1 gets
    if (randomizeBot1Guess === 0) {
        randomNumberbotOne = dealtCard - 2;
        if (randomNumberbotOne <= 1) {
            randomNumberbotOne = 1;
        }
    }
    if (randomizeBot1Guess === 1) {
        randomNumberbotOne = dealtCard - 1;
        if (randomNumberbotOne <= 1) {
            randomNumberbotOne = 1;
        }
    }
    if (randomizeBot1Guess === 2) {
        randomNumberbotOne = dealtCard;
    }
    if (randomizeBot1Guess === 3) {
        randomNumberbotOne = dealtCard + 1;
        if(randomNumberbotOne >= 20) {
            randomNumberbotOne = 20;
        }
    }
    if (randomizeBot1Guess === 4) {
        randomNumberbotOne = dealtCard + 2;
        if(randomNumberbotOne >= 20) {
            randomNumberbotOne = 20;
        }
    }

    const dealerSpeak = document.getElementById('higher-lower');
    dealerSpeak.innerHTML = '';
    const userTurn = document.getElementById("user-turn");

    const botTwoPTag = document.getElementById('bot-two-turn')
    const botOnePTag = document.getElementById('bot-one-turn')
    botOnePTag.innerText = 'Franks turn';
    
    // Check if Bot1 guess the right number
    if (dealtCard === randomNumberbotOne) {
        setTimeout(() => {
            botOnePTag.innerText = 'My guess is: ' + randomNumberbotOne;
            setTimeout(() => {
                dealerSpeak.innerText = 'Frank Wins!'
                updateBot1ProfileWinImage();
                updateUserProfileLoseImage();
                updateBot2ProfileLoseImage();
                updateDealerProfileImage()
                const candy = document.getElementById('bot-one-img');
                candy.classList.remove('hide');
                setTimeout(() => {
                    dealerSpeak.innerText = `Play Again?`;
                }, 3000);
            }, 2000);
            const playAgain = document.getElementById('playAgain-button');
            playAgain.classList.remove('play-again-button-hide');
        }, 3000);

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

// Logic for bot two, compare with dealers turn number
function getBotTwoInput() {
    let bot2GuessAlt = ['One', 'Two', 'Three', 'Four', 'Five'];
    let randomizeBot2Guess = Math.floor(Math.random() * bot2GuessAlt.length);
    console.log('Bot 2 guesses array:',randomizeBot2Guess);
    let randomNumberbotTwo = randomizeBot2Guess;
    // Check which guessing index Bot2 gets
    if (randomizeBot2Guess === 0) {
        randomNumberbotTwo = dealtCard - 4;
        if(randomNumberbotTwo <= 1) {
            randomNumberbotTwo = 1;
        }
    }
    if (randomizeBot2Guess === 1) {
        randomNumberbotTwo = dealtCard - 2;
        if(randomNumberbotTwo <= 1) {
            randomNumberbotTwo = 1;
        }
    }
    if (randomizeBot2Guess === 2) {
        randomNumberbotTwo = dealtCard;
    }
    if (randomizeBot2Guess === 3) {
        randomNumberbotTwo = dealtCard + 2;
        if (randomNumberbotTwo >= 20) {
            randomNumberbotTwo = 20;
        }
    }
    if (randomizeBot2Guess === 4) {
        randomNumberbotTwo = dealtCard + 4;
        if (randomNumberbotTwo >= 20) {
            randomNumberbotTwo = 20;
        }
    }

    const dealerSpeak = document.getElementById('higher-lower');
    dealerSpeak.innerHTML = '';
    const userTurn = document.getElementById("user-turn");

    const botOnePTag = document.getElementById('bot-one-turn')
    const botTwoPTag = document.getElementById('bot-two-turn')
    botTwoPTag.innerText = 'Lillys turn';
    // console.log('bot-two guess:', randomNumberbotTwo)

    // Check if Bot2 guess the right number
    if (dealtCard === randomNumberbotTwo) {
        setTimeout(() => {
            botTwoPTag.innerText = 'My guess is: ' + randomNumberbotTwo;
            setTimeout(() => {
                dealerSpeak.innerText = 'Lilly Wins!';
                updateBot2ProfileWinImage();
                updateUserProfileLoseImage();
                updateBot1ProfileLoseImage();
                updateDealerProfileImage()
                const candyBotTwo = document.getElementById('bot-two-img');
                candyBotTwo.classList.remove('hide');
                setTimeout(() => {
                    dealerSpeak.innerText = `Play Again?`;
                }, 3000);
            }, 2000);
            const playAgain = document.getElementById('playAgain-button');
            playAgain.classList.remove('play-again-button-hide');
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
    const userValue = document.getElementById('form');
    userValue.reset();
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
    
    // Sumbmit user guess
    const userForm = document.getElementById('form');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        userValue.classList.add('hide-form');
        fetchUserInput(playerName, userTurn);
    })
}

function fetchUserInput(playerName, userTurn) {
    const userInput = document.getElementById('user-input');
    const userGuess = Number(userInput.value);
    // Validate user guess
    const dealerSpeak = document.getElementById('higher-lower');
    if (userGuess > 20 || userGuess < 1) {
        dealerSpeak.innerText = `Please guess on a number between 1-20, ${playerName}`;
    }
    checkGuess(playerName, userGuess, userTurn);
}

function checkGuess(playerName, userGuess, userTurn) {
    const dealerSpeak = document.getElementById('higher-lower');
    userTurn.innerText = `My guess is ${userGuess}`;
    // Check if Bot2 guess the right number
    if(dealtCard === userGuess) {
        console.log('You win!', userGuess)
        const userTurn = document.getElementById("user-turn");
        userTurn.innerText = "";
        dealerSpeak.innerText = `${playerName} Wins!`
        let candyUser = document.getElementById('user-img');
        candyUser.classList.remove('hide');
        updateUserProfileWinImage();
        updateBot1ProfileLoseImage();
        updateBot2ProfileLoseImage();
        updateDealerProfileImage();
        setUserWinsToLS();
        setBot1LossesToLS();
        setBot2LossesToLS();
        setTimeout(() => {
            userTurn.innerText = "";
            dealerSpeak.innerText = `${playerName} Wins!`
            setTimeout(() => {
                let candyUser = document.getElementById('user-img');
                candyUser.classList.remove('hide');
                dealerSpeak.innerText = `Play Again?`;
            }, 2000)
        }, 3000);
        const playAgain = document.getElementById('playAgain-button');
        playAgain.classList.remove('play-again-button-hide');
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