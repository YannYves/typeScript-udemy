"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "yann",
//   age: 30,
//   hobbies: ["sport", "cooking"],
//   role: [2, "author"],
// };
// let favoriteActivities: string[];
// favoriteActivities = ["1"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "yann",
    age: 30,
    hobbies: ["sport", "cooking"],
    role: Role.READ_ONLY,
};
person.role === Role.ADMIN ? console.log("admin") : console.log("no admin");
