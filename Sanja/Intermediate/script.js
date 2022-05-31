// Intermediate
// ex 1 | Compare two numbers 
// Create a JavaScript program that will show the average grade for each student.
var arr = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
]

var sum = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] < 60) {
        console.log(`${arr[i][0]} get's an F`);
    } else if (arr[i][1] < 70) {
        console.log(`${arr[i][0]} get's an D`);
    } else if (arr[i][1] < 80) {
        console.log(`${arr[i][0]} get's an C`);
    } else if (arr[i][1] < 90) {
        console.log(`${arr[i][0]} get's an B`)
    } else {
        console.log(`${arr[i][0]} get's an A`)
    }
    sum += arr[i][1];
}

console.log("The average Grade is " + sum / arr.length);

//second way
var studentPoints = [
    ["Martin", "Thomas", "Klaus", "Maria", "David"],
    [76, 85, 65, 93, 81]
];

for (i = 0; i < 5; i++) {
    if (studentPoints[1][i] < 60) {
        console.log((studentPoints[0][i]) + ", you have " + (studentPoints[1][i]) + " points. Your grade is F.");
    }
    if (studentPoints[1][i] < 70 && studentPoints[1][i] >= 60) {
        console.log(studentPoints[0][i] + ", you have " + studentPoints[1][i] + " points. Your grade is D.");
    }
    if (studentPoints[1][i] < 80 && studentPoints[1][i] >= 70) {
        console.log(studentPoints[0][i] + ", you have " + studentPoints[1][i] + " points. Your grade is C.");
    }
    if (studentPoints[1][i] < 90 && studentPoints[1][i] >= 80) {
        console.log(studentPoints[0][i] + ", you have " + studentPoints[1][i] + " points. Your grade is B.");
    }
    if (studentPoints[1][i] <= 100 && studentPoints[1][i] >= 90) {
        console.log(studentPoints[0][i] + ", you have " + studentPoints[1][i] + " points. Your grade is A.");
    }
}

var average = (studentPoints[1][0] + studentPoints[1][1] + studentPoints[1][2] + studentPoints[1][3] + studentPoints[1][4]) / 5;

if (average < 60) {
    console.log("Class, you have " + average + " points on avarage. Your average grade is F.");
}
if (average < 70 && average >= 60) {
    console.log("Class, you have " + average + " points on avarage. Your average grade is D.");
}
if (average < 80 && average >= 70) {
    console.log("Class, you have " + average + " points on avarage. Your average grade is C.");
}
if (average < 90 && average >= 80) {
    console.log("Class, you have " + average + " points on avarage. Your average grade is B.");
}
if (average <= 100 && average >= 90) {
    console.log("Class, you have " + average + " points on avarage. Your average grade is A.");
}

// ex 2 | FizzBuzz
for (var i = 1; i < 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i + " FizzBuzz") // For overwriting just delete i+
    } else if (i % 3 == 0) {
        console.log(i + " Fizz")
    } else if (i % 5 == 0) {
        console.log(i + " Buzz")
    } else {
        console.log(i)
    }
}
//second way ARRAY - overwriting the number
var arr = [];

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        arr.push("Fizz-Buzz");
    } else if (i % 5 === 0) {
        arr.push("Buzz");
    } else if (i % 3 === 0) {
        arr.push("Fizz");
    } else {
        arr.push(i);
    }
}

console.log(arr);

//ex 3
// try to recreate this form using a loop :
// *
// **
// ***
// ****
//in array:
var stars = [];
for (var i = 0; i <= 10; i++) {
    stars.push("*");
    console.log(stars);
}

// second way - right way
var star = "";
for (var i = 0; i <= 10; i++) {
    star += "*";
    console.log(star);
}