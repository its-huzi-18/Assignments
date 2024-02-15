let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');

console.log("Is car.length > 4? I predict True.");
console.log(car.length > 4);

console.log("Is car.length < 3? I predict False.");
console.log(car.length < 3);

let temperature: number = 25;

console.log("Is temperature >= 20 && temperature <= 30? I predict True.");
console.log(temperature >= 20 && temperature <= 30);

console.log("Is temperature > 30 || temperature < 15? I predict False.");
console.log(temperature > 30 || temperature < 15);

let isRaining: boolean = true;

console.log("Is it raining and car === 'subaru'? I predict True.");
console.log(isRaining && car === 'subaru');

console.log("Is it not raining or car !== 'subaru'? I predict True.");
console.log(!isRaining || car !== 'subaru');
