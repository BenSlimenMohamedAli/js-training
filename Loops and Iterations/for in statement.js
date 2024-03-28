const student = {
  name: "Jhon",
  age: 30,
  jsStudent: true,
  address: {
    city: "Tunis",
    zipCode: 1200,
    street: {
      number: 1,
      name: "Mouaouia ibn abi soufiane",
    },
  },
  languages: ["arabic", "French", "English"],
  isNull: null,
};

for (key in student) {
  console.log(key); // display the key
  console.log(student[key]); // display the value => dinamically accessing object properties
}

// get the list of values of an object
console.log(Object.values(student));
// get the list of keys of an object
console.log(Object.keys(student));
