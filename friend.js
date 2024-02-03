/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else

*/

const marks = 85;
const friendMarks = 10;

if (marks < 0 || marks >100) {
    console.log("Invalid marks");
} else if (marks > 80) {
    if (friendMarks < 0 || friendMarks > 100) {
        console.log("Invalid mark")
    } else if (friendMarks > 80) {
        console.log("let's go for a lunch my dear friend!");
    } else if (friendMarks < 80 && friendMarks >= 60) {
        console.log("Ohho! Better luck next time bro.");
    } else if (friendMarks < 60 && friendMarks >= 40) {
        console.log("His result is not good, so I will not seen his message.");
    } else {
        console.log("Oh no! His not my friend anymore, let's block him.");
    }

} else {
    console.log("Now i will go home and sleep and act sad!");
}