let userInput: unknown;
let userName: string;

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

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("An error occurred !", 500);
