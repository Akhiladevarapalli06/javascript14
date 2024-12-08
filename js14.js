//Write a function squareNumbers(arr) that returns a new array where each number in the original array is squared using map method.

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
let squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers);

// Output: [ 1,  4,  9, 16,  25, 36, 49, 64, 81, 100]

//Write a function toUppercase(arr) that returns a new array where each string in the original array is converted to uppercase using map method.

function toUppercase(arr) {
    return arr.map(str => str.toUpperCase());
}
let strings = ["hello", "world", "javascript","html","css","bootstrap"];
let uppercasedStrings = toUppercase(strings);
console.log(uppercasedStrings); 

// Output: [ 'HELLO', 'WORLD', 'JAVASCRIPT', 'HTML', 'CSS', 'BOOTSTRAP' ]
