// Array with three elements
const myArray: number[] = [10, 20, 30];

// Intentional error: Access an index that doesn't exist
// This will cause an "Index out of range" error
const incorrectValue = myArray[3];

// Correct the error by accessing a valid index
const correctedValue = myArray[1];

// Print the corrected value
console.log("Corrected Value:", correctedValue);
