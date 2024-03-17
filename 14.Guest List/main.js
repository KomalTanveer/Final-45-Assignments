//Question # 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Hania", "Fabiha", "Zara", "Fizza"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var name_1 = guestList_1[_i];
    console.log("Dear ".concat(name_1, ", \nI would like to invite you for dinner today, it would be really apppreciating if you join us."));
}
