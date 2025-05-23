// day 1 learning basic debug code operations 

let a = 10;
console.log(a);

let cap ={
    name: "Captain America",
    age: 100,
    sayHi: function(){
        console.log(this); // here this is window object which will consider the cap object only 
        console.log(this.name);
        
    }
}
console.log(cap.sayHi());


// here it is undefine due to we make this function as window object and making as function by adding () at the end
// so we need to bind this function to the object
let sayHiFn= cap.sayHi; // it is just  function reference only 
console.log(sayHiFn());

//output is undefined


//   how to learn this concept 

//   bewafa bf = function 
//   gf = object
//   crush = window object 

let cap2 = {
    name:"mayank"
}

cap2.sayHi= cap.sayHi; // it will call roaming bf function not the cap function object 
cap2.sayHi(); 


let cap3={
    firstName : "krishna",
    sayHi: function(){
        console.log(this.firstName);
        // const iAmInner=function() {  it will go for window object and this.firstName will be undefined
            const iAmInner=()=> { // it will go for the object cap3 and this.firstName will be krishna
            console.log(this.firstName);
        }
        iAmInner();
    }
}
cap3.sayHi(); 

// this is named function 
// function sum(a,b)
// {
//     total=a+b;
// }

// // this is anonymous function

// const sum = function(a,b){
//     total=a+b;
// }

// // this is arrow function
// const sum = (a,b) => {
//     total=a+b;
// }   

// if we are using arrow fuction it will check for the parent object not the global parent object then it will return the value
// use arrow or normal function dont mix them with in code use single at time in heirarchy level 
// for utility data use arrow function 
// for context use normal function to change the context this is the real time development suggestions 

let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this; // return this to make it chainable
        
    },
    down: function() {
        this.step--;
        return this; // return this to make it chainable
        
    },
    showStep: function() { // shows the current step
        console.log(this.step);
        return this; // return this to make it chainable
       
    }
};

ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 2

ladder.up().up().up().down().showStep(); // 2 it will work once ladder.up() is returning this object otherwise chaining will not work


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++ How Inheritance works in JS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//defination of inheritance
// Inheritance is a mechanism in which one object acquires the properties and behaviors of another object.
// 1. Prototypal Inheritance
// 2. Constructor Inheritance
// 3. Class Inheritance
// 4. Object.create() Inheritance
// 5. Object.assign() Inheritance
// 6. Object.setPrototypeOf() Inheritance
// 7. Object.getPrototypeOf() Inheritance
// 8. Object.keys() Inheritance
// 9. Object.values() Inheritance
// 10. Object.entries() Inheritance
// 11. Object.freeze() Inheritance
// 12. Object.seal() Inheritance
// 13. Object.preventExtensions() Inheritance
// 14. Object.is() Inheritance
// 15. Object.isExtensible() Inheritance
// 16. Object.isFrozen() Inheritance
// 17. Object.isSealed() Inheritance
// 18. Object.isPrototypeOf() Inheritance

//+=================================================================

// let implement the code in efficient manner to learn fast 

// 1. Prototypal Inheritance
// let say we want to add a new array prototype method called "last" that returns the last element of the array.
Array.prototype.last = function() {
    return this[this.length - 1];
}
// Now we can use this method on any array it is available to all the array objects and we can use this method on any array object

// how to call method of other object from one object to another object

let cap5 = {
    name: "mayank",
    age: 100,
    sayHi: function(){
        console.log(this.name);

    }
}

let cap7={
    name:"Manoj",
}

const sayHiFnn = cap5.sayHi; // it is just  function reference only
console.log(sayHiFnn()); // it will return undefined

cap5.sayHi(); // it will return mayank
cap5.sayHi.call(cap7); // it will return Manoj here we are using call method to change the context of the function
cap5.sayHi.apply(cap7); // it will return Manoj here we are using apply method to change the context of the function    

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const person ={
    name:"vikky",
    sayHi:()=>{
        console.log(this.name);
    }
}

person.sayHi(); // it will return undefined here we are using arrow function to change the context of the function
let sayHiFn2 = person.sayHi; // it is just  function reference only
console.log(sayHiFn2()); // it will return undefined
