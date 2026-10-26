
let arr = [1, 2, 3, 4, 5, 6];

// Question: Write a JavaScript function to find the second-largest
// distinct number in an array using a single loop.

function SecondLargestNumber(arr) {
  let secondLargest = -Infinity;
  let Largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {

    // If the current number is greater than the largest,
    // move the current largest to secondLargest.
    if (arr[i] > Largest) {
      secondLargest = Largest;
      Largest = arr[i];

    // If the current number is smaller than the largest
    // but greater than secondLargest, update secondLargest.
    } else if (arr[i] > secondLargest && arr[i] < Largest) {
      secondLargest = arr[i];
    }
  }

  console.log(secondLargest);
}

SecondLargestNumber(arr); // Output: 5
