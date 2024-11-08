const  numero = Number(prompt("numero"));


document.querySelector("#target").innerHTML = "is prime"

for(let i = 2; i <= numero/2; i++){
    if(numero%i != 0){
        console.log(i)
    }
    else {
        console.log("hello" +i)
        document.querySelector("#target").innerHTML = "is not prime"
        break
    }
}