"use strict";
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }));
function countAndPrint(element) {
    let descriptionText = "Got not value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hello"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ hello: "salut" }, "hello"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("text");
const numberStorage = new DataStorage();
numberStorage.addItem(1);
function createCourseGoal(title, description, completeUntil) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
const names3 = ["yann", "tony"];
//# sourceMappingURL=genric-function.js.map