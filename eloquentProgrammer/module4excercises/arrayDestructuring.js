console.log("---> Array Destructuring <---");

// Example 1
console.log("......................");
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Example 2
console.log("......................");
const numbers = [1, 2, 3, 4, 5];

const [first, , , forth] = numbers;
console.log(first);
console.log(forth);

// Example 3
console.log("......................");
const nestedArray = [1, [2, 3], 4, [5, 6]];

const [, [t, y], , [, c]] = nestedArray;

console.log(t);
console.log(y);
console.log(c);

// Example 4
console.log("......................");
const colors = ["red", "green", "blue", "yellow"];

const [primaryColor, secondaryColor, ...otherColors] = colors;

console.log(primaryColor); // Output: 'red'
console.log(secondaryColor); // Output: 'green'
console.log(otherColors); // Output: ['blue', 'yellow']
