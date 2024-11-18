'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let idtarget ;

for(let i = 0;i< students.length;i++){

  let child = document.createElement("option")
  child.value = `${students[i].id}`
  idtarget = document.querySelector("#target").appendChild(child)

  idtarget.appendChild(document.createTextNode(`${students[i].name}`))

}



