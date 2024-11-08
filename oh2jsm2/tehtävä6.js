function noppa(){
    return Math.floor(Math.random()*6)+1
}
const heitot = [];
while(true){

    let arvo = noppa()
    heitot.push(arvo);

    if(arvo === 6){
        break
    }
}
let listani = document.getElementById("targ");

for(let i = 0; i < heitot.length;++i){
    const li = document.createElement("li");
    li.innerText = heitot[i];
    listani.appendChild(li)

}
