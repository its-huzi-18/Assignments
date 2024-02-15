let favoritePizzas: string[] = ["Margherita", "Pepperoni", "Vegetarian"];

// Printing the name of each pizza
console.log("Pizza names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Printing a sentence for each pizza
console.log("\nStatements about my favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence about liking pizza
console.log("\nI really love pizza!");
