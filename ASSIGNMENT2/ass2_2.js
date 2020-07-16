// Question 2 : Explain with example  remaing methods of String and Array

// SEARCH 

let str = "We can lear java script as fast as its easy to understand    ";

console.log(str.search("java"));

// SLICE

console.log(str.slice(7,23));

// SUBSTRING

console.log(str.substring(23,31));

console.log(str.substr(32));

// Replacing

console.log(str.replace("as fast as","as quickly because" ));

//trim

console.log(str.trim());

var fruits = ['banana','orange']

// join
console.log(fruits.join('*'));

// tostring
console.log(fruits.toString());

// changing the element
fruits[0] = 'mango';
console.log(fruits)


