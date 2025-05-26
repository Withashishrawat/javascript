/*default parameter*/
// function sayName(myName="maike"){/*we set  object ,array also functionl in default parameter*/
//     console.log(myName);
// }
// sayName();//if we send undefined in function parameter then we recieve the default value . And in case of null , we recieve null.

/*if you forget to give parameter then default value apply */


// class Human{
// //property
// age=12;//public
// ht =180;
// wt=50;
// #fullName="ashishrawat"; /*this is private#, private ko ham class ke bahar se access nahi kar sakte. par getter and setter se access kar sakte hai.*/


// //behaviour
// constructor(newAge,newHieght,newFullName){//yadi ham kisi property ko value na de toh ham 
//     this.age=newAge;
//     this.ht=newHieght;
//     this.#fullName=newFullName;
//  /*ham kisi private member ko bhi rakh sakte hai*/
// }

// walking(){
//     console.log(" i am walking",this.#fullName); 
// }

// running(){
//     console.log("I am running");
// }

// get getName(){/*private properties ko ham class ke bahar access nahi kar sakte but get and set ki madad se ham access kar sakte hai */
//     return this.#fullName;
// }

// set modifyfullName(value){
// this.#fullName=value;
// }
// }
// let obj = new Human(30,180,"rawat");/*if we create constructor then give the*/
// console.log(obj.age,obj.ht,obj.getName);

// obj.walking();
