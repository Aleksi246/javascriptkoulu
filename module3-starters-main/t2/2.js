


function crli(name){
  const idtarget = document.querySelector("#target")
  const li = document.createElement("li")
  li.innerHTML = name
  idtarget.appendChild(li)
}

crli("First item")
crli("Second item")
crli("third item")

document.querySelector("#target li:nth-child(2)").classList.add("my-item")
//const kakkonen = document.querySelector("#target li:nth-child(1)")
//kakkonen.classList.add("myitem")

/*
idtarget[0].innerHTML = <li>First item</li>
idtarget[1].innerHTML = <li>Second item</li>
idtarget[2].innerHTML = <li>Third item</li>

 */