"use strict";
const addition = (input1, input2, resultConversion) => {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
};
console.log(addition(3, 2, "as-number"));
console.log(addition("yann", "anna", "as-number"));
//# sourceMappingURL=uninion-aliaes.js.map