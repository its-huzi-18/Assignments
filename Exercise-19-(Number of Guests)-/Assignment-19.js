"use strict";
// Exercise 16: More Guests
const originalGuestList = ["Albert", "Marie", "Fakhar"];
// Identify the guest who can't make it
const guestUnableToAttend = "Fakhar";
// Replace the guest who can't make it with a new guest
const replacementGuest = "Ayub";
const updatedGuestList = [...originalGuestList.filter(guest => guest !== guestUnableToAttend), replacementGuest];
// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
updatedGuestList.unshift("Newton");
// Add one new guest to the middle of the array
updatedGuestList.splice(Math.floor(updatedGuestList.length / 2), 0, "Israr");
// Use push() to add one new guest to the end of the list
updatedGuestList.push("Ibrar");
// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${updatedGuestList.length}`);
