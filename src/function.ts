// inferred returned type === number (we add two numbers)
const addEm = (n1: number, n2: number) => n1 + n2;

// no return value => type === void
const printResult = (num: number): void => {
  console.log("Result: " + num);
};

printResult(addEm(5, 2));

//let combineValues: Function;
// more precise

let combineValues: (a: number, b: number) => number;

// alternative
// type addFn = (n1: number, n2: number) => number;
// let combineValues: addFn;
// combineValues = (a: number, b: number) => a + b;

combineValues = addEm;
// combineValues = printResult;

console.log(combineValues(3, 3));

// same pattern for callbacks

const addAndHandle = (a: number, b: number, cb: (num: number) => void) => {
  const result = a + b;
  cb(result);
};

addAndHandle(1, 21, (result) => {
  console.log(result);
});
