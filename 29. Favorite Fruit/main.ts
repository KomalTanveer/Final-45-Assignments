/*Question # 29
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favourite_fruits: string[] = ["Strawberry", "Kiwi" , "Pineapple"];

if (favourite_fruits.includes("Strawberry")){
    console.log("you really like Strawberry!");
}
if (favourite_fruits.includes("Kiwi")){
    console.log("you really like Kiwi!");
}
if (favourite_fruits.includes("Pineapple")){
    console.log("you really like Pineapple!");
}
if (favourite_fruits.includes("Apples")){
    console.log("you really like Apples!");
}
if (favourite_fruits.includes("Banana")){
    console.log("you really like Banana!");
}




