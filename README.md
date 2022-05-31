# FE16-JS-Day3-Sanja-Mansur
Basic
Terms and Conditions:

Each exercise can be solved in various ways, so please provide your own unique solutions

ex 1 | Temperature v1.0
Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". 

Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :) .


ex 2 | Highest value in an array
Create a program to find the highest value in an array. 

E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.


ex 3 | Temperature v2.0
Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.

Intermediate
ex 1 | Compare two numbers


Create a JavaScript program that will show the average grade for each student. Here are the points for each student:

Martin = 76

Thomas = 85

Klaus = 65

Maria = 93

David = 81

Based on their points, output the grade, according to the following table:

< 60 F

< 70 D

< 80 C

< 90 B

< 100 A

Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).



ex 2 | FizzBuzz


Create a JavaScript program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

e.g. 

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz

etc.



ex 3
try to recreate this form using a loop :

*

**

***

****

*****

******

Challenge

ex Description:


To solve this task, you will need two arrays: Student and MathGrades. The arrays should have respectively in Students, the students names and in the MathGrades, in the same index, the students grade for Maths going from 0 to 100.

Students = [“John”, “Jane”]

MathGrades = [70, 85]

There should be a variable that can store a student's name. This name should be compared to the Students array and, when it is found, should output the name and grade, nicely on the screen. I.e.:

John has reached 70 points in Math this season.

The grades should also be checked and if it is less than 60 it should show it in red color, if it is between 60 and 70, it should be yellow, over 70 it should show green and if it is 100, it should be blue.


Hint: 

prompt() function will make an alert window that has an input inside, when the user types its name in it, it can be saved in a variable, for example:

var result = prompt("type your name");
