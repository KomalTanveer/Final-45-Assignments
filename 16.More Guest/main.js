//Question # 16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
•Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
//Original Message
var guests = ["Abiha", "Neha", "Ayesha"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nIt would be a pleasure to have your company for dinner tonight."));
});
//informing guest about big table
console.log("\nGood News, I found a big dinner table.\n");
//Add one new guest to the beginning of array.
guests.unshift("Fatima");
//Add one new guest to the middle of array
guests.splice(guests.length / 2, 0, "Aliza");
//add one new guest to the end of list.
guests.push("Sara");
//Print a new set of invitation messages.
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", \nI'm having a dinner party and your presence would make it complete."));
});
