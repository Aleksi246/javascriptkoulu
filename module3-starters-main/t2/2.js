let idtarget = document.querySelector("#target").appendChild(document.createElement("li"))
idtarget.appendChild(document.createTextNode("First item"))
idtarget = document.querySelector("#target").appendChild(document.createElement("li"))
idtarget.appendChild(document.createTextNode("Second item"))
idtarget = document.querySelector("#target").appendChild(document.createElement("li"))
idtarget.appendChild(document.createTextNode("Third item"))



const kakkonen = document.querySelector("#target li:nth-child(2)")
kakkonen.classList.add("myitem")

/*
idtarget[0].innerHTML = <li>First item</li>
idtarget[1].innerHTML = <li>Second item</li>
idtarget[2].innerHTML = <li>Third item</li>

 */