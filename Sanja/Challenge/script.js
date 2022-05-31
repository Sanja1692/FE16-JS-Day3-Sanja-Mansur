// Challenge
// To solve this task, you will need two arrays: Student and MathGrades. The arrays should have respectively in Students, the students names and in the MathGrades, in the same index, the students grade for Maths going from 0 to 100.
// Create a JavaScript program that will show the average grade for each student.

var MathGrades = [
    ["Martin", "Thomas", "Klaus", "Maria", "David", "Sanja", "John"],
    [76, 85, 65, 93, 81, 100, 91]
];
var student = prompt("Enter a student's name please");
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