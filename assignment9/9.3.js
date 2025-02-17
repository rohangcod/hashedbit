function modifyArray(arr) {
    arr.push("New Element"); // Adds a new element at the end
    arr.pop(); // Removes the last element (which we just added)
    return arr;
  }
  
  const myArray = [10, 20, 30, 40];
  console.log(modifyArray(myArray)); // Output: [10, 20, 30, 40] (same as original)
  