
// Question:
// Write a function called sum() that accepts any number of arguments
// using the rest parameter (...args) and returns their total sum.
// If no arguments are provided, the function should return 0.

// Example:
// Input: sum(100, 200, 300, 400)
// Output: 1000

function sum(...args) {
    // Your implementation
    if (args.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }

    return sum;
}

// For debugging:
console.log(sum(100, 200, 300, 400)); // 1000
console.log(sum());                   // 0
