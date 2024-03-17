//Question # 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a snew set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guests = ["Abiha", "Neha", "Ayesha"];
var unableToAttend = "Neha";
console.log("".concat(unableToAttend, ", can't make it to dinner. So i would like to invite someone else."));
//replace the guest
var newGuest = "Zara";
guests[guests.indexOf(unableToAttend)] = newGuest;
//new invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", \nIt would be a pleasure to have your company for dinner tonight."));
});
