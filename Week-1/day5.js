/////////++++++++++++++++++++++++++++++++++++
// how to implment class in javascript
/////////++++++++++++++++++++++++++++++++++++

// function Person()
// {
//     this.name = "priyank";
//     this.age = 25;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };
// }


// Person.prototype.introduce = function() {
//     console.log(`I am ${this.name} from the class Person.`);
// }
// const person1 = new Person("John", 30);
// const person2 = new Person("Jane", 25);

// person1.greet(); // Hello, my name is John and I am 30 years old

//=================================
// without using constructor

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // this greet method is part of the class Person and work as chainable method with the instance of the class
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }

//     introduce() {
//         console.log(`I am ${this.name} from the class Person.`);
//     }
// }

//////++++++++++++++++++++++++++ Problem solving session ++++++++++++++++++++++++++
// write the method for finding area , perimeter and volume of the rectangle
//implement these methods in the class Rectangle
//1 constructor
//2 area
//3 perimeter
//4 volume

class Rectangle {
    constructor(length,width) {
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
    perimeter() {
        return 2 * (this.length + this.width);
    }
    volume() {
        return this.length * this.width * this.height; // assuming height is defined
    }
}

console.log(new Rectangle(5, 10).area()); // 50

console.log(new Rectangle(5, 10).perimeter()); // 30


//++++++++++++++++++++++++ setter and getter ++++++++++++++++++++++++++

class className {
    constructor(name) {
        this._name = name; // using underscore to indicate private property 
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._name = newName;
    }

    set age(age) {
        if(age < 0) {
            throw new Error("Age cannot be negative"); // these type of validation can be done in setter
        }

        this._age = age;
    }
}
const obj = new className("priyank");
console.log(obj.name); // priyank
obj.name = "mayank"; // using setter
console.log(obj.name); // mayank
//++++++++++++++++++++++++++++++++++++++++++++
// Problem solving session

// create the student class which store these properties
// 1. firstName and lastName
// 2. age
//provide a way to get the full name of the student and set full name of the student

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Getter for full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter for full name
    set fullName(name) {
        const [first, last] = name.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
}
const student = new Student("John", "Doe", 20);
console.log(student.fullName); // John Doe
student.fullName = "Jane Smith"; // using setter
console.log(student.firstName); // Jane
console.log(student.lastName); // Smith

//++++++++++++++++++++++++++++++++++++++++++++
// Inheritance in JavaScript
// Create a base class Animal with properties name and age
// and a method speak. Then create a subclass Dog that inherits from Animal and overrides the speak method.
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // calling the constructor of the parent class
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog("Buddy", 3, "Golden Retriever");
dog.speak(); // Buddy barks.
console.log(dog.breed); // Golden Retriever
//++++++++++++++++++++++++++++++++++++++++++++

// Example of a constructor function in JavaScript
// Constructor function to create a Person object
// This is a constructor function that creates a Person object

function Person(name, age) {

// we  are checking here if the person is not instance of Person class then we will make it as person object 

  if(!(this instanceof(Person)))
      return new Person(name, age);
  this.name = name;
  this.age = age;
}

// Create a new Person object correctly
const john = new Person("John", 30);
console.log(john.name, john.age); // Output: 'John', 30

// Bug: Calling without `new` does not create a new Person object
const jane = Person("Jane", 25);
console.log(jane.name, jane.age); // Output: Error or `undefined`, `undefined`

// To fix the bug, we can check if `this` is an instance of Person
// and if not, create a new instance    
// This is already handled in the constructor function above
// Now, calling Person without `new` will still create a new instance
const janeFixed = Person("Jane", 25);
console.log(janeFixed.name, janeFixed.age); // Output: 'Jane', 25
//++++++++++++++++++++++++++++++++++++++++++++
// In JavaScript, accessing deeply nested properties in a large object can sometimes be tricky. If some of the intermediate properties are not present, you could easily end up with an error that breaks your code.

// Consider the following objects:

// const carol = {
//   details: {
//     personal: { firstName: "Carol", lastName: "Smith" },
//     age: 25,
//     city: "New York",
//   },
// };

// const dave = {
//   details: {
//     age: 30,
//     city: "San Francisco",
//   },
// };

// function getFirstName(user) {
//   return user.details.personal.firstName;
// }
// When calling getFirstName(carol), it works as expected. However, calling getFirstName(dave) will result in an error because the personal property doesn't exist in dave.details.

// Problem Statement

// Write a function named get that takes an object and a path to a property, and safely returns the value at that path. If the resolved value is undefined, the function should return an optional defaultValue. This function will help avoid errors when accessing deeply nested properties.

// get(object, path, [defaultValue]);
// object: The object to query.

// path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.

// defaultValue: Optional parameter. The value returned if the resolved value is undefined.

// get(carol, "details.personal.firstName"); // 'Carol'
// get(carol, "details.city"); // 'New York'
// get(dave, "details.personal.firstName"); // undefined
// get({ a: [{ b: { c: 42 } }] }, "a.0.b.c"); // 42

function get(objectParam, pathParam, defaultValue) {
  // TODO: Convert path to an array if it's a string

  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.').filter(Boolean); // help me here to understand the logic 
    // This line converts the path to an array if it's a string, splitting by '.' and filtering out any empty strings.
    // If path is a string, split it by '.' and filter out any empty strings
    // If path is already an array, it remains unchanged.
    // This allows the function to handle both string and array inputs for the path parameter.
    // This is done to ensure that the path can be traversed step-by-step through the object.
    
  // TODO: Initialize index, length, and reference to the object
  let result = objectParam;

  for(let i =0;i<path.length;i++)
  {
      if(result=== undefined || result === null)
      {
          return defaultValue;

      }
      result = result[path[i]];

  }
  // TODO: Traverse the object step-by-step

  return result === undefined ? defaultValue : result;
  // TODO: Determine the final value and return
}