// decorators
function Logger(constructor: Function) {
  console.log("logging ...");
  console.log(constructor);
}
// decorators are functions. They're executed when the class is defined, not when instantiated

// decorators factory => return a decorator function but allow us to configure it when we assign it to something
// when using a factory, when need to execute it
function LoggerFactory(logSting: string) {
  return function (constructor: Function) {
    console.log(logSting);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookID: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    console.log("rendering template");
    return class extends originalConstructor {
      constructor(..._: any[]) {
        const hookEl = document.getElementById(hookID);
        super();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
        console.log("rendering template");
      }
    };
  };
}

@LoggerFactory("LOGGING - PERSON")
@WithTemplate("<h1> My Person Object </h1>", "app")
// withTemplate runs first then comes LoggerFactory . Execution order bottom -> up
class Person2 {
  name = "Yann";
  constructor() {
    console.log("Creating a person object...");
  }
}

const pers2 = new Person2();
console.log(pers2);

// ----

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  // add a decorator to a property
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string, p: number) {
    this._price = p;
    this.title = t;
  }
  // add a decorator to a method and to a parameters
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const orignalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = orignalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button2 = document.querySelector("button");
button2?.addEventListener("click", () => {
  p.showMessage;
});

interface ValidationConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidationConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      "positive",
    ],
  };
}
function Validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.price = p;
    this.title = t;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEL = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEL.value;
  const newCourse = new Course(title, price);
  if (!Validate(newCourse)) {
    throw new Error("wrong input");
  }
  console.log(newCourse);
});
