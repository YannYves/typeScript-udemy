interface Named {
  // readonly => variable name can't be changed after object has been initialized
  readonly name?: string;
  // the question mark tells ts that this property might exist but doesn't have to
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;
  // n is set as an optional parameters
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable = new Person("Yann");
// user1.name ='Max' => Nope, name is readonly

console.log(user1.greet("Hello"));

// type AddFn  = (a: number, b: number)=> number;

interface AddFn {
  (a: number, b: number): number;
}

// use interface as a function type
let adding: AddFn;
adding = (n1: number, n2: number) => n1 + n2;
