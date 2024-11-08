const myarray = [1,2,3,4,5,6,7,8,9,11,12,60,3512,57,-1,0,-2];

function even(array){
    let uusiarray = [];

    for(const element of array){
        if(element%2 === 0){
            uusiarray.push(element);
        }
    }
    return uusiarray;
}
console.log(even(myarray));
console.log(myarray);