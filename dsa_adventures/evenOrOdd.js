// Question: Write a function called isEven that takes a number as an argument
// and returns true if the number is even or false if the number is odd.

// Function definition
function isEven(num) {
  return num % 2 === 0;
}

// Example usage
console.log(isEven(0)); // true
console.log(isEven(7)); // false
console.log(isEven(4)); // true
console.log(isEven(9)); // false