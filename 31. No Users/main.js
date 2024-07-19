"use strict";
/*Question # 31
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
//Creating array with value
let userNames = ["Admin", "Mark", "Julie", "Eric", "Catherine"];
//Remove all usernames from array
userNames = [];
// if statement for checking our array is empty
if (userNames.length === 0) {
    console.log("we need to find some users!");
    // if array is not empty
}
else {
    userNames.forEach(userName => {
        if (userName === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userName}, thank you for logging in again.`);
        }
    });
}
