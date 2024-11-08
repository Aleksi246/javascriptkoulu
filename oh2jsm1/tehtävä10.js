const  nubmerofdie = Number(prompt("number of die"));
const  sumofintrest = Number(prompt("sum of eyes"));

const accuracy = 10000;

let counter = 0;
for(let i = 0; i < accuracy; i++){
    let sum = 0;

    for(let i = 1;i <= nubmerofdie;i++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice)
        sum += dice

    }
    if(sum === sumofintrest){
        counter += 1
    }
}
const propability = 100*counter/accuracy

document.querySelector("#target").innerHTML = `probability to get sum ${sumofintrest} with ${nubmerofdie} die is ${propability}%`

