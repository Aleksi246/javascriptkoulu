'use strict';
const names = ['John', 'Paul', 'Jones'];

//const html = `<li>${names[0]}</li><li>${names[1]}</li><li>${names[2]}</li>`

let html =""

for (let i = 0;i < names.length;i++){
    html = html + `<li>${names[i]}</li>`
}

const idtarg = document.querySelector("#target")

idtarg.innerHTML = html