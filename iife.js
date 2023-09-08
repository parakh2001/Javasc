//Immediately invoked function expressions->used to avoid pollution of global variables
//and when we want function to execute immediately
(function chai(){
    console.log(`DB Connected`);
})(); //semicolon is important here coz it doesn't know when to stop 

//Unnamed iife
( (name)=>{
    console.log(`Db Connected-2......Welcome ${name}!!`);
})("parakh");