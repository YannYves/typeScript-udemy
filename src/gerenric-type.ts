// generic type
const names: Array<string> = ["yann", "tony"];

const promise: Promise<string> = new Promise((resole, reject) => {
  setTimeout(() => {
    resole("This is done");
  }, 2000);
  if (false) {
    reject("error");
  }
});

// the promise will eventually yield a string, we can call split on it
promise
  .then((data) => console.log(data.toUpperCase()))
  .catch((error) => console.log(error));
