const obj = { x: 10, y: 5, r: 1, name: "dali" }; // Object is too much data in one variable => Dictionary
console.log(obj.toString()); // should return [object object]
console.log(obj.valueOf()); // should return the value of the object
console.log(obj.hasOwnProperty("x")); // should return true

/**
 * Adding Property to an object
 */

obj.oumaima = "Ou";

obj.ahmed = "Ah";

obj.achref = "Ah";

console.log(obj);

// Example of Object.create

const parent = { x: 10, y: 2 };
const child = parent;

console.log(Object.keys(parent));
