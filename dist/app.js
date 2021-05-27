"use strict";
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }));
//# sourceMappingURL=app.js.map