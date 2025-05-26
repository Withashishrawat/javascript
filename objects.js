// let obj = { //create object  using object leteral -> 1st  way 
//     "full Name": "ashish rawat",//left side key and right side value
//     sallary: 100,
//     age: 22,
//     "isHandsome": true,
// };
// obj.ht=170;//object are dynamically nature type in js 
// console.log(obj);


// const car = new Object(); //2nd way to create object in js using new keyword(instance of object)
// car.color = "white";
// car.model = 34432;
// car.name = "BMW";

// console.log(car.color);// we can access object properties in 2 ways. 1st  like this.
// console.log(car["name"]);// and 2nd like this.

// obj.sallary = 2000;//modifying object property...
// delete obj.sallary;//delete object property 
// console.log("after delete salary property : ", obj);


// console.log("Checking if a property exist: ", "color" in obj);//1st way check property existing
// console.log(obj.hasOwnProperty("model"));//2nd way to check property existing

// //  Object method
// const myCar = {
//     name: "BMW",
//     color: "Black",
//     model: 3434,
//     fullDetails: function () {
//         return this.name + "," + this.model;//this is an object method
//     }
// };

// console.log(myCar.fullDetails()); //method call 

// /*for in loop to iterate  */
// for(let key in obj ){
// console.log(key+":"+obj[key]);
// }


/*object cloning*/
// let src={
//     age:54,wt:79,ht:186
// };

// let clone={
//     ...src   //this is cloned
// };

// clone.age=66;
// console.log(src,clone);
// let dest=Object.assign({},src);//object clone using Object.asign method
// console.log(dest);

// let dest={};//clone using iteration , not recomended for use.
// for(let key in src){
//     let newKey = key;
//     let newValue= src[key];
//     //insert newKey and value in dest and create  a clone 
//     dest[newKey]=newValue;
// }
// src.wt=45;//
// console.log("src", src);
// console.log("dest",dest);


/*destructuring objects */

// //creating object
// let person ={ 
//     name: "me", lastName:"last",age:50
// };

// let person={
//     firstName:"ashish",
//     lastName:"rawat"
// };
// let{firstName,lastName}=person;
// console.log(firstName);

/*destructuring nested objects*/
// let employee={
//     name:{
//         firstName:"call",
//         lastName:"me"
//     }
// };
// let{ name:{firstName,lastName},name}=employee;
// console.log(firstName , " , ", name);