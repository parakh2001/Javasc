// avoid these types of comparison
// console.log("2">1);
// console.log("02">1);
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(undefined<0);
// console.log(undefined>0);
// console.log(undefined==0);


//Primitive(pass by value(copy is created))(created on stack)
//String,Number,Boolean,null,undefined,Symbol(to make any value unique),BigInt
// const id = Symbol('123');
// const anotherId= Symbol('123');
// console.log(id===anotherId);
// const bigNumber = 3493732423423423;
// console.log(bigNumber);

//Reference(Non primitive(pass by reference))(Created on heap)
//Array,Objects,Functions

const heroes = ["ironman","captain america","wanda","hulk","thor"];
let myObj = {
    name:"parakh",
    age:22,
};

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof(myFunction)); //this will be called function object
console.log(typeof(heroes));