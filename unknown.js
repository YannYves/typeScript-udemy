"use strict";
let userInput;
let userName;
// ok
userInput = 5;
userInput = "max";
// ko
// userName = userInput;
//ok
if (typeof userInput === "string") {
    userName = userInput;
}
// never type
function generateError(message, code) {
    throw { message, code };
}
generateError("An error occurred !", 500);
