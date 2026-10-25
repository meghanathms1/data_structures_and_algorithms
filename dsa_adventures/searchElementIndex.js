
/*
Question:
Write a JavaScript function to search for a given element in an array.
If the element is found, print its index and return the index.
If the element is not found, print a message and return -1.
*/

let arr = [10, 20, 30, 50];

function SearchIndex(element) {
  // Loop through the array to find the given element.
  for (let i = 0; i < arr.length; i++) {

    // Check if the current element matches the target element.
    if (arr[i] === element) {

      // Print the element and its index.
      console.log(`Element ${element} found at index ${i}`);

      // Return the index when the element is found.
      return i;
    }
  }

  // Print a message if the element is not found.
  console.log(`Element ${element} was not found in the array.`);

  // Return -1 to indicate that the element was not found.
  return -1;
}

// Example usage:
SearchIndex(100);
