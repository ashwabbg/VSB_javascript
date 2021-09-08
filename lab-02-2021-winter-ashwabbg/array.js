// this block generates array with random length with values between 1-100
let numbers = []
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100))
}


// EXERCISE: 
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There can be multiple solutions to each task, solve it as you see fit.
// You work with array `numbers` (code below) in every task. 
// Display (using console.log): 
// a) whole array
// b) length of array 
// c) first element 
// d) last element 
// e) largest number 
// f) smallest number 
// g) sum of all numbers in array, 
// h) difference between the largest and the smallest number 
// i) average of all numbers 
// j) index of largest 
// k) display even numbers, if array doesn't contain even number, show text "Even number isn't in array"  
// l) Multiple by 2 every number in array ->  [1,2,3] -> [2,4,6]  
// m) If array contains number smaller than 10, say "Wow, this {smallest number} is very small."  
// n) Create new array with duplicities of `numbers` -> Example: createDupes([1,2,3]) -> [1,1,2,2,3,3]  
// o) Create two arrays from `numbers` array - one with even numbers, second with odd numbers, Example: splitEvenOdds([1,2,3,4]) -> [[2, 4], [1, 3]]

// Your code: 
// a) whole array
console.log(numbers);

// b) length of array 
console.log(numbers.length);

// c) first element 
console.log(numbers[0]);

// d) last element 
console.log(numbers[numbers.length-1]);

// e) largest number 
var max = numbers.reduce(function(a, b) {
  return Math.max(a, b);
}, 0);
console.log(max);

// f) smallest number 
var min = numbers.reduce(function(a, b) {
  return Math.min(a, b);
}, 100);
console.log(min);

// g) sum of all numbers in array, 
let sum=0;
numbers.forEach(function(item){sum=sum+item});
console.log(sum);

// h) difference between the largest and the smallest number
console.log('difference between the largest and the smallest number ' + (max-min));

// i) average of all numbers 
console.log(sum/numbers.length);

// j) index of largest 
console.log(numbers.indexOf(max)+1);