"use strict";
// Exercise-45-(Car)
function create_car(manufacturer, modelName, ...additionalInfo) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (let info of additionalInfo) {
        car[info[0]] = info[1];
    }
    return car;
}
// Call the function with required information and two other name-value pairs
let carInfo = create_car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the Object that's returned to make sure all the information was stored correctly
console.log(carInfo);
