//Question # 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//Example #1
let book: { title: string; author: string; yearPublished: number }= { 
    title: "Namal", 
    author: "Nemrah Ahmad", 
    yearPublished: 2014 
};

console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);   

//Example #2
let car: {make: string; model: string; color: string; year: number; price: number; features: string;}={
    make: "Honda",
    model: "Civic",
    color: "White",
    year: 2022,
    price: 4599000,
    features: "Android Auto, Lane keeping Assist System, Wireless Charging, Power Moonroof and Remote Engine Start"};

console.log(`The ${car.year} ${car.make} ${car.model} in ${car.color} is a stylish sedan packed with features like ${car.features}, all at a price of Rs:${car.price}.`);
