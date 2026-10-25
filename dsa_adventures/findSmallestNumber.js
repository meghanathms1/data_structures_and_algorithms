
/*
Question:
Write a JavaScript function to find the smallest number in an array
without using built-in methods. Return the smallest number.
*/

let arr = [10, 20, 30, 90, 100];

function findSmallestNumber(arr) {
  // Handle an empty array.
  if (arr.length === 0) return null;

  // Assume the first element is the smallest.
  let smallest = arr[0];

  // Iterate through the remaining elements.
  for (let i = 1; i < arr.length; i++) {

    // Update smallest if the current element is smaller.
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  // Return the smallest number.
  return smallest;
}

// Print the result.
console.log(`Smallest number is ${findSmallestNumber(arr)}`);
