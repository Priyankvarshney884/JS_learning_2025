// Here we will write the code for array prototype methods as Sealed object with Object.create() method.

if (!Object.prototype.sealPolyfill) {
    Object.defineProperty(Object.prototype, 'sealPolyfill', {
        value: function () {
            if (this === null || typeof this !== 'object') {
                throw new TypeError('sealPolyfill can only be called on objects');
            }

            const keys = Object.getOwnPropertyNames(this);

            for (let key of keys) {
                const descriptor = Object.getOwnPropertyDescriptor(this, key);

                // Redefine the property to be non-configurable
                Object.defineProperty(this, key, {
                    ...descriptor,
                    configurable: false
                });
            }

            // Prevent adding new properties
            Object.preventExtensions(this);

            return this;
        },
        writable: true,
        configurable: true
    });
}


const obj = { name: 'John', age: 30 };
console.log(Object.isSealed(obj));  // false

obj.sealPolyfill();

console.log(Object.isSealed(obj));  // true

obj.name = 'Jane'; 
console.log(obj.name);  // Jane

obj.gender = 'Female';
console.log(obj.gender); // undefined

delete obj.age;
console.log(obj.age);   // 30
