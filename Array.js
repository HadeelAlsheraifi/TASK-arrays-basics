
let emptyArray = [];
console.log(emptyArray);

const hobbies = [ 
    "Running",
    "Drawing",
    "Writing",
    "exploring",
    "playing",
    "working"];
console.log(hobbies);
const numbers = [
    4,
    8,
    1,
    9,
    3];

console.log(numbers[1]);


console.log(hobbies[hobbies.length - 1]);

hobbies.push("fakehobby");

console.log(hobbies.length);

hobbies.splice(-2);

hobbies.length = 0;
console.log(hobbies);

