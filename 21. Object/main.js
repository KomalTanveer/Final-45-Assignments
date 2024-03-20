//Question # 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var book = {
    title: "Namal",
    author: "Nimara Ahmad",
    yearPublished: 2012
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished));
var car = {
    make: "Honda",
    model: "Civic",
    color: "White",
    year: 2022,
    price: 4599000,
    features: "Android Auto, Lane keeping Assist System, Wireless Charging, Power Moonroof and Remote Engine Start"
};
console.log("The ".concat(car.year, " ").concat(car.make, " ").concat(car.model, " in ").concat(car.color, " is a stylish sedan packed with features like ").concat(car.features, " all at a price of Rs:").concat(car.price, "."));
