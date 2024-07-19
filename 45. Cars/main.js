"use strict";
/*
Question # 42
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacturer, model, options = {}) {
    return { manufacturer: manufacturer, model: model, ...options // Spread operator to add additional properties
    };
}
const car1 = make_car("Honda", "CIVIC", { color: "Grey", year: "2022" });
const car2 = make_car("Audi", "Etron", { color: "Black", year: "2023" });
console.log(car1);
console.log(car2);
