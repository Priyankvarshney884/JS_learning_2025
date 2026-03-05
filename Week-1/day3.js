
let cap = {
    name:"steve",
    team:"cap",
    petersTeam : function(mem1, mem2){
        console.log(`Hey ${this.name} ${this.team} ${mem1} ${mem2}`);
    }
    
}
let ironMan = {
    name:"tony",
    team:"ironMan",
    
}

cap.petersTeam('loki','thor'); // Hey steve cap loki thor
// let say we want this outcome by using array function how can we acheive this 
// hey tony ironMan loki thor
// we can use call and apply method
cap.petersTeam.call(ironMan, 'loki', 'thor'); // Hey tony ironMan loki thor

// // we can use apply method
cap.petersTeam.apply(ironMan, ['loki', 'thor']); // Hey tony ironMan loki thor


// we can use bind method
let newFn = cap.petersTeam.bind(ironMan, 'loki', 'thor'); // it will return a function
newFn(); // Hey tony ironMan loki thor

// // we can use bind method to pass the arguments
let newFn2 = cap.petersTeam.bind(ironMan); // it will return a function
newFn2('loki', 'thor'); // Hey tony ironMan loki thor

// // we can use bind method to pass the arguments
let newFn3 = cap.petersTeam.bind(ironMan, 'loki'); // it will return a function
newFn3('priyank'); // Hey tony ironMan loki thor

// // we can use bind method to pass the arguments

//*****************this are the different way that can help me shorten the function and bind explicity the code  */
//++++++++++++

//* question 1: what is the difference between call, apply and bind method
// call method is used to call the function with the given context and arguments    
// apply method is used to call the function with the given context and arguments as an array
// bind method is used to bind the function with the given context and arguments and it will return a new function

// *** how to make deep copy of an object 
  <script id='solution' defer>
        function makeDeepCopy(object) {
            // Write your solution here ========================
            return JSON.parse(JSON.stringify(object));
        }
    </script>
    
//***************************** */