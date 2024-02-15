"use strict";
// Exercise-43-(UnChanged_Magicians)\
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
// Make an array of magician's names
let magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great with a copy of the array to create a new array with "the Great" added
let greatMagicians = make_great([...magicianNames]);
// Call show_magicians with each array to show the original and modified lists
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicians);
