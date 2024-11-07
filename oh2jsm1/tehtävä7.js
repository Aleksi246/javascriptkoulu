
const noppalkm = Number(prompt("number of dice rolls?"));

let summa = 0;
for(let i= 0;i < noppalkm;i++) {
  let numero1 = Math.floor(Math.random() * 6) + 1
  summa += numero1
}
document.querySelector("#target").innerHTML = summa