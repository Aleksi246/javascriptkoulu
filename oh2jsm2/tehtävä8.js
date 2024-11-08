const myarray =["muggy","damp","moist","stinky","wet"];

function concat(array) {
    let sana = "";

    for (const element of array) {
        sana += element;
    }
    return sana;
}
document.querySelector("#tar").innerHTML = concat(myarray);