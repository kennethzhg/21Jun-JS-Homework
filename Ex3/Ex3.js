/*
Given an Array names = ["James", "Jack", "Flora", "Mikhil"].
Write a Javascript code to find number of characters in each name and display them in the Browser! [note: not console.log()]
Tips: To show the contents in HTML, use "document.getElementbyId" or "document.getElementbyClass" to access a DOM element (eg. <p> </p>) and change the text.
*/

var NAMES = ["James", "Jack", "Flora", "Mikhil"]
NAMES.forEach((value, index) => {return NAMES[index] = value.length} )

function COUNTJAMES() {
    document.getElementById("JamesChar").innerHTML = NAMES[0]
}

function COUNTJACK() {
    document.getElementById("JackChar").innerHTML = NAMES[1]
}

function COUNTFLORA() {
    document.getElementById("FloraChar").innerHTML = NAMES[2]
}

function COUNTMIKHIL() {
    document.getElementById("MikhilChar").innerHTML = NAMES[3]
}