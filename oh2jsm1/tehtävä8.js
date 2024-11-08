const start = Number(prompt("start year"));
const  end = Number(prompt("end year"));

let joku1 = ``;

for(let i = start; i <= end; i++){

    let arvo = false;
    if(i%4 === 0){

        if(i%100 === 0){
            if(i%400 ===0){
                arvo = true
            }
        }
        else {
             arvo = true
        }
    }
    if(arvo === true){
        let listaitem = `<li>${i}</li>`
        joku1 +=  listaitem
    }
}

document.querySelector("#target").innerHTML = `<ul>${joku1}</ul>`