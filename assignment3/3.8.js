// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
function digitSum(n) {
    while (n >= 10) {
        n = n.toString().split("").reduce((a, b) => a + Number(b), 0);
    }
    return n;
}
console.log(digitSum(456));
