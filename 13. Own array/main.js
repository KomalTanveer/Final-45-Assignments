//Question # 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransport = ["Civic", "Mercedes-Benz", "Fortuner", "Rolls-Royce", "BMW-M5", "Porsche"];
for (var _i = 0, favoriteTransport_1 = favoriteTransport; _i < favoriteTransport_1.length; _i++) {
    var car = favoriteTransport_1[_i];
    console.log("I would love to own a ".concat(car, "."));
}
