// // decorators
// function Logger(constructor: Function) {
//   console.log("logging ...");
//   console.log(constructor);
// }
// // decorators are functions. They're executed when the class is defined, not when instantiated

// // decorators factory => return a decorator function but allow us to configure it when we assign it to something
// // when using a factory, when need to execute it
// function LoggerFactory(logSting: string) {
//   return function (constructor: Function) {
//     console.log(logSting);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookID: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     console.log("rendering template");
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         const hookEl = document.getElementById(hookID);
//         super();
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//         console.log("rendering template");
//       }
//     };
//   };
// }

// @LoggerFactory("LOGGING - PERSON")
// @WithTemplate("<h1> My Person Object </h1>", "app")
// // withTemplate runs first then comes LoggerFactory . Execution order bottom -> up
// class Person2 {
//   name = "Yann";
//   constructor() {
//     console.log("Creating a person object...");
//   }
// }

// const pers2 = new Person2();
// console.log(pers2);

// // ----

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("method decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("parameter decorator");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }
// class Product {
//   // add a decorator to a property
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price");
//     }
//   }

//   constructor(t: string, p: number) {
//     this._price = p;
//     this.title = t;
//   }
//   // add a decorator to a method and to a parameters
//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }
