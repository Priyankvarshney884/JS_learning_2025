# Week 1 Consolidated JavaScript Notes

This document combines topics covered across:
- `day1.js`
- `day2.js`
- `day3.js`
- `day4.js`
- `day5.js`

## 1) `this` Keyword and Function Context
- **Definition**: `this` is the object that a function is currently bound to at call time.
- In a **method call** (`obj.fn()`), `this` usually points to `obj`.
- In a **plain function call** (`fn()`), `this` is global object (`window`) in non-strict mode, or `undefined` in strict mode.

## 2) Regular Function vs Arrow Function
- **Regular function**: has its own dynamic `this` based on how it is called.
- **Arrow function**: does not create its own `this`; it lexically captures `this` from parent scope.
- Common pattern used in notes: inside object methods, arrow function helps keep outer method context.

## 3) Method Chaining
- **Definition**: Calling multiple methods in sequence on the same object.
- Requirement: each method should return `this`.
- Example style: `obj.up().up().down().showStep()`.

## 4) Inheritance and Prototype Basics
- **Inheritance**: one object/class can reuse properties and behavior from another.
- **Prototypal inheritance**: objects inherit from other objects via prototype chain.
- Example shown: extending `Array.prototype` with a custom method (`last()`).

## 5) `call`, `apply`, `bind`
- **Definition**: methods used to explicitly set function context (`this`).
- `call(thisArg, a, b)`: executes immediately with comma-separated args.
- `apply(thisArg, [a, b])`: executes immediately with args array.
- `bind(thisArg, a, b)`: returns a new function with bound context (and optional partial args).

## 6) Shallow Copy vs Deep Copy
- **Shallow copy**: copies top-level properties only; nested objects are still shared references.
- **Deep copy**: recursively copies nested data so original and copy are independent.
- Shallow copy used: spread `{...obj}`, `Object.assign({}, obj)`.
- Deep copy used in notes: `JSON.parse(JSON.stringify(obj))` (works for JSON-safe data only).

## 7) Rest and Spread Operator (`...`)
- **Rest**: collects multiple values into one array/object part.
  - Example: `function sum(...nums) {}`
- **Spread**: expands array/object into individual elements/properties.
  - Example: `const arr2 = [...arr1, 4, 5]`

## 8) Destructuring
- **Definition**: extracting values from objects/arrays into variables.
- Example style from notes: `const { a, b, ...rest } = obj`.

## 9) Classes and Constructor
- **Class**: template for creating objects with shared methods.
- **Constructor**: special method that initializes instance data when `new` is used.
- Example included: `Rectangle` class with `area()` and `perimeter()`.

## 10) Getters and Setters
- **Getter**: reads computed/controlled property like normal field access.
- **Setter**: validates/transforms value before assignment.
- Example: full name getter/setter and age validation in setter.

## 11) Class Inheritance (`extends`, `super`)
- `extends`: create subclass from parent class.
- `super(...)`: call parent constructor.
- Method overriding shown with `Animal.speak()` and `Dog.speak()`.

## 12) Constructor Function Pattern and `instanceof` Guard
- Older JS pattern: function used with `new` to create objects.
- Guard pattern used:
  - If called without `new`, return `new Person(...)` internally.
  - Prevents accidental incorrect invocation.

## 13) Safe Nested Property Access Utility (`get`)
- **Problem**: direct deep access can throw errors if intermediate property is missing.
- **Solution**: traverse path step-by-step and return `defaultValue` when path breaks.
- Supports path in string format (`"a.b.c"`) or array format (`["a","b","c"]`).

## 14) Arrays, HOFs, Polyfills, Flattening (Day 4 Topic List)
- Notes mention these as learning targets:
  - **Array methods**
  - **HOF (Higher-Order Functions)**: functions that take/return functions.
  - **Polyfill**: custom implementation of built-in functionality.
  - **Flatten array**: convert nested arrays into a single-level array.

## Quick Revision Summary
- `this` depends on call-site (except arrow function lexical behavior).
- `call`/`apply` invoke now; `bind` returns a bound function.
- Spread/rest both use `...` but opposite intent.
- Spread/Object.assign are shallow; JSON copy is simple deep-copy workaround for plain data.
- Classes support constructor, methods, getters/setters, and inheritance.
- Safe access helpers prevent runtime errors for missing nested keys.
