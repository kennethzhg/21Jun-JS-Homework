//alert ('hello world');

function addNew() { //I am now creating a function called "addNew", and its mechnanism is as follow:
  var node = document.createElement("LI"); // I create a list called "node". In the HTML document, it will add an item called LI
  var textnode = document.createTextNode("MYDigi"); // I create a list called "textnode". In the HTML document, I will 
  node.appendChild(textnode); // Append the text to <li>
  document.getElementById("Bank names").appendChild(node); // Append <li> to <ul> with id="Bank names"
}
