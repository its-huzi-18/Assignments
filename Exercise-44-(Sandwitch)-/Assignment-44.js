"use strict";
// Exercise-44-(Sandwitch)-
function order_sandwich(...items) {
    console.log("Sandwich order summary:");
    if (items.length > 0) {
        console.log(`- Bread`);
        for (let item of items) {
            console.log(`- ${item}`);
        }
        console.log(`- Bread`);
    }
    else {
        console.log("Oops! It seems you forgot to add any items to your sandwich.");
    }
    console.log("\n");
}
// Call the function three times with a different number of arguments each time
order_sandwich("Turkey", "Cheese", "Lettuce");
order_sandwich("Ham", "Tomato");
order_sandwich("Chicken");
