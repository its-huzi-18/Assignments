// Exercise 16: More Guests
const originalGuestList: string[] = ["Einstein", "Marie", "Nelson"];

// Print original invitations
console.log("Original Invitations:");
for (const guest of originalGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}

// Identify the guest who can't make it
const guestUnableToAttend = "Nelson";

// Print a statement about the guest who can't make it
console.log(`Unfortunately, ${guestUnableToAttend} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
const replacementGuest = "William";
const updatedGuestList: string[] = [...originalGuestList.filter(guest => guest !== guestUnableToAttend), replacementGuest];

// Print updated invitations
console.log("\nUpdated Invitations:");
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}

// Exercise "More Guests"
// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
updatedGuestList.unshift("Newton");

// Add one new guest to the middle of the array
updatedGuestList.splice(Math.floor(updatedGuestList.length / 2), 0, "Grace Hopper");

// Use push() to add one new guest to the end of the list
updatedGuestList.push("Elon Musk");

// Print new set of invitation messages
console.log("\nNew Invitations:");
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}

// Shrinking Guest List
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people.");

// Remove guests one at a time until only two names remain
while (updatedGuestList.length > 2) {
    const removedGuest = updatedGuestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitations to the two remaining guests
console.log(`\nInvitations to the final two guests:`);
for (const remainingGuest of updatedGuestList) {
    console.log(`Dear ${remainingGuest}, you are still invited to dinner. We hope to see you.`);
}

// Remove the last two names from the list, leaving an empty list
updatedGuestList.pop();
updatedGuestList.pop();

// Print the empty list
console.log("\nFinal Guest List:", updatedGuestList);
