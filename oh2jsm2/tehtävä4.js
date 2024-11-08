const numerot = [];

while (true){
    let numero = Number(prompt("numero?"));
    if(numero === 0){
        break
    }
    numerot.push(numero);

}
numerot.sort(function (a, b){return b-a});

for(let i = 0;i<numerot.length;i++){
    console.log(numerot[i])
}