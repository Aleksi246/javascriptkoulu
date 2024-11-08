const numerot = [];

while (true){
    let numero = Number(prompt("numero?"));
    if(numerot.includes(numero)){
        break
    }
    numerot.push(numero);

}
numerot.sort(function (a, b){return a-b});

for(let i = 0;i<numerot.length;i++){
    console.log(numerot[i])
}