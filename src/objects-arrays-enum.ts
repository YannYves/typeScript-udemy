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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "yann",
  age: 30,
  hobbies: ["sport", "cooking"],
  role: Role.READ_ONLY,
};

person.role === Role.ADMIN ? console.log("admin") : console.log("no admin");
