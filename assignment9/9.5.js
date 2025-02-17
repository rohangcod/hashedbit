function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0); // Keeps only odd numbers
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(getOddNumbers(numbers)); // Output: [1, 3, 5, 7, 9]
  