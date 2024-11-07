const vuosi = Number(prompt("vuosi:" ));
let arvo = false;
if(vuosi%4 === 0){

  if(vuosi%100 === 0){
    if(vuosi%400 ===0){
      arvo = true
    }
  }
  else {
    arvo = true
  }
}

if (arvo==true){
  document.querySelector("#target").innerHTML = "vuosi on karkausvuosi"
}

if (arvo==false){
  document.querySelector("#target").innerHTML = "vuosi ei ole karkausvuosi"
}