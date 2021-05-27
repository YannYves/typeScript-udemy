"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(constructor) {
    console.log("logging ...");
    console.log(constructor);
}
function LoggerFactory(logSting) {
    return function (constructor) {
        console.log(logSting);
        console.log(constructor);
    };
}
function WithTemplate(template, hookID) {
    return function (constructor) {
        console.log("rendering template");
        const hookEl = document.getElementById(hookID);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Yann";
        console.log("Creating a person object...");
    }
};
Person2 = __decorate([
    LoggerFactory("LOGGING - PERSON"),
    WithTemplate("<h1> My Person Object </h1>", "app")
], Person2);
const pers2 = new Person2();
console.log(pers2);
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this._price = p;
        this.title = t;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=decorator-basic.js.map