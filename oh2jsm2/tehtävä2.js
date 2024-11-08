const noosallistujat = Number(prompt("number of participants"));
const participants = [];

for(let i = 0;i < noosallistujat; i++){

    let nimi = prompt("name?");
    participants.push(nimi);


}

participants.sort();
console.log(participants)




let listani = document.getElementById("targ");

for(let i = 0; i < participants.length;++i){
    const li = document.createElement("li");
    li.innerText = participants[i];
    listani.appendChild(li)

}
