window.addEventListener('load', fetchUserAndBotsPoints);

function fetchUserAndBotsPoints() {

    // Getting bot one wins from localstorage
    const botOne = localStorage.getItem('bot1Wins');
    console.log('Franks score: ' + botOne);

    // Getting bot two wins from localstorage
    const botTwo = localStorage.getItem('bot2Wins');
    console.log('Lillys score: ' + botTwo);

    // Getting user wins from localstorage
    const usernameInput = JSON.parse(localStorage.getItem("user"));
    const playerName = usernameInput.username;
    const user = localStorage.getItem(playerName);
    console.log(playerName + 's score: ' + user);

    checkWhosInFirstPlace(botOne, botTwo, user);
    checkWhosInSecondPlace(botOne, botTwo, user);
    checkWhosInThirdPlace(botOne, botTwo, user);
}

function checkWhosInFirstPlace(botOne, botTwo, user) {
    // compare user and bots wins to see whos is on first place
    if(user > botTwo && user > botOne) {

        // creates an img element and adds it to html
        let img = document.createElement('img');
        img.src = './assets/player-win.svg';
        let userImgs = document.getElementById('first-p').appendChild(img);
        userImgs.classList.add('first-place-image');

    } else if(botTwo > user && botTwo > botOne) {

        // creates an img element and adds it to html
        let img = document.createElement('img');
        img.src = './assets/bot2-win.svg';
        let userImgs = document.getElementById('first-p').appendChild(img);
        userImgs.classList.add('first-place-image');
        
    } else if(botOne > user && botOne > botTwo) {

        // creates an img element and adds it to html
        let img = document.createElement('img');
        img.src = './assets/bot1-win.svg';
        let userImgs = document.getElementById('first-p').appendChild(img);
        userImgs.classList.add('first-place-image');
    } 
}    

function checkWhosInSecondPlace(botOne, botTwo, user) {
    // Checks who is in second place
    if(botOne < user && botOne > botTwo || botOne > user && botOne < botTwo) {
        let img = document.createElement('img');
        img.src = './assets/bot1-win.svg';
        let userImgs = document.getElementById('second-p').appendChild(img);
        userImgs.classList.add('second-place-image');
    }
    
    if(user < botOne && user > botTwo || user > botOne && user < botTwo) {
        let img = document.createElement('img');
        img.src = './assets/player-win.svg';
        let userImgs = document.getElementById('second-p').appendChild(img);
        userImgs.classList.add('second-place-image');
    }
    
    if(botTwo < botOne && botTwo > user || botTwo > botOne && botTwo < user) {
        let img = document.createElement('img');
        img.src = './assets/bot2-win.svg';
        let userImgs = document.getElementById('second-p').appendChild(img);
        userImgs.classList.add('second-place-image');    
    }
}

function checkWhosInThirdPlace(botOne, botTwo, user) {
    if(botOne < user && botOne < botTwo || botOne < user && botOne < botTwo) {
        let img = document.createElement('img');
        img.src = './assets/bot1-win.svg';
        let userImgs = document.getElementById('third-p').appendChild(img);
        userImgs.classList.add('third-place-image');
    }

    if(user < botOne && user < botTwo || user < botOne && user < botTwo) {
        let img = document.createElement('img');
        img.src = './assets/player-win.svg';
        let userImgs = document.getElementById('third-p').appendChild(img);
        userImgs.classList.add('third-place-image');
    }

    if(botTwo < botOne && botTwo < user || botTwo < botOne && botTwo < user) {
        let img = document.createElement('img');
        img.src = './assets/bot2-win.svg';
        let userImgs = document.getElementById('third-p').appendChild(img);
        userImgs.classList.add('third-place-image');
    }
}