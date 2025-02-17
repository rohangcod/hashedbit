// 4. Function to find sum of the product of corresponding digits
function sumOfProduct(n1, n2) {
    let sum = 0;
    let str1 = n1.toString().split("").reverse();
    let str2 = n2.toString().split("").reverse();
    
    for (let i = 0; i < str1.length; i++) {
        let digit1 = parseInt(str1[i]);
        let digit2 = str2[i] ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }
    return sum;
}
console.log(sumOfProduct(6, 34));
console.log(sumOfProduct(123, 456));