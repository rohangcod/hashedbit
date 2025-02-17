function squareNumbers(arr) {
    return arr.map(num => num * num); // Each number is squared
  }
  
  const numbers = [2, 4, 6, 8, 10];
  console.log(squareNumbers(numbers)); // Output: [4, 16, 36, 64, 100]
  