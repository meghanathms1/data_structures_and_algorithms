
/*
Question:
Write a JavaScript function to count the number of negative
elements in an array. Print the total count and return it.
*/

let arr = [10, 20, 30, 90];

function FindNumbercount(arr) {
  // Initialize the count of negative elements to 0.
  let count = 0;

  // Iterate through each element in the array.
  for (let i = 0; i < arr.length; i++) {

    // Check whether the current element is negative.
    if (arr[i] < 0) {
      // Increment the count if the element is negative.
      count++;
    }
  }

  // Print the total number of negative elements.
  console.log(`Negative element count is ${count}`);

  // Return the total count.
  return count;
}

// Call the function with the array.
FindNumbercount(arr);
