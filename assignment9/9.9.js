// Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  // Example objects
  const person = {
    name: "Rohan",
    age: 21
  };
  
  const job = {
    occupation: "Software Engineer",
    company: "Google"
  };
  
  // Function call and output
  console.log("Merged Object:", mergeObjects(person, job));
  