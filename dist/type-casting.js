"use strict";
var _a;
const e1 = {
    name: " Yann",
    privileges: ["crete-server"],
    startDate: new Date(),
};
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privileges: " + emp.name);
    }
}
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck ...");
    }
    loadCargo(amout) {
        console.log("loading cargo ..." + amout);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(30);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed ..." + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
const userIn = document.getElementById("user-input");
userIn.value = "Hi there";
if (userIn) {
    userIn.value = "Hello";
}
const errorBag = {
    error: "this is an error message",
};
function add3(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result3 = add3(2, 3);
const result2 = add2(3, 3);
const fetchUserData = {
    id: "u1",
    name: "yann",
    job: { title: "CEO", description: "My company" },
};
console.log(fetchUserData.job && fetchUserData.job.title, "js");
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title, "ts");
let userInp = null || undefined;
let storeData = userInp !== null && userInp !== void 0 ? userInp : "DEFAULT TS";
console.log(storeData);
//# sourceMappingURL=type-casting.js.map