// Define variables for multiplication
let num1 = 2;
let num2 = 31;
let multiply = num1 * num2; // 2 * 31 = 62

// Generate a random integer greater than 0
let random = Math.floor(Math.random() * 100) + 1; // Ensures a positive number

// Define variables for modulus operation
let num3 = 14;
let num4 = 5;
let mod = num3 % num4; // 14 % 5 = 4

// Find the highest number in a set
let max = Math.max(1, 5, 10, 15, 20); // Should return 20

// Export the variables for testing
module.exports = { multiply, random, mod, max };
