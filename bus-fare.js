/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 38;
var ticketFare = 800;

if (age < 10) {
    console.log("Your journey is free dear.");
} else if (age > 10 && age <= 25) {
    var discount = ticketFare / 2;
    console.log("You ticket fare is " + discount + " Taka.");
} else if (age >= 60) {
    var discount = (ticketFare / 100) * 15;
    console.log("Your ticket fare is " + discount + " Taka.");
} else {
    console.log("Your ticket fare is " + ticketFare + " Taka." )
}