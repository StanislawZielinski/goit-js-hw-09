const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
startBtn.addEventListener("click", changeColor);
function changeColor(event) {
    function changeBodyColor() {
        body.style.backgroundColor = randomColor();
    };
    setInterval(changeBodyColor, 1000);
};
stopBtn.addEventListener("click", stopChanging);
function stopChanging() {
    clearInterval(changeBodyColor);    
};



   const randomColor = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

