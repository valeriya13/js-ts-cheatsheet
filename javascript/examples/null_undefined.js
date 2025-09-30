/* What is undefined?
- Uninitialized Variables: A variable that is declared but not initialized will have the value undefined.
- Missing Function Return: If a function does not explicitly return a value, it returns undefined by default.
- Non-Existent Object Properties or Array Elements: Accessing an object property or an array element that does not exist results in undefined.
*/

let newVariable; // variable declared but not initialized
console.log("newVariable value: " + newVariable); // Output: undefined

function uselessFunction() {
  // no return statement, so the function returns undefined
}
console.log("uselessFunction return value: " + uselessFunction()); // Output: undefined

let simpleObj = {};
console.log("simpleObj property value: " + simpleObj.property); // Output: undefined

/*  */