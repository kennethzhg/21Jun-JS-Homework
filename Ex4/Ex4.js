/*
ABC bank has stored account opening dates as string in the form "dd-mm-yy".
Due to recent changes in the design, it wants to change the format to "yy-mm-dd" (that is, in reverse order).
You are required to write a javascript code using stack operations to reverse a date string.
*/


//If I have just a single date string:
var DATE = "dd-mm-yy"
var DATEARRAY = DATE.split('-')
var NEWFORMAT = DATEARRAY[2] + "-" + DATEARRAY[1] + "-" + DATEARRAY[0]
console.log(NEWFORMAT)



//If I have a set (i.e. array) of date strings:
var DATES = ["21-01-99", "31-05-02","07-12-09", "15-04-12", "17-10-15"]

////METHOD 1: map
var DATESMOD = DATES.map((value) => {return value.split('-')})
var DATESREFORMAT = DATESMOD.map((value,index) => {return value.slice(2,3)+"-"+value.slice(1,2)+"-"+value.slice(0,1)})
console.log(DATESREFORMAT)

////METHOD 2: forEach
DATES.forEach((value,index) => {return DATES[index] = value.split('-')})
DATES.forEach((value,index) => {return DATES[index] = value.slice(2,3)+"-"+value.slice(1,2)+"-"+value.slice(0,1)})
console.log(DATES)

