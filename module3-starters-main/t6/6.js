const button = document.querySelector("button");

function popup(evt){
    alert("button clicked");
    return 0;
}

button.onclick = popup