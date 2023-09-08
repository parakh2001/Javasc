"use strict";

//"..." is spread operator and rest operator also
// function sayMyName(val1,val2,...name){
//     return name;
// }
// console.log(sayMyName("luffy","zoro","sanji","nami","robin"));
const user = {
    username:"parakh",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username:"sam",
    price:null
})
const myNewArray = [200,400,100,600];
function returnSecondValue(getArray){
    return getArray[0];
}
console.log(returnSecondValue(myNewArray));