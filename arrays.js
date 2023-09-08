const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["batman","superman","wonderwoman"];
// marvel_heros.push(dc_heros); //push array inside an array(it pushes on existing array) (as it is)
// const newArray = marvel_heros.concat(dc_heros); //concat returns new array
// console.log(newArray);
const indian_heros = ["shaktiman","hatim","hanuman"]

//this is spread operator it makes every value in array spread
// const all_new_heroes = [...marvel_heros, ...dc_heros,...indian_heros]
// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_another_another_array = another_array.flat(Infinity);
// console.log(real_another_another_array);

console.log(Array.isArray("demon slayer")); //checks if its array or not
console.log(Array.from("tanjiro")); //convert into array from(data type)
console.log(Array.from({name:"yorichi"})); //it couldn't convert it and hence returned empty array
let score1 = 100;
let score2 = 200;
let score3 = 400;
console.log(Array.of(score1,score2,score3));