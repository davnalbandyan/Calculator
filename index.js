// const main = document.querySelector(".main");
// const answer = document.querySelector(".answer");
// const btns = document.querySelectorAll(".btns button");
// const clear = document.querySelector(".clear");

// // const calc = document.querySelectorAll(".btns .calc button");



// let arr = [] ;

// btns.forEach(item => {
//     item.addEventListener("click", () => {
//         answer.value += item.textContent;
//     });
//     clear.addEventListener("click", () => {
//         answer.value = "";
//     });
       
// });


const one = document.querySelector("#one")
const two = document.querySelector("#two")
const plus = document.querySelector(".plus")
const equal = document.querySelector(".equal")

const res = document.querySelector(".res")

equal.addEventListener("click",()=>{
 let result = parseFloat(one.value) + parseFloat(two.value)
 console.log(result);
});











