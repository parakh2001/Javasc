//Constructor way of declaring objects

const tinderUser = new Object() //this will create a singleton object
const tinderuser = {}; //this will not create singleton object
tinderUser.id = "123abc";
tinderUser.name = "Samyy";
tinderUser.isLoggedIn = true;
// console.log(tinderUser);
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            lastname:"demon slayer"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2);
//spread operator for objects
// const obj3 = {...obj1,...obj2};
// console.log(obj3);

//values comming from database
// const users = {
//     {
//         id:1,
//         Email:"h@gmail.com"
//     }
// }
console.log(typeof(Object.keys(tinderUser)));
console.log(typeof(Object.values(tinderUser)));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));