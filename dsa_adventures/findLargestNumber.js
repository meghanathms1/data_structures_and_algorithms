
/*
Question:
Write a JavaScript function to find the largest number
in an array. Print the largest number and return it.
*/

let arr = [10, 20, 30, 90, 100];

function findLargestNumber(arr) {
  // Handle an empty array.
  if (arr.length === 0) {
    console.log("The array is empty.");
    return null;
  }

  // Assume the first element is the largest number.
  let largest = arr[0];

  // Iterate through the array starting from the second element.
  for (let i = 1; i < arr.length; i++) {

    // Update largest if the current element is greater.
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  // Print the largest number.
  console.log(`Largest number is ${largest}`);

  // Return the largest number.
  return largest;
}

// Call the function with the array.
findLargestNumber(arr);
