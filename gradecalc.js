/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const marks = 84;

if (marks < 0 || marks > 100) {
    console.log("Invalid number.");
} else if (marks >= 90) {
    console.log("You got A");
} else if (marks >= 80) {
    console.log("You got B");
} else if (marks >= 70) {
    console.log("You got B");
} else if (marks >= 60) {
    console.log("You got D");
} else {
    console.log("You are Fail.");
}