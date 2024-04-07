// Explain the concept of prime numbers and write a function to check if a given number is prime.

// Explanation:-
// A number which is only divisible by one 
// and the number itself is called a Prime number

function isPrime(num) {
    if (num <=1) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    for (let fact = 3; fact * fact <= num; fact += 2){ 
        if (num % fact == 0){
            return false;
        }
    }
        return true;
    }

console.log(isPrime(7))
console.log(isPrime(9))

// Write a function to find the largest element in an array.
function largest(arr) { 
    // Initialize maximum element 
    let max = arr[0]; 
    // Traverse array elements from second and compare with current max 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    return max; 
} 
  
let arr = [22, 65, 1, 39]; 
console.log("The Largest element is " + largest(arr));
console.log("The Largest element is " + largest([23]));
console.log("The Largest element is " + largest([0,1,1,23,1]));

// Write a function to find the second largest element in an array.
function findSecondLargestNo(arr) { 
    if (arr.length < 2) { 
        return "Minimum 2 numbers required"; 
    } 
    // Sort the array in ascending order 
    arr.sort(function(a, b){return a-b}); 
    // Start from the second last element as the largest element is at last 
    for (let i = arr.length - 2; i >= 0; i--) { 
        // If the element is not equal to the largest element 
        if (arr[i] !== arr[arr.length - 1]) { 
            return "The second largest element is " + arr[i]; 
        } 
    } 
    return "There is no second largest element"; 
} 

const arr1 = [22, 28, 102, 105, 32, 36, 14, 34, 21]; 
console.log(findSecondLargestNo(arr1));
console.log(findSecondLargestNo([2,1,1,2,2]));
console.log(findSecondLargestNo([2]));

// Write a function to find the nth Fibonacci number using iteration.
function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
 
console.log("The 5th number is " + fibonacci(5));
console.log("The 8th number is " + fibonacci(8));

// Write a function to calculate the factorial of a number using iteration.
const factFunc = function factorial(num){
var fact = 1;
var i = 1;
while (i<=num) {
    fact = fact * i;
    i++;
}
return fact;
}

console.log(factFunc(5));
console.log(factFunc(3));
