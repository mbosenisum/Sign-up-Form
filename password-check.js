
/* to-do:
password matching in javascript **
odin logo + semi-transparent background
separate form background
styling 

*/



// add event listener for button

// submit = document.getElementById('create');
let submit = document.getElementsByClassName('submit');
// console.log("test");
console.log(submit);
submit.addEventListener("click", () => console.log("click"));

submit.addEventListener("click", () => {
pwd1 = document.getElementById('password');
pwd2 = document.getElementById('passwordconfirm');

console.log("pwd1 = ", + pwd1);
console.log("pwd2 = ", + pwd2);
});