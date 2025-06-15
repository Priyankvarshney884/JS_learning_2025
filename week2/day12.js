/* today we will learn about the following topics:
1 promise any 
2.promise.race
3.promise.all
4.promise.allSettled
5.promise.resolve
6.promise.reject
7.promise.finally



*/
const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Delay of ${ms} milliseconds completed`);
        }, ms);
    });
};


