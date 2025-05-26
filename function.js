/*
//function definition
function addNumbers(a,b){//define parameters
    console.log(`The sum of ${a} and ${b} =`,a+b);
}
//function call
addNumbers(4,4);

// //printing numbers
// function printingNumbers() {
//     for (let i = 0; i <= 100; i++) {
//         console.log(i);
//     }
// }
// printingNumbers();

//return functions--------------
function getSum(a,b,c){
    let sum= a+b+c;
    return sum;
}
let ans= getSum(2,3,5);//in return function  use variable to store value.
console.log("Printing sum : ", ans);
*/

// function getMyName(firstName,lastName){
//     let fullName=firstName+" "+ lastName;
//     return fullName;
//  //when you write code after return, the code called unreachable statement
// }
// let myName=getMyName("ashish","rawat");
// console.log("Full Name :",myName);

//------------expression function------------
// let getMult=function(x,y){
//     return x*y;
// }
// let ans= getMult(12,5);
// console.log(ans);

// arrow function 
// let mult=(x,y)=>{return x*y};
// let ans=mult(3,5);
// console.log(ans);

//--------recursive function--------
// function getRecursive(nr){
//     console.log(nr)
//     if(nr>0){
//         getRecursive(--nr)
//     }
// }
// getRecursive(10);

//--------function who has no name called anonymous function 
// let anonymousfunction=function (){
//     console.log("I am anonymous function");
// };
// anonymousfunction();

//++++++++++++++++++++++++++++++++
//immediately invoked function expressions(IIFE)--

//named IIMFE
// (function IIFE(){
//     console.log("db conected ");
// }) ();

// //arrow function in IIFE----unnamed iife
// ( (name)=>{
//     console.log(`db conected two ${name}`);
// })("me");