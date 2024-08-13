//variaveis
const clickImage = document.querySelector(".screen1 button")
const switchMessage = document.querySelector(".screen2 button")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cardhidden  = document.querySelector(".secondCard")
const card = document.querySelector(".card")

//callbacks
clickImage.addEventListener("click", pressclickImage)
switchMessage.addEventListener("click", returnscreen1)



 let isCardHiddenVisible = false;

// Funções
function pressclickImage() {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
}

function returnscreen1() {
    screen2.classList.add("hide");
    screen1.classList.remove("hide");
   handleCardToggle()
}

function handleCardToggle() {

    cardhidden.classList.toggle("hide")
    card.classList.toggle("hide")

}