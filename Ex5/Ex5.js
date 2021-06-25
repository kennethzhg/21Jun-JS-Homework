/*
In personal expenses monitoring application, you want the app to alert the user under the following conditions for the current month.
- entertainment spending exceeds $500 
- entertainment spending exceeds $300 and eating-out spending exceeds $250
- Entertainment spending exceeds $300 and transport spending exceeds $400
Code using nested-if else statements without using &&, II. 
*/

var ENTSPEND = 520
var FOODSPEND = 600 
var TPTSPEND = 420

if (ENTSPEND>500) {console.log("Alert! You have spent more than $500 on entertainment!")}

if (ENTSPEND>300, FOODSPEND>250) {console.log("Alert! You have spent more than $300 on entertainment and more than $250 on eating out!")}

if (ENTSPEND>300, TPTSPEND>400) {console.log("Alert! You have spent more than $300 on entertainment and more than $400 on transport!")}
