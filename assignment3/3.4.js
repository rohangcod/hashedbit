// Q4) Take any string with minimum 20 characters. Count number of consonants and vowels in the string.
let inputString = "This is a beautiful country with culture";
let vowels = inputString.match(/[aeiouAEIOU]/g)?.length || 0;
let consonants = inputString.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
console.log({ vowels, consonants });
