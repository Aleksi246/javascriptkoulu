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

const idtarget = document.querySelector("#target");

for(let i = 0;i< students.length;i++){

  let child1 = document.createElement("option")
  child1.value = `${students[i].id}`
  child1.innerHTML = `${students[i].name}`
  idtarget.appendChild(child1)



}



