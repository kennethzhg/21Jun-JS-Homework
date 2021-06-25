/*
Given an array of total monthly expenses for first 6 months of the year in order.
var exp = [4000, 5000, 6500, 5000, 2800, 3500];
Use forEach loop to traverse the array and add 2% interest, for the months where the amount exceeds 4000.
The interest is only for the amount above 4000.
Store the final value in the same array and print it.
*/

var exp = [4000, 5000, 6500, 5000, 2800, 3500]
exp.forEach((value,index) => {if(value>4000) {return exp[index] = value*1.02} else {return exp[index] = value}})
console.log(exp)