
// Dealer randomly deals a card between 1 and 20
let dealtCard = Math.trunc(Math.random()* 20) + 1 ;

// an array with user and bots
let whosTurn = ['user', 'botOne', 'botTwo'];


// var timeleft = 10;
// var downloadTimer = setInterval(function(){​​​​
//   if(timeleft <= 0){​​​​
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//   }​​​​ else {​​​​
//     document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//   }​​​​
//   timeleft -= 1;
// }​​​​, 1000);


// let countDown = [5, 4, 3, 2, 1];

function counter() {
    let countDown = 10;
    let interval = setInterval(() => {
        let timer = document.getElementById('count-down');
        timer.innerText = countDown--;

        if(countDown <= -1){
           clearInterval(interval);
           generateRandomTurn();
        }
    }, 1000);
    // const timer = document.getElementById('count-down');

    // for(let seconds of countDown) {
    //     setInterval(() => {
    //         timer.innerText = seconds;
    //         console.log(seconds)
    //     }, 5000);
    // }
    }




function gamePlay() {
    generateRandomTurn();
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
    // counter();

    const dealerSpeak = document.getElementById('higher-lower');

    const botTwoPTag = document.getElementById('bot-two-turn')
    const botOnePTag = document.getElementById('bot-one-turn')
    botOnePTag.innerText = 'Franks turn';

    const randomNumberbotOne = Math.floor(Math.random() * 20 + 1);
    
    console.log('bot-one', randomNumberbotOne)


    if (dealtCard === randomNumberbotOne) {
        console.log('you Win')
        dealerSpeak.innerText = 'Frank Wins!'
        // adds candy when bot one wins round
        const candy = document.getElementById('bot-one-img');
        candy.classList.remove('hide');
        

        botTwoPTag.innerText = ""

    } else if(dealtCard > randomNumberbotOne) {

        // setTimeout(generateRandomTurn, 5000);
        setTimeout(() => {
            botOnePTag.innerText = 'my guess is: ' + randomNumberbotOne;
        }, Math.floor(Math.random() * 8000) + 3);
        
        botTwoPTag.innerText = "";
        dealerSpeak.innerHTML = 'Higher';
        console.log('higher')

    } else if(dealtCard < randomNumberbotOne) {
        
        // setTimeout(generateRandomTurn, 5000);
        setTimeout(() => {
            botOnePTag.innerText = 'my guess is: ' + randomNumberbotOne;
        }, Math.floor(Math.random() * 8000) + 3);
        
        botTwoPTag.innerText = ""
        dealerSpeak.innerHTML = 'Lower';
        console.log('lower')
    }
    // console.log('botEEIIIT')
}

// logic for bot two, compare with dealer random number
function getBotTwoInput() {
    // counter();
    const dealerSpeak = document.getElementById('higher-lower');

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
        dealerSpeak.innerText = 'Lilly Wins!'

        botOnePTag.innerText = ""
        console.log('you Win')

    } else if(dealtCard > randomNumberbotTwo) {

        // setTimeout(generateRandomTurn, 5000);
        setTimeout(() => {
            botTwoPTag.innerText = 'my guess is: ' + randomNumberbotTwo;
        }, Math.floor(Math.random() * 8000) + 3);
        
        botOnePTag.innerText = ""
        dealerSpeak.innerHTML = 'Higher';
        console.log('higher')

    } else if(dealtCard < randomNumberbotTwo) {

        // setTimeout(generateRandomTurn, 5000);
        setTimeout(() => {
            botTwoPTag.innerText = 'my guess is: ' + randomNumberbotTwo;
        }, Math.floor(Math.random() * 8000) + 3);
        
        botOnePTag.innerText = ""
        dealerSpeak.innerHTML = 'Lower';
        console.log('lower')
    }
    // console.log('botTVÅÅÅÅ')
}

// console.log(dealtCard);
// let numberOfGuesses = 0;

function getUserInput() {
    console.log('dealer-card', dealtCard);
    // counter();

    const botOnePTag = document.getElementById('bot-one-turn')
    const botTwoPTag = document.getElementById('bot-two-turn')
    botOnePTag.innerText = '';
    botTwoPTag.innerText = '';

    const usernameInput = JSON.parse(localStorage.getItem("user"));
    const playerName = usernameInput.username;
    const userTurn = document.getElementById("user-turn");
    console.log(userTurn);
    userTurn.innerText = `${playerName}s turn`;
    
    const userForm = document.getElementById('form');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetchUserInput(playerName);
    })
}

function fetchUserInput(playerName) {
    const userInput = document.getElementById('user-input');
    const userGuess = Number(userInput.value);
    if (userGuess > 20 || userGuess < 1) {
        alert("Guess is invalid");
    }

    // console.log(userGuess);
    checkGuess(playerName, userGuess);
}

function checkGuess(playerName, userGuess) {
    const dealerSpeak = document.getElementById('higher-lower');
    // const guessesMessage = document.getElementById('number-of-guesses');

    if(dealtCard === userGuess) {
        // numberOfGuesses++;
        console.log('You win!', userGuess)
        const userTurn = document.getElementById("user-turn");
        userTurn.innerText = "";
        dealerSpeak.innerText = `${playerName} Wins!`
        let candyUser = document.getElementById('user-img');
        candyUser.classList.remove('hide');
        // guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    } 
    else if(dealtCard < userGuess) {
        // numberOfGuesses++;
        console.log('dealer-card', dealtCard);
        dealerSpeak.innerText = 'Lower!'
        console.log('Lower');
        // setTimeout(generateRandomTurn, 3000);
   
        // guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    } 
    else if(dealtCard > userGuess) {
        // numberOfGuesses++;
        console.log('dealer-card', dealtCard);
        dealerSpeak.innerText = 'Higher!'
        console.log('Higher');
        // setTimeout(generateRandomTurn, 3000);

        
        // guessesMessage.innerText = `Number of guesses: ${numberOfGuesses}`;
    }
}

// Bot-1's guessing function   

// Bot-2's guessing function

// Bot-3's guessing function 