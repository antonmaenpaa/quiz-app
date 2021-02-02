window.addEventListener("load", test);

function test() {
    if (innerWidth <= 992) {
        console.log(innerWidth);
        responsiveHandler();
    } else {
        const infoBtn = document.querySelector(".how-to-play-icon .info-btn");
        const ruleContainer = document.querySelector(".rules-container");
    
        infoBtn.addEventListener("mouseover", () => {
            ruleContainer.style.display = "block";
        });
        infoBtn.addEventListener("mouseout", () => {
            ruleContainer.style.display = "none";
        });
    }
}
function responsiveHandler() {
    const infoBtn = document.querySelector(".how-to-play-icon .info-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const ruleContainer = document.querySelector(".rules-container");
    
    infoBtn.addEventListener("click", () => {
        ruleContainer.style.display = "block";
        cancelBtn.style.display = "block";  
        infoBtn.style.display = "none";
    });
    cancelBtn.addEventListener("click", () => {
        ruleContainer.style.display = "none";
        cancelBtn.style.display = "none";  
        infoBtn.style.display = "block";
    });

    
}

