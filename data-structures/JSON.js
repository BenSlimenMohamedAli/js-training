// JSON : Javascript Object Notation

/**
{
    "name": "Jhon",
    "age": 30,
    "jsStudent": true,
    "address": {
        "city": "Tunis",
        "zipCode": 1200
    },
    "languages": ["arabic", "French", "English"],
    isNull: null,
}
 */

const student = {
  name: "Jhon",
  age: 30,
  jsStudent: true,
  address: {
    city: "Tunis",
    zipCode: 1200,
  },
  languages: ["arabic", "French", "English"],
  isNull: null,
};

console.log(student);

console.log(JSON.stringify(student)); // convert to string

console.log(JSON.parse(JSON.stringify(student))); // convert to JSON Object

console.log(JSON.stringify("hello"));

console.log(JSON.parse("hello"));
