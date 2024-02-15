"use strict";
// Exercise 15: Changing Guest List
const originalGuestList = ["Rashid", "Zakir", "Kawish"];
// Print original invitations
console.log("Original Invitations:");
for (const guest of originalGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}
// Identify the guest who can't make it
const guestUnableToAttend = "Kawish";
// Print a statement about the guest who can't make it
console.log(`Unfortunately, ${guestUnableToAttend} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const replacementGuest = "Junaid";
const updatedGuestList = [...originalGuestList.filter(guest => guest !== guestUnableToAttend), replacementGuest];
// Print updated invitations
console.log("\nUpdated Invitations:");
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}
// Exercise "More Guests"
// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
updatedGuestList.unshift("William");
// Add one new guest to the middle of the array
updatedGuestList.splice(Math.floor(updatedGuestList.length / 2), 0, "David");
// Use push() to add one new guest to the end of the list
updatedGuestList.push("Sharuk");
// Print new set of invitation messages
console.log("\nNew Invitations:");
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}
