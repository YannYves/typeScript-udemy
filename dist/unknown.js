"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, code };
}
generateError("An error occurred !", 500);
//# sourceMappingURL=unknown.js.map