// const sum =function(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

// what are the challenges we may have in the code 
// what if we pass only one argument and b is undefined or may be we can pass string that time we will pass the default value
// what if someone pass the four values beside of two values that time we will use es6 rest operator
// const sum =function(a,b=0,...rest){ 
//     return a+b;
// }

// const obj1={
//     a:1,
//     b:2,
//     c:3,
// }
//const obj2 = obj1;
// const obj2 = {...obj1}; // this is shallow copy
//  obj2.a=10;
//     console.log(obj1.a); // { a: 10, b: 2, c: 3 }
//     console.log(obj2.a); // { a: 1, b: 2, c: 3 }
    
// // this is shallow copy
// // shallow copy means it will copy the reference of the object not the value of the object   

// write the shallow copy fucntion limitation with deep clone where it got failed 
const obj1={
    a:1,     
    b:2,
    c:3,
    d:{
        e:4,
        f:5,
        g:6,
    }
}
const obj2 = {...obj1}; // this is shallow copy
obj2.d.e=10;
    console.log(obj1.d.e); // { a: 1, b: 2, c: 3 }

    console.log(obj2.d.e); // { a: 1, b: 2, c: 3 }
//     // this is shallow copy
//     // shallow copy means it will copy the reference of the object not the value of the object
//     // deep copy means it will copy the value of the object not the reference of the object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const obj3 ={
//     a:1,
//     b:2,
//     c:3,
// }

// const {b,c, ...rest} = obj3; // this is destructuring
// console.log(b,crest); // 2

// what is the difference between spread and rest operator
// spread operator is used to copy the object or array
// rest operator is used to get the remaining values of the object or array
// const obj4 = {
//     a:1,
//     b:2,
//     c:3, 
//     d:4,
//     e:5,
//     f:6,
//     g:7,
//     h:8,
//     i:9,
//     j:10,

// }
// const {a,b,...rest} = obj4; // this is destructuring
// console.log(a,b,rest); // 1 2 { c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }
// // this is destructuring
// // destructuring is used to get the values of the object or array
//Definition: Gathers multiple values into a single variable (usually used in function parameters).

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6

//Definition: Spreads elements of an array or object into individual items.

const nums = [1, 2, 3];
const more = [...nums, 4, 5];
console.log(more); // [1, 2, 3, 4, 5]

// | Operator    | Purpose        | Used In                         |
// | ----------- | -------------- | ------------------------------- |
// | `...rest`   | Collects items | Function parameters             |
// | `...spread` | Spreads items  | Arrays, objects, function calls |


