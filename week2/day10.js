const fs = require('fs');

/**
 * Topics covered in this file:
 * - Callbacks
 * - Event Loop
 * - Call Stack
 * - Callback Queue
 * - Microtask Queue
 * - Macrotask Queue
 * - Web APIs
 * - Synchronous vs Asynchronous
 * - setTimeout
 * - setInterval
 * - fs module
 * - Node.js Event Loop
 * - Serial Execution
 * - Parallel Execution
 *
 * Definitions, examples, and key points:
 */

// 1. Callbacks
// Definition: A callback is a function passed as an argument to another function, to be executed later.
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Priyank", function() {
    console.log("Callback executed!");
});
// Key Point: Callbacks are used for asynchronous operations, but can lead to "callback hell" if nested deeply.

// 2. Event Loop
// Definition: The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks.
console.log("Start");

setTimeout(() => console.log("Inside setTimeout"), 0);
console.log("End");
// Key Point: The event loop checks the call stack and callback queue, executing tasks accordingly.

// 3. Call Stack
// Definition: The call stack is a data structure that keeps track of function calls in JavaScript.
function first() { second(); }
function second() { console.log("Second function"); }
first();
// Key Point: If the stack grows too large (infinite recursion), it causes a "stack overflow".

// 4. Callback Queue
// Definition: The callback queue holds messages (callbacks) to be processed after the call stack is empty.
setTimeout(() => console.log("From callback queue"), 0);
// Key Point: Tasks in the callback queue are processed after the current call stack is empty.

// 5. Microtask Queue
// Definition: The microtask queue holds promises and other microtasks to be executed after the current task.
Promise.resolve().then(() => console.log("From microtask queue"));
// Key Point: Microtasks are executed before macrotasks (like setTimeout).

// 6. Macrotask Queue
// Definition: The macrotask queue holds tasks like setTimeout, setInterval, and I/O.
setTimeout(() => console.log("From macrotask queue"), 0);
// Key Point: Macrotasks are executed after microtasks.

// 7. Web APIs
// Definition: Web APIs are browser-provided features (like DOM, setTimeout, fetch) accessible from JavaScript.
setTimeout(() => console.log("Web API example"), 1000);
// Key Point: Web APIs run outside the JS engine and notify JS when tasks are done.

// 8. Synchronous vs Asynchronous
// Synchronous: Code runs line by line, blocking further execution.
console.log("Synchronous 1");
console.log("Synchronous 2");
// Asynchronous: Code runs without blocking, using callbacks/promises.
setTimeout(() => console.log("Asynchronous"), 0);
// Key Point: Asynchronous code improves performance for I/O operations.

// 9. setTimeout
// Definition: setTimeout schedules a function to run after a delay.
setTimeout(() => console.log("Executed after 1 second"), 1000);
// Key Point: Actual delay may be longer due to event loop and other tasks.

// 10. setInterval
// Definition: setInterval repeatedly calls a function at specified intervals.
let count = 0;
const intervalId = setInterval(() => {
    console.log("Interval: " + ++count);
    if (count === 3) clearInterval(intervalId);
}, 500);
// Key Point: Use clearInterval to stop the interval.

// 11. fs module (Node.js)
// Definition: The fs module allows file system operations in Node.js.
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log("File content:", data);
});
// Key Point: File operations are asynchronous by default in Node.js.

// 12. Node.js Event Loop
// Definition: Node.js uses an event loop to handle asynchronous operations.
console.log("Node.js event loop demo");
setTimeout(() => console.log("Timer finished"), 0);
// Key Point: Node.js event loop is similar to browser's, but with additional phases (timers, I/O, etc).

// 13. Serial Execution
// Definition: Tasks are executed one after another, waiting for each to finish.
function task1(cb) { setTimeout(() => { console.log("Task 1"); cb(); }, 500); }
function task2() { console.log("Task 2"); }
task1(task2);
// Key Point: Serial execution is simple but can be slow for independent tasks.

// 14. Parallel Execution
// Definition: Multiple tasks are started together and may finish in any order.
setTimeout(() => console.log("Parallel Task 1"), 300);
setTimeout(() => console.log("Parallel Task 2"), 200);
// Key Point: Parallel execution improves performance for independent tasks.

 

