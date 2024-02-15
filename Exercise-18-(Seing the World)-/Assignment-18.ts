// Think of at least five places in the world you'd like to visit
const placesToVisit: string[] = ["Tokyo", "Paris", "New York", "England", "Sydney"];

// Print your array in its original order
console.log("Original Order:", placesToVisit);

// Print your array in alphabetical order without modifying the actual list
const sortedAlphabetically = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedAlphabetically);

// Show that your array is still in its original order by printing it
console.log("Original Order (unchanged):", placesToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list
const sortedReverseAlphabetically = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", sortedReverseAlphabetically);

// Show that your array is still in its original order by printing it again
console.log("Original Order (unchanged):", placesToVisit);

// Reverse the order of your list. Print the array to show that its order has changed
const reversedList = [...placesToVisit].reverse();
console.log("Reversed Order:", reversedList);

// Reverse the order of your list again. Print the list to show it's back to its original order
const originalOrderAgain = [...reversedList].reverse();
console.log("Back to Original Order:", originalOrderAgain);

// Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed
const sortedArray = [...placesToVisit].sort();
console.log("Sorted in Alphabetical Order:", sortedArray);

// Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed
const reverseSortedArray = [...placesToVisit].sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:", reverseSortedArray);
