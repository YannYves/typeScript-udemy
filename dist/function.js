"use strict";
const addEm = (n1, n2) => n1 + n2;
const printResult = (num) => {
    console.log("Result: " + num);
};
printResult(addEm(5, 2));
let combineValues;
combineValues = addEm;
console.log(combineValues(3, 3));
const addAndHandle = (a, b, cb) => {
    const result = a + b;
    cb(result);
};
addAndHandle(1, 21, (result) => {
    console.log(result);
});
//# sourceMappingURL=function.js.map