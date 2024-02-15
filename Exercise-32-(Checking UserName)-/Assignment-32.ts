let current_users: string[] = ["john", "alice", "bob", "emma", "mike"];
let new_users: string[] = ["Sarah", "John", "Mike", "Chris", "Bob"];

for (let new_user of new_users) {
    // Check if the new username exists in current_users (case-insensitive)
    let usernameExists = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());

    if (usernameExists) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
