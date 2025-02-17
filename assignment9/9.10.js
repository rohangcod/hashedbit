// Function to calculate sum using reduce()
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // Example array
  const numbers = [10, 20, 30, 40, 50];
  
  // Function call and output
  console.log("Sum of numbers:", sumArray(numbers));
  