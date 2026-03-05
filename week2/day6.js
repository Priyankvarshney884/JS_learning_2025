// /**
//  * Closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function's variables
//  * and scope, even after the outer function has finished executing.
//  * This allows the inner function to "remember" and use the environment in which it was created, enabling powerful
//  *  patterns such as data encapsulation, memoization, and function factories.
//  */
// ////////////////////////// class 6 
// //      closures 
// //      Memoization

// function b()
// {
//     console.log(a);
// }

// function a(){
//     var a =1;
//     b();   
//     console.log(a);
// }

// a();

// // here how scope is working with function 
// // a is not defined in the function b, so it will throw an error
// // but if we define a in the global scope then it will work
// // function a(){
// //     var a = 1;
// //     b();
// //     console.log(a);
// // }

// function counter()
// {
//     var count =0;
//     return function()
//     {
//         count++;
//         return count
//     }

    
// }

// const increment = counter();
// increment();
// increment();
// increment();

// console.log(increment());

// increment;

// // what is clousre 
// // it is technique which preserve the scope of parent in inner scope 
// // write the defination of closure 

// function createCounter(val , delta)
// {
    
//     return function() 
//     {
//         return val = val+delta;
//     }
// }

// const deltacount = createCounter(0,5);

// deltacount();
// // deltacount(0,2);
// // deltacount(0,2);

// console.log(deltacount());


// //////////////////

// // nested closure function 
// function outerFunction() {
//     let outerVariable = 'I am from outer function';

//     function innerFunction() {
//         let innerVariable = 'I am from inner function';
//         console.log(outerVariable); // Accessing outer function variable
//         console.log(innerVariable); // Accessing inner function variable
//     }

//     return innerFunction; // Returning the inner function
// }

// const innerFunc = outerFunction(); // Calling outer function to get inner function
// innerFunc(); // Calling the inner function to see the output
// // Output:
// // I am from outer function
// // I am from inner function
// // In this example, `innerFunction` is a closure that has access to the `outerVariable` defined in `outerFunction`,

// function x(a)
// {
//     return function y(b)
//     {
//         return function z(c)
//         {
//             return a + b + c;
//         }
//     }
// }

// const y1 = x(10); // y1 is a function that takes b
// const z1 = y1(20); // z1 is a function that takes c
// const result = z1(30); // result is the final value
// console.log(result); // Output: 60

// const res  = x(10)(20)(30); // This is a more concise way to call the nested functions
// console.log(res); // Output: 60


// /// problem solving session

// function outer(){
//     let arrFn = [];
//     for(let i=0;i<3;i++)
//     {
//         arrFn.push(function fn(){
//             console.log(i);
            
//         })
//     }
//     return arrFn;
// }

// let arrfn = outer();
// arrfn[0](); // Output: 0
// arrfn[1](); // Output: 1
// arrfn[2](); // Output: 2

// // This happens because the loop completes before the functions are called, and by that time, `i` is 3.
// // To fix this, we can use `let` instead of `var` in the loop declaration, which creates a new scope for each iteration.

// function outer1(){
//     let arrFn = [];
//     for(var i=0;i<3;i++)
//     {
//         arrFn.push(function fn(){
//             console.log(i);
            
//         })
//     }
//     return arrFn;
// }

// let arrfn2 = outer1();
// arrfn2[0](); // Output: 3
// arrfn2[1](); // Output: 3
// arrfn2[2](); // Output: 3


// // problem solving session 2
// // write the function which will take number of argument and it will return the last argument count value from the function 
// // counter()()()()()(0) output 5

// // this is the code for infinite currying function that counts the number of times it has been called until it receives an argument of 0.
// function counter(arg)
// {
//     let count=0;
//     if(arg==0)
//     {
//         return count;
//     }
//     return function inner(arg){
//         count++;
//         if(arg === 0) {
//             return count;
//         }
//         return inner;
//     }
// }

// const val =counter()()()()()(0); // Output: 5
// console.log(val); // 5


// // write the function which will calculate two values and check those two valuse are already available in cache or not if available in cache then print from cache and otherwise print calculating 
// // 
let cache = {};
function memoize(fn) {
    
    return function(a,b)
    {
        const key =`${a},${b}`;
        if(cache[key])
        {
            return `From cache: ${cache[key]}`;
        }
        let newValue = fn(a,b);
        cache[key] = newValue;
        return newValue;
    }
    
}

function add(a, b) {
    console.log("Calculating...");
    return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3)); // Calculating... 5
console.log(memoizedAdd(2, 3)); // From cache: 5

console.log(memoizedAdd(3, 4)); // Calculating... 7
console.log(memoizedAdd(3, 4)); // From cache: 7
console.log(memoizedAdd(2, 3)); // From cache: 5

// code for flatten object in js 
function flattenObject(ob) {
    let result = {};
    
    for (const key in ob) {
        if (typeof ob[key] === 'object' && ob[key] !== null && !Array.isArray(ob[key])) {
            // Recursively flatten nested objects
            const flattened = flattenObject(ob[key]);
            for (const nestedKey in flattened) {
                result[`${key}.${nestedKey}`] = flattened[nestedKey];
            }
        } else {
            // Add non-object properties directly
            result[key] = ob[key];
        }
    }
    
    return result;
}
// Example usage:
const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};
const flattened = flattenObject(nestedObject);
console.log(flattened);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// problem solving session 3
 function f(y, x) {
            // Write your solution here ========================
            if(arguments.length==1)
            {
                return function(prod2)
                {
                    return y*prod2;
                }
            }
            else
            {
                return y*x;
            }
        }
// Example usage:
console.log(f(2, 3)); // Output: 6
console.log(f(2)(3)); // Output: 6
// Example usage with one argument


function A() {
  let a = 2;
  console.log(a);

  function C() {
    console.log(a);

    function D() {
      console.log(a);

      a = 2;
    }
    D();
    a = 3;
  }
  C();
}

a = 3;

A();

let a;

console.log(a);

function B() {
  let a;
  console.log(a);

  function E() {
    a = 6;
    console.log(a);

  }

  a = 2;
  E();
  console.log(a);
}

a = 3;

B();