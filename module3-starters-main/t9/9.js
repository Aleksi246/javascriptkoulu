const button = document.querySelector("#start");

function calculate(event){
let result;
let splitti;
const stringi = document.querySelector("#calculation").value;
    console.log(stringi);
    console.log(typeof(stringi));

    if(stringi.includes("+")){
        splitti = stringi.split("+");
        result = Number(splitti[0])+Number(splitti[1]);

    }


    else if(stringi.includes("-")){
        splitti = stringi.split("-");
        result = Number(splitti[0])-Number(splitti[1]);

    }
    else if(stringi.includes("*")){
        splitti = stringi.split("*");
        result = Number(splitti[0])*Number(splitti[1]);
    }
    else if(stringi.includes("/")) {
        splitti = stringi.split("/");
        result = Number(splitti[0])/Number(splitti[1]);

    }



document.querySelector("#result").innerHTML = `${result}`

}



button.addEventListener("click",calculate)