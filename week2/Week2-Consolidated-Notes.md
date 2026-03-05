# Week 2 Consolidated JavaScript Notes

This document combines topics covered across:
- `day6.js`
- `day7.js`
- `day9.js`
- `day10.js`
- `day11.js`
- `day12.js`
- `prortotype-sealed.js`
- `visualrepresentation.html`

## 1) Closure
- **Definition**: A closure is a function that remembers and can access variables from its outer lexical scope even after the outer function has finished.
- Uses shown in notes:
  - Counters
  - Data encapsulation
  - Currying
  - Memoization

## 2) Lexical Scope and Scope Chain
- **Lexical scope**: scope is decided by where code is written, not where it is called.
- Inner functions can access outer variables; outer cannot access inner variables.
- Related examples include nested functions and variable shadowing behavior.

## 3) `let` vs `var` in Loops with Closures
- `let` creates block-scoped binding per iteration.
- `var` is function-scoped, so loop callbacks often capture the same final value.
- This explains why callback outputs differ in loop examples.

## 4) Memoization
- **Definition**: optimization technique that caches function results for repeated inputs.
- Pattern in notes:
  - Build a cache key from arguments.
  - Return cached result if available.
  - Otherwise compute, store, and return.

## 5) Flatten Object
- **Definition**: convert nested object properties into a single-level object with dotted paths.
- Example style:
  - `{ b: { c: 2 } }` becomes `{ "b.c": 2 }`.

## 6) Currying and Partial Application
- **Currying**: transform `f(a, b)` into `f(a)(b)`.
- Notes include function supporting both:
  - Direct call: `f(2,3)`
  - Curried call: `f(2)(3)`

## 7) Higher-Order Functions (HOF)
- **Definition**: functions that take other functions as arguments or return functions.
- Shown via callback patterns, memoization wrappers, and curried functions.

## 8) Object Introspection Helpers
- `Object.keys(obj)`: returns own enumerable property names.
- `Object.values(obj)`: returns own enumerable property values.

## 9) Custom `instanceof`-style Check
- Goal in notes: check whether value has access to class methods through prototype chain.
- Technique:
  - Walk prototypes via `Object.getPrototypeOf`.
  - Compare against `classFunction.prototype`.

## 10) Polyfill for `Object.create`
- **Definition**: create new object with a specified prototype.
- Polyfill pattern used:
  - Validate prototype input.
  - Create temporary constructor.
  - Set constructor prototype.
  - Return `new` instance.

## 11) Polyfill for `Object.seal`
- **Sealed object behavior**:
  - Cannot add new properties.
  - Cannot delete existing properties.
  - Existing writable properties can still be updated.
- Polyfill approach in notes:
  - Make own properties non-configurable.
  - Call `Object.preventExtensions`.

## 12) Async JavaScript Basics
- **Callback**: function executed later by another function.
- **Promise**: object representing pending/fulfilled/rejected async result.
- **Async/Await**: syntax for writing promise-based code in synchronous style.

## 13) Event Loop Model
- **Call Stack**: current executing function frames.
- **Web APIs / Node APIs**: environment features handling async operations.
- **Callback Queue (Macrotask Queue)**: timers, I/O callbacks.
- **Microtask Queue**: promise callbacks; processed before next macrotask.
- Execution order demonstrated with `setTimeout`, `Promise.resolve().then(...)`, and sync logs.

## 14) Timers and Node `fs`
- `setTimeout`: runs once after delay.
- `setInterval`: runs repeatedly until cleared.
- Node `fs.readFile`: asynchronous file read callback pattern.

## 15) Promise Chaining and Error Flow
- `.then(...)` chains resolved values.
- Throwing in `.then` converts flow to rejected state.
- `.catch(...)` handles rejection and can recover chain.
- `.finally(...)` runs regardless of resolve/reject.
- Unhandled rejections can be caught globally (`unhandledrejection` in browser).

## 16) Promise Utility Methods (Week Topic List)
- `Promise.resolve(value)`: creates resolved promise.
- `Promise.reject(error)`: creates rejected promise.
- `Promise.all([...])`: resolves when all resolve, rejects on first rejection.
- `Promise.allSettled([...])`: waits for all, returns status objects.
- `Promise.race([...])`: settles with first settled promise.
- `Promise.any([...])`: fulfills with first fulfilled promise, rejects if all reject.

## 17) Custom Promise Polyfill: `Promise.myPromiseAll`
- Custom implementation behavior:
  - Accept mixed values/promises.
  - Preserve result order by index.
  - Resolve when all succeed.
  - Reject immediately on first failure.

## Quick Revision Summary
- Closures preserve outer scope; memoization and currying are direct applications.
- Use `let` in loops when callbacks depend on each iteration’s value.
- Prototype chain powers inheritance checks and object creation patterns.
- Sealed objects block add/delete but allow updates to writable existing fields.
- In async flow, microtasks run before macrotasks.
- Promise chains propagate errors until handled by `.catch()`.
