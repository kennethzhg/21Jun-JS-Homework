//alert ('hello world');

function addNew() {
  var node = document.createElement("LI"); // Create a <li> node
  var textnode = document.createTextNode("MYDigi"); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  document.getElementById("Bank names").appendChild(node); // Append <li> to <ul> with id="Bank names"
}
