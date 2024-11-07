

const numero1 = Number(prompt("numero: "));
const numero2 = Number(prompt("numero: "));
const numero3 = Number(prompt("numero: "));

const summa = numero1 + numero2 + numero3;
const keskiarvo = summa/3;

document.querySelector('#target').innerHTML = `summa: ${summa} keskiarvo: ${keskiarvo}`