// const user = {
//     username:"luffy",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }

// }
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// console.log(this)
// function chai(){
//     let username = "Parakh";
//     //this doesn't use in this type of function
//     console.log(this.username);
// }
// chai();

// const chai  = ()=>{
//     let username = "Parakh";
//     console.log(this.username);
// }
// chai();

// const addTwo =(num1,num2)=>{
//     return num1 + num2;
// }
// console.log(addTwo(3,4))
// //implicit type of function no need to write return keyword
// const addOne = (num)=> num++;
// console.log(addOne(5));

const addTwo = (num1,num2)=>({username:"parakh"})
console.log(addTwo(3,4));
// const myArray = [2,3,5,7,9];
// myArray.forEach