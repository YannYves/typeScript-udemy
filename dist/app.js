"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi");
        }
    }
}
let user1 = new Person("Yann");
console.log(user1.greet("Hello"));
let adding;
adding = (n1, n2) => n1 + n2;
//# sourceMappingURL=app.js.map