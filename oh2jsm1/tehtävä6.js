
tedaanko = confirm("Should i calculate the square root?")

if (tedaanko == true){

  const number1 = Number(prompt("number: "))
  if(number1 < 0){
    document.querySelector("#target").innerHTML = "the square root of a negative number is not defined."
  }
  else{
    const root = Math.sqrt(number1)
    document.querySelector("#target").innerHTML = root
  }
}
else{
  document.querySelector("#target").innerHTML = "the square root is not calculated."
}