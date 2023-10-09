const main = document.querySelector(".main");
const answer = document.querySelector(".answer");
const btns = document.querySelectorAll(".btns button");
const clear = document.querySelector(".clear");

// const calc = document.querySelectorAll(".btns .calc button");



let arr = [] ;

btns.forEach(item => {
    item.addEventListener("click", () => {
        answer.value += item.textContent;
    });
    clear.addEventListener("click", () => {
        answer.value = "";
    });
       
});













