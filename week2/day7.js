const marriageBioData = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["Reading", "Traveling", "Cooking"],
    preferences: {
        partnerAgeRange: "25-35",
        partnerProfession: "job",
        partnerHobbies: ["Reading", "Traveling"]
    },
    contact: {
        email: "priyank@gmai.com ",
        phone: "123-456-7890"
    },
    address: {
        city: "New York",
        state: "NY",
        country: "USA"
    },
    workexprience: [
        {
            company: "Tech Solutions",
            role: "Software Developer",
            duration: "2 years"
        },
        {
            company: "Innovatech",
            role: "Senior Developer",
            duration: "3 years"
        }
    ],
}


let key = object.keys(marriageBioData);
let value = object.values(marriageBioData);
console.log("Keys:", key);
console.log("Values:", value);
// Flatte

// problem solving session
 /*Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstance(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.

Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".
*/



        function checkIfInstanceOf(obj, classFunction) {
            // Write the solution here ==================================
            if(obj ==null || typeof classFunction !== 'function') {
                return false;
            }

            let prototype = Object.getPrototypeOf(obj);
            while (prototype) {
                if (prototype === classFunction.prototype) {
                    return true;
                }
                prototype = Object.getPrototypeOf(prototype);
            }
            return false;

        }

// Example usage:
console.log(checkIfInstanceOf(new Date(), Array)); // false
console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(new Date(), Object)); // true


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Q2. JS Core - Polyfill Create Object
Unsolved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
You are tasked with creating a polyfill for the Object.create method in JavaScript. The Object.create method is a built-in function in JavaScript that allows you to create a new object with a specified prototype object.

Your goal is to create a function called myObjectCreate that emulates the functionality of Object.create. The myObjectCreate function should accept a single argument, proto, which represents the prototype object for the new object to be created.

However, there are a few requirements and constraints for your implementation:

If the proto argument is null, undefined, or not an object, your function should throw an Error. This is to ensure that the proto argument is a valid object to be used as the prototype.

Your implementation should create a new object that inherits from the proto object. This means that any properties or methods defined on the proto object should be accessible by the newly created object.

The newly created object should not have any own properties initially. Any properties or methods accessed on the new object that are not defined directly on the object should be looked up in the prototype chain.

Sample Test Case:
To demonstrate the usage of your myObjectCreate function, consider the following example:

// Step 1: Define a prototype object
const personPrototype = {
  greet: function() {
    console.log("Hello, my name is " + this.name + ".");
  }
};

// Step 2: Call myObjectCreate and pass the prototype object
const person = myObjectCreate(personPrototype);

// Step 3: Assign the returned object to a variable

// Step 4: Use the newly created object
person.name = "John";
person.greet(); // Output: Hello, my name is John.
In this example, we first define a personPrototype object that contains a greet method. We then use the myObjectCreate function to create a new object person based on the personPrototype. After assigning a name property to the person object, we call the greet method on the person object, which logs a greeting message with the assigned name.

Your myObjectCreate function should be able to replicate this behavior, allowing the user to create new objects with a specified prototype and access properties and methods defined on the prototype object. */

 function myObjectCreate(proto) {
            // Write the solution here ==================================

            // here we had checked first aboout the proto
            if(proto == null || proto=== undefined || typeof proto !== 'object')
                    throw new Error("Error");

            // create the temp constructor function    
            function F(){}

            // assigned the proto to function prototype
            F.prototype= proto;

            // return the new function with prototype having new proto 
            return new F();


            
        }
// Example usage:
const personPrototype = {
    greet: function() {
        console.log("Hello, my name is " + this.name + ".");
    }
};
const person = myObjectCreate(personPrototype);
person.name = "John";
person.greet(); // Output: Hello, my name is John.
// console.log(person.__proto__ === personPrototype); // true