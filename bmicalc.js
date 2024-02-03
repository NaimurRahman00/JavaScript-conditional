/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


const weight = 52;
const height = 2.48;

const bmi = weight / height;
console.log(bmi);

if (bmi < 18.5) {
    console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    if (bmi <= 20) {
        console.log("You are near to underweight. be careful.");
    } else if (bmi > 20 && bmi < 22) {
        console.log("You are normal bro/sis!");
    } else {
        console.log("You are near to overweight. be careful.");
    }
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight.");
} else {
    console.log("You are obese.");
}