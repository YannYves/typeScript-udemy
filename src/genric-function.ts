// creating a generic function
// it tells ts that the two object can and will be of different types, hence have different properties, we could access the .a property without issues
// ts understands that we will get back the intersection of the two objects
// extends => add a constraint . We force that we pass only object
function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  //return Object.assign(objA, objB);

  return { ...objA, ...objB };
}

console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }));

// Only care about the fact that the arguments have a length property
interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = "Got not value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndPrint("Hello"));

// we make sure the object has the correct structure (here a obj has a key property)
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ hello: "salut" }, "hello"));

// we make sure that the data will always be of one kind , which can be set dynamically
// works only for primitive type(string, number, boolean)
// flexibility + type safety
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// ok
textStorage.addItem("text");
// ko
//textStorage.addItem(3);

const numberStorage = new DataStorage<number>();
// ok
numberStorage.addItem(1);
//ko
///numberStorage.addItem("yann");

// generic utility type

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  // Partial type make all property are optionals, it tells ts that the type will eventually of type CourseGoal
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

// read only type
const names3: Readonly<string[]> = ["yann", "tony"];
// ko
//names2.push("samir");
