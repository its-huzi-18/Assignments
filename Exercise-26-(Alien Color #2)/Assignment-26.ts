// Version 1: Running the if block (green alien)

let alienColor: string = "green";

if (alienColor === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
// Version 2: Running the else block (non-green alien)

let alien2Color: string = "purple"; // You can choose any color other than green

if (alien2Color === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Nice shot! You just earned 10 points for shooting a non-green alien.");
}
