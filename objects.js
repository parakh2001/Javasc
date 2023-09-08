//objects can be created using two types
//singleton->constructor make singleton objects always
const mySym = Symbol("key1");
//object Literals
const JsUser = {
    name:"tanjiro",  //name is also string by default
    age: 18,
    "full name":"Tanjiro Sun hashira",
    location :"japan",
    email:"demonslayer@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"],
    [mySym] : "mykey1"
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof(JsUser[mySym]));

// JsUser.email = "nezuko@blooddemonart.com";
// Object.freeze(JsUser);
// JsUser.email = "lightninghashira@runfast.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello Js user,${this.name}`);
}
console.log(JsUser.greeting); //it will return reference of function
console.log(JsUser.greeting());