// Challenge
// To solve this task, you will need two arrays: Student and MathGrades. The arrays should have respectively in Students, the students names and in the MathGrades, in the same index, the students grade for Maths going from 0 to 100.
// Create a JavaScript program that will show the average grade for each student.

// student = ["Martin", "Thomas", "Klaus", "Maria", "David", "Sanja", "John"];
// var mathGrades = [76, 85, 65, 93, 81, 100, 91];
// var student = prompt("Enter a student's name please");
// if (student.indexOf(studentName) > -1) { //indexof returns -1 for no match, and a number for match
//     document.getElementById("student").innerHTML = studentName;
//     var gradeIndex = student.indexOf(studentName);
//     var points = mathGrades[gradeIndex];
//     document.getElementById("points").innerHTML = points;
// } else {
//     document.getElementById("statement").innerHTML = ("Sorry " + studentName + " doesn't seem to be a math student."); // fail statement
// }

// if (points < 60) {
//     document.getElementById("points").style.color = "red"
// }
// if (points < 70 && points >= 60) {
//     document.getElementById("points").style.color = "orange"
// }
// if (points < 80 && points >= 70) {
//     document.getElementById("points").style.color = "yellow"
// }
// if (points < 90 && points >= 80) {
//     document.getElementById("points").style.color = "blue"
// }
// if (points <= 100 && points >= 90) {
//     document.getElementById("points").style.color = "green"
// }

Student = ["John", "Jane", "Jim", "Johanna", "Martin", "Thomas", "Klaus", "Maria", "David", "Sanja"]
MathGrades = [70, 85, 60, 100, 76, 85, 65, 93, 81, 100]
var studentName = prompt("Enter a student's name please")

if (Student.indexOf(studentName) > -1) { //indexof returns -1 for no match, and a number for match
    document.getElementById("student").innerHTML = studentName;
    var gradeIndex = Student.indexOf(studentName);
    var points = MathGrades[gradeIndex];
    document.getElementById("points").innerHTML = points;
} else {
    document.getElementById("statement").innerHTML = ("Sorry " + studentName + " doesn't seem to be a math student."); // fail statement
}

if (points < 60) {
    document.getElementById("points").style.color = "red";
} else if (points >= 60 && points < 70) {
    document.getElementById("points").style.color = "orange";
} else if (points >= 70 && points < 100) {
    document.getElementById("points").style.color = "green";
} else if (points >= 100) {
    document.getElementById("points").style.color = "blue";
}