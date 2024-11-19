const formi = document.querySelector("#source");
const enimi = document.querySelector("input[name=firstname]")
const snimi = document.querySelector("input[name=lastname]")


formi.addEventListener("submit",(event) => {
    event.preventDefault()
    document.querySelector("#target").innerHTML = `Your name is ${enimi.value} ${snimi.value}`

})