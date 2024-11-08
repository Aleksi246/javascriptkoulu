
const lista = [];

for(let i = 0;i < 5; i++){

    let numero = Number(prompt("numero"));
    lista.push(numero);


}
for(let i = Number(lista.length)-1;i >= 0; i--){
    console.log(lista[i]);
}