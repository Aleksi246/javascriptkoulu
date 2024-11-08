const koirat = [];

for(let i = 0;i < 6; i++) {

    let nimi = prompt("name?");
    koirat.push(nimi);
}

koirat.sort().reverse()

let listani = document.getElementById("targ");

for(let i = 0; i < koirat.length;++i){
    const li = document.createElement("li");
    li.innerText = koirat[i];
    listani.appendChild(li)

}
