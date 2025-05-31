                // JS-4: Array , HOFs and it's Polyfills

//copy
     // Shallow copy
     // deep copy
//flatten array
//function 

const obj = {
    name: "priyank",
    age: 25,
    address: {
        city: "delhi",
        state: "delhi"
    }
};

const obj2= {...obj}; // shallow copy
obj2.name = "mayank"; // this will not change the original object
console.log(obj.name); // priyank

const obj3 = Object.assign({}, obj); // shallow copy
obj3.address.city = "noida"; // this will change the original object
console.log(obj.address.city); // noida

obj3.address.city = "delhi"; // this will change the original object
console.log(obj.address.city); // delhi

const obj4 = JSON.parse(JSON.stringify(obj)); // deep copy
obj4.address.city = "noida"; // this will not change the original object
console.log(obj.address.city); // delhi
console.log(obj4.address.city); // noida

//++++++++++++++++++++++++++++++++++++++++++++
//  problem solving sessions +


