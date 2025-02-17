// Q5) Write a function to replace wrong word with correct word in any sentence. Use string.replace in function.
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, "g"), correct);
}
console.log(correctfn("I love Japann", "Japann", "Japan"));
