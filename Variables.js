"use strict"; //treat all JS code as newer version
// const accountId = 195834; //this is not changeable
// let accountEmail = "xyz@google.com"; //this can be changed
// var accountPassword = "12345";
// let accountCity = "Jaipur";
// console.table([accountId,accountEmail,accountCity,accountPassword]);

//alert(3+3) //this works like this is in browser but not in nodejs
//null->standalone value(type is object)(by default value will be 0)
//undefined->by default value of every variable(type is undefined)(value will show NaN)
//symbol->unique

let score = "33"; //this is string
let valueInNumber = Number(score); //explicitly converted to Number
console.log(typeof(valueInNumber));
console.log(valueInNumber);
//NaN is also a type.
/*
var->shouldn't be used it is deprecated
*/