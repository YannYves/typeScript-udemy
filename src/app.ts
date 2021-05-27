// creating a generic function
// it tells ts that the two object can and will be of different types, hence have different properties, we could access the .a property without issues
// ts understands that we will get back the intersection of the two objects
function merge<T, U>(objA: T, objB: U) {
  //return Object.assign(objA, objB);

  return { ...objA, ...objB };
}

console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }));
