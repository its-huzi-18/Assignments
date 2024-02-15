"use strict";
// Exercise-41-(Magicians)
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Make an array of magician's names
let magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to print the name of each magician in the array
show_magicians(magicianNames);
