/*Question # 24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
//Test for equality and inequality:
console.log("Testing equality with strings:");
console.log("apple" == "apple");
console.log("Testing inequality with strings:");
console.log("apple" != "apple");
//Tests using the lower case function:
console.log("lower case function:");
console.log("Apple".toLowerCase() == "apple");
console.log("Apple".toLowerCase() != "apple");
//Numerical tests involving equality and inequality
console.log("Numerical tests with equality:");
console.log(10 + 5 == 15);
console.log(10 + 5 != 15);
console.log(10 > 5);
console.log(10 < 5);
//Tests using "and" and "or" operators:
console.log("Test with 'and' and 'or'");
console.log(true && false);
console.log(true || false);
//Test whether an item is in a array
console.log("Test whether an item is in a array:");
var countries = ["Spain", "Finland", "Japan"];
console.log(countries[0] == 'Spain');
console.log("Test whether an item is not in a array:");
console.log(countries[2] != 'Japan');
