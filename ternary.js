/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

*/

var num1 = 10;
var num2 = 20;

var result;

if (num1 > num2) {
    result = num1 * 2;
    console.log(result);
} else {
    result = num1 + num2;
    console.log(result);
}

// Ternary operator--- (Condition) ? true side : false side;
var finalResult = num1 > num2 ? result = num1 * 2 : result = num1 + num2;
console.log(finalResult);