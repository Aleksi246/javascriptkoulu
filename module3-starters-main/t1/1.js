const html = `<li>First item</li>
<li>Second item</li>
<li>Third item</li>`;

let idtarget = document.querySelector("#target");

idtarget.innerHTML = html;

idtarget.classList.add("my-list")