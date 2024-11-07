

const nimi = prompt("what is your name?");
const arvo = Math.floor(Math.random()*4)

let talo;
if (arvo === 0){
  talo = "ravenclaw"
}
else if(arvo === 1){
  talo = "griffindor"
}
else if (arvo === 2){
  talo = "slytherin"
}
else if (arvo === 3){
  talo = "hufflepuff"
}

document.querySelector('#target').innerHTML = `${nimi}, you are ${talo}.`;