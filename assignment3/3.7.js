// Q7) Calculate student averages using array.map and array.reduce.
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];
const output = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((a, b) => a + b) / student.scores.length
}));
console.log(output);
