/**while loop */
/*num=0;
while(num<=10){
    console.log(num);
    ++num;
}*/

/**for loop */

// let num=10;
// for(let i=0; i<=num; i++){
// console.log(i);
// }

/*do while loop */
// let x=0;
// do{
//     console.log("Ashish rawat");
//     x++;
// }
// while(x<12);

//for...in loop
//for in loop iterate only keys not a values. this loop primarily use for objects but works array and other iterable objects.

// for objects
let obj={
    a:1,b:2,c:3
}
for(let key in obj){
console.log(key,":",obj[key]);
}

//for array
//not recomanded for array
let array=[10,20,30,40];
for (let index in array){
    console.log("index of array",index,":",array[index]);
}

//for...of loop
//for...of loop use for iterate values not a keys.
// Array
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);  // Prints values: 10, 20, 30
}

// String
let str = "hello";
for (let char of str) {
  console.log(char);  // Prints characters: h, e, l, l, o
}
