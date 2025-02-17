// Q1) Create an array of states in India. Remove all names starting with vowels from the list. Use array.filter.
const states = ["Uttar Pradesh", "Odisha", "Andhra Pradesh", "Maharashtra", "Karnataka", "Assam"];
const filteredStates = states.filter(state => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase()));
console.log(filteredStates);
