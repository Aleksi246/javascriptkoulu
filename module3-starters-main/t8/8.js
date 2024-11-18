const button = document.querySelector("#start");

function calculate(event){
    const opera = document.querySelector("#operation").value
    console.log(opera)
    let result;
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    if(opera === "add"){
        result = num1+num2;
    }
    else if(opera === "div"){
        result = num1/num2;
    }
    else if(opera === "sub"){
        result = num1-num2;
    }
    else if(opera === "multi"){
        result = num1*num2;
    }
    document.querySelector("#result").innerHTML = `${result}`
}




button.addEventListener("click",calculate)