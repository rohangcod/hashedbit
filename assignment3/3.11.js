// Q11) Calculate student subject averages and return in the required format.
const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};
const studentAverages = Object.entries(studentsData).map(([key, subjects]) => ({
    [key]: { average: Object.values(subjects).reduce((a, b) => a + b, 0) / Object.values(subjects).length }
}));
console.log(studentAverages);
