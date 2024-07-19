"use strict";
/* Question # 43
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
//original array
let magicians = ["David!", "Henri!", "George!"];
//function to show magician
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
//function to add "the great" to each magician name
function make_great(magicians) {
    let great_magicians = magicians.slice(); // Create a copy of the magicians array
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = great_magicians[i] + " The Great.";
    }
    return great_magicians;
}
let great_magicians = make_great(magicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians");
show_magicians(great_magicians);
