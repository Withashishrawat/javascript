//array is collection of items or elements

// const fruits = ["apple", "banana", "cherry"]; //destructuring array
// const [fruit1, fruit2, fruit3] = fruits;
// console.log(fruit1); // "apple"
// console.log(fruit2); // "banana"
// console.log(fruit3); // "cherry"

// let a = [2, 3, 5, 43, 5];
// // let b=[12,...a,45,65];//the spread operator (...) 
// // console.log(b);
// for (let i = 0; i < a.length; ++i){
//     console.log(a[i]);
// }
// let marks=[34,35,36,37,25,43,100];
let names = ["ashish","mahesh","ramesh","suresh"];

// marks.push(23);//push method add elements in last of index of array
// console.log("marks after using push method ",marks);
// marks.pop();//push method remove elements from last index of array
// console.log("marks after using pop method",marks);
// marks.shift();//shift method remove the elements from first index of array
// console.log("marks after using shift method ",marks);
// marks.unshift(3);//unshift method add element in first index of array
// console.log("marks after using unshift method ",marks);
// console.log("using slice method",marks.slice(0,4));//slice method not affected to original array
//marks.splice(0,3,"kunal");// delete the element from index of 0 to index of 3 and add the kunal in their space.
// console.log(marks, "length of array: ",marks.length);
// marks.splice(1,0,"kunal")//if no need to delete any element in array.
// console.log(marks);// not delete element but add kunal in index 1.
// console.log(marks.sort());//array shorted
// console.log("index of 8 :",marks.indexOf(6));//showing the index of elements 
// let ans=marks.map((number)=>{//map function work with function
//     return number*number;
// })
// console.log(ans);
// for(let  element of marks){//use for  array
//     console.log(element);
// }
// console.log("\n");//for next line

// for(let index in marks){//for...in loop use for object
//     console.log(index,marks[index]);
// }
// names.forEach((value,index,array )=>{
// console.log(index, value , array );
// }
// )

let coding=[
 
    {student:"ashish",rollNo:39393},
    {student:"thugesh",rollNo:434323}
]

//for each loop on objects in array 
coding.forEach( (e)=>{
    console.log(e.student);
})