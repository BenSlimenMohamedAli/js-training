let a = null; // The null value different from undefined typically indicates a variable has been declared but not yet assigned a value, null is used to represent a deliberate absence of value

let b;

// one has a memory space, the other is not

console.log(a); // null
console.log(b); // undefined

const userList = ["user1", "user2", null];

console.log(userList[2]);
