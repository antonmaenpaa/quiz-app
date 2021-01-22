const modalActive = document.querySelector(".modal-active");
const closeIcon = document.querySelector(".close");

const allBotButtons = document.querySelectorAll("section#bot-container #bot-box button");

for (let button of allBotButtons) {
    button.addEventListener("click", () => {
        displayModal(button);
    });
}

function displayModal(button) {
    modalActive.style.display = "block";

    const botTitle = document.getElementById("bot-title");
    botTitle.innerText = button.innerText;

    const botDescription = document.querySelector("#bot-info");

    if (button.innerText === "PIKACHU") {
        botDescription.innerText = "Pokémon Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio inventore asperiores iste placeat fugit ipsam iusto vero laudantium quisquam.";
    } 
    if (button.innerText === "PETER") {
        botDescription.innerText = "Family guy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio inventore asperiores iste placeat fugit ipsam iusto vero laudantium quisquam.";
    } 
    if (button.innerText === "PINGU") {
        botDescription.innerText = "Pingus värld Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio inventore asperiores iste placeat fugit ipsam iusto vero laudantium quisquam.";
    } 

}

closeIcon.addEventListener("click", () => {
    modalActive.style.display = "none";
});