// ex 1 | Temperature v1.0

// var randomNum = Math.floor(Math.random() * 11); // random number between 0 and 11
// console.log(randomNum)

//in this ex we need - 5
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min - 5)) + min
}
let Temperature = getRandomNumber(-5, 25);
// console.log(getRandomNumber(-5, 25) + "°C")
if (Temperature < 10)
    console.log(getRandomNumber(-5, 25) + "°C - The weather is cold")
else
    console.log(getRandomNumber(-5, 25) + "°C - The weather is moderate")

// ex 2 | Highest value in an array

const arrayofNum = Math.max(2, 5, 73, 7865, 23, 88);
console.log("Highest number is " + arrayofNum);

//ex 3 | Temperature v2.0
// Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min - 5)) + min
}
let weatherTemp = getRandomNumber(-5, 38);
// console.log(getRandomNumber(-5, 25) + "°C")
if (weatherTemp < 10)
    console.log(getRandomNumber(-5, 25) + "°C - The weather is cold")
else if (weatherTemp < 26)
    console.log(getRandomNumber(-5, 25) + "°C - The weather is moderate")
else if (weatherTemp < 32)
    console.log(getRandomNumber(-5, 25) + "°C - The weather is hot")
else
    console.log(getRandomNumber(-5, 25) + "°C - The weather is very hot - stay away from the sun!")