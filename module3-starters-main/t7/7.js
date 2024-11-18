
const trigger = document.querySelector("#trigger");


function hovera(event) {
document.querySelector("#target").outerHTML = `<img id="target" src="img/picB.jpg" alt="example">`
}
function hoverb(event){
    document.querySelector("#target").outerHTML = `<img id="target" src="img/picA.jpg" alt="example">`
}

trigger.addEventListener('mouseover', hovera)

trigger.addEventListener("mouseout" ,hoverb)