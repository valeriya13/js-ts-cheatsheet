# JavaScript Basics

## Data Types

JavaScript has two categories of data types:
- **Primitive types**: string, number, boolean, null, undefined, symbol, bigint.
- **Reference types**: objects, arrays, functions.

 **Examples**

```js
typeof 13            // "number"
typeof "hello"       // "string"
typeof null          // "object" (this stands since the beginning of JS) cf. comments below
typeof undefined     // "undefined"
typeof Symbol()      // "symbol" cf example below
```
**Comments**

The null keyword represents an intentionally defined absence of value. null is a primitive, although the typeof operator returns that null is an object. This is an error that has carried over from the first version of JavaScript and been left intentionally unaddressed to avoid breaking expected behavior across the web.


**Examples of usage**

[Symbol](examples/javascript/symbols.js )

[Difference between null and undefined values](examples/javascript/null_undefined.js )


## == vs ===
Double equal: The double equal('==') operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.

Triple equal: The triple equal('===') operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false. 
