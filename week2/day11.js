// // /* class 11 
// // Recap of Promise
// // Promise Methods
// // Create own promises
// // Promise Chaining
// // */

// // const delay = function (ms) {
// //     return new Promise((resolve,rejects) => {
// //         if(ms>10000)
// //         {
// //             rejects(`Delay of ${ms} milliseconds is too long!`);
// //         }
// //         setTimeout(() => {
// //             resolve(`Resolved after ${ms} milliseconds`);
// //         }, ms);
// //     });
// // }
// // delay(2000)
// //     .then((message) => {
// //         console.log(message);
// //         return delay(3000);
// //     })
// //     .then((message) => {
// //         console.log(message);
// //         return delay(11000);
// //     })
// //     .then((message) => {
// //         console.log(message);
// //     })
// //     .catch((error) => {
// //         console.error("Error:", error);
// //     })
// //     .finally(() => {
// //         console.log("Promise chain completed.");
// //     });
// //  // Question 1 how to pass the reject from resolve to the next then block?
// //     // Answer: You can throw an error in the resolve function or return a rejected promise.
// // Promos.resolve("This is a resolved promise")
// //     .then((message) => {
// //         console.log(message);
// //         throw new Error("An error occurred in the first then block");
// //     })
// //     .catch((error) => {
// //         console.error("Caught error:", error.message);
// //         return Promos.resolve("Continuing after error");
// //     })
// //     .then((message) => {
// //         console.log(message);
// //     })
// //     .finally(() => {
// //         console.log("Promise chain with error handling completed.");
// //     });

// Promise.resolve("This is a resolved promise")
//     .then(() => {
//         console.log("A");
//         // Simulating an error in the first then block
//     })
//     .then(() => {
//         console.log("B");
//         return Promise.reject(new Error("An error occurred in the first then block"));
//     })
//     .then(() => {
//         console.log("C");
//         return Promise.resolve("Continuing after error");
//     })
//     .then(() => {
//         console.log("D");
//     })
//     .finally(() => {
//         console.log("Promise chain with error handling completed.");
//     });

//     //Question 3 how to catch the error if we have no catch block in the promise chain?
// // Answer: If there is no catch block, the error will propagate to the global error handler.
// // so if catch is not present in ahead in chain then it will be caught by the global error handler so we have to carefully add the catch block in the chain to handle the error properly.
// // Example of a global error handler
// window.addEventListener('unhandledrejection', (event) => {
//     console.error('Unhandled promise rejection:', event.reason);
// });
// // This will log the error message to the console if any promise is rejected without a catch block.
// // Example of a promise that will trigger the global error handler
// Promise.reject(new Error("This will trigger the global error handler"))
//     .then(() => {
//         console.log("This will not run");
//     });
// // Note: In a real application, you should always handle errors in promise chains to avoid unhandled rejections.
// // Example of a promise that will not trigger the global error handler
// Promise.resolve("This will not trigger the global error handler")
//     .then(() => {
//         console.log("This will run");
//     })
//     .catch((error) => {
//         console.error("Caught error:", error.message);
//     });
// // // This will log the error message to the console if any promise is rejected without a catch block.
// Promise.resolve("Start of chain")
//     .then((message) => {
//         console.log(message); // "Start of chain"
//         throw new Error("Error in first then");
//     })
//     .catch((error) => {
//         console.error("Caught in first catch:", error.message);
//         return "Recovered after first error";
//     })
//     .then((message) => {
//         console.log(message); // "Recovered after first error"
//         // Simulate another rejection
// //         return Promise.reject(new Error("Error in second then"));
// //     })
// //     .then(() => {
// //         // This will be skipped due to rejection above
// //         console.log("This will not run");
// //     })
// //     // .catch((error) => {
// //     //     console.error("Caught in second catch:", error.message);
// //     // });

//     Promise.reject("This is a rejected promise")
//     .finally(() => {
//         console.log("This will always run, regardless of rejection");
//     })
//     .then(() => {
//         console.log("This will not run");
//     })
//     .catch((error) => {
//         console.error("Caught in catch:", error);
//         return "Recovered after rejection";
//     })
//     .then((message) => {
//         console.log(message); // "Recovered after rejection"
//     })


    // create custom polyfill for promise 

    Promise.myPromiseAll = function(promises)
    {
        // iterate over all the list of promises 
        // and return the new promise

        // finally a result array which will store all success results by index

        // return an error if you get the error 
        // return result if you got all resolved
        return new Promise((resolve, reject)=>{

            if(promises.length===0){
                resolve([]);
                return;
            }

            const result=[];
            let successCount =0;

            promises.forEach((promise, index)=>{
                Promise.resolve(promise).then((data)=>{
                    result[index]=data;
                    successCount++;
                    if(successCount===promises.length){
                        resolve(result);
                    }

                }).catch((err)=>{
                    reject(err);
                })
            })
        })
        
    }

const p1 = Promise.resolve(3);
const p2 = 42; // non-promise value
const p3 = new Promise((resolve) => setTimeout(resolve, 5000, 'foo'));

Promise.myPromiseAll([p1, p2, p3])
    .then(console.log) // [3, 42, "foo"]
    .catch(console.error);