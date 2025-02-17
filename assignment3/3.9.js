// Q9) Write a function to count the number of words in a paragraph.
function wordCount(paragraph) {
    return paragraph.split(/\s+/).filter(word => word.length > 0).length;
}
console.log(wordCount("This is a sample paragraph with some words."));
