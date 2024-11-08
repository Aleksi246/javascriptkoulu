function noppa(eyes){
    return Math.floor(Math.random()*eyes)+1
}

const heitot = [];

const silmaluku = Number(prompt("eyes?"))

while(true){

    let arvo = noppa(silmaluku)
    heitot.push(arvo);

    if(arvo === silmaluku){
        break
    }
}
let listani = document.getElementById("targ");

for(let i = 0; i < heitot.length;++i){
    const li = document.createElement("li");
    li.innerText = heitot[i];
    listani.appendChild(li)

}
