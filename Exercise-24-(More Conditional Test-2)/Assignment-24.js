"use strict";
// Tests for equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit != 'orange');
// Tests using the lower case function
let city = 'New York';
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
// Numerical tests
let number1 = 15;
let number2 = 20;
console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2);
console.log("Is number1 >= number2? I predict False.");
console.log(number1 >= number2);
// Tests using "and" and "or" operators
let sunny = true;
let warm = false;
console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm);
console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm);
// Test whether an item is in an array
let fruitsArray = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruitsArray? I predict True.");
console.log(fruitsArray.includes('apple'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruitsArray? I predict True.");
console.log(!fruitsArray.includes('grape'));
