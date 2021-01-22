// Dealer randomly deals a card between 1 and 20
let dealtCard = Math.trunc(Math.random()* 20) + 1 ;

const showMessage = function (message) {
    document.querySelector('.message').textContent = message;

}

// The USER's guessing function
document.querySelector('.btn').addEventListener('click', function() {
    const guess = Number(document.getElementById("user-value").value);

    if(!guess === dealtCard) 
    {
        showMessage('Right number!');
    } 
    showMessage ( guess > dealtCard ? 'Lower!' : 'Higher!');
    
    // if (guess > dealtCard) {
    //     showMessage('Lower!');
    // } 
    
    // if (guess < dealtCard) {
    //     showMessage ('Higher!');
    // }
});

// Bot-1's guessing function

// Bot-2's guessing function

// Bot-3's guessing function 