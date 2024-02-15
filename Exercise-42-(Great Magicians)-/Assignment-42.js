"use strict";
// Exercise-42-(Great_Magicians)
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
// Call make_great to modify the array of magicians
let greatMagicians = make_great(magicianNames);
// Call show_magicians to see that the list has been modified
show_magicians(greatMagicians);
