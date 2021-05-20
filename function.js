"use strict";
// inferred returned type === number (we add two numbers)
const add = (n1, n2) => n1 + n2;
// no return value => type === void
const printResult = (num) => {
    console.log("Result: " + num);
};
printResult(add(5, 2));
//let combineValues: Function;
// more precise
let combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(3, 3));
// same pattern for callbacks
const addAndHandle = (a, b, cb) => {
    const result = a + b;
    cb(result);
};
addAndHandle(1, 21, (result) => {
    console.log(result);
});
