type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection type => combination of the two object type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: " Yann",
  privileges: ["crete-server"],
  startDate: new Date(),
};

type Combine = string | number;
type Numeric = number | boolean;

// Universal is of type number because that's the intersection of the two previous union types
type Universal = Combine & Numeric;

// type guard using typeof operator
function add2(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

// another type of type guard
function printEmployeeInformation(emp: UnknownEmployee) {
  // ts doesn't know how UnknownEmployee type is gonna be, hence if the privileges property will even exist
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges: " + emp.name);
  }
}

// class type guard
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck ...");
  }
  loadCargo(amout: number) {
    console.log("loading cargo ..." + amout);
  }
}
// union type
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // type guard using instanceof method
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(30);
  }
}

// discriminated unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  // discriminated pattern => using objects and union types
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

//type casting
// ! tells ts that the value will not yield null
const userIn = document.getElementById("user-input")! as HTMLInputElement;
userIn.value = "Hi there";

// alternative of using the exclamation mark
if (userIn) {
  (userIn as HTMLInputElement).value = "Hello";
}

// I know the type of the value of the object (string ) BUT I do not know the name of the property yet of its , then use the notation below (index type)
// index type
interface ErrorContainer {
  // {email: 'Not a valid email', username:'wrong username', ...}
  [prop: string]: string;
}

// saying that whatever object I'm constructing based on ErrorContainer , it must have properties that are strings
const errorBag: ErrorContainer = {
  error: "this is an error message",
};

// function overload => define multiple way of calling a function with different parameters
// if we call add3 with two numbers then it returned a string etc...
function add3(a: number, b: number): number;
function add3(a: string, b: string): string;
function add3(a: number, b: string): string;
function add3(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
// below we get the correct type returned thanks to function overload
const result3 = add3(2, 3);
// unlike below
const result2 = add2(3, 3);

// optional chaining
const fetchUserData = {
  id: "u1",
  name: "yann",
  job: { title: "CEO", description: "My company" },
};

// to make sure the job property exist you can do as below in js
console.log(fetchUserData.job && fetchUserData.job.title, "js");

// in ts , you can do as below
console.log(fetchUserData?.job?.title, "ts");

//null coalescing
// when you don't know wether a property is gonna be null of defined, a valid piece of data
let userInp = null || undefined;
// js
// let storeData  = userInp || "DEFAULT";

// however if you actually want to check wether the value if null or undefined (and nothing else) then use the coalescing
let storeData = userInp ?? "DEFAULT TS";

console.log(storeData);
