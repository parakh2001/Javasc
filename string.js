//Learning about strings in javascript
//This is the modern way to work with strings in js
// const name = "Parakh";
// const repoCount = 50;

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
const gameName = new String('Parakh');
//this string will be stored as object(key-value pair) and not as array
// console.log(typeof(gameName));
//proto->is also a method
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase()); //original string does't get changed
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a')); //it will return first occur of character
// console.log(gameName.slice(0,-4)); //we can input negative values also(unlike substring)
const newStringOne = "  sudoku   ";
console.log(newStringOne);
console.log(newStringOne.trim()); //works only on whitespace or line terminator