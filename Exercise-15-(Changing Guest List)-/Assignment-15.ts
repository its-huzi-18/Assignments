// Exercise 14: Guest List
const originalGuestList: string[] = ["Faizan", "Sohail", "Rafey"];

// Print original invitations
console.log("Original Invitations:");
for (const guest of originalGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}

// Exercise 15: Changing Guest List
// Identify the guest who can't make it
const guestUnableToAttend = "Rafey";

// Print a statement about the guest who can't make it
console.log(`Unfortunately, ${guestUnableToAttend} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
const replacementGuest = "Doud";
const updatedGuestList: string[] = [...originalGuestList.filter(guest => guest !== guestUnableToAttend), replacementGuest];

// Print updated invitations
console.log("\nUpdated Invitations:");
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}
