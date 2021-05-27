"use strict";
const names = ["yann", "tony"];
const promise = new Promise((resole, reject) => {
    setTimeout(() => {
        resole("This is done");
    }, 2000);
    if (false) {
        reject("error");
    }
});
promise
    .then((data) => console.log(data.toUpperCase()))
    .catch((error) => console.log(error));
//# sourceMappingURL=gerenric-type.js.map