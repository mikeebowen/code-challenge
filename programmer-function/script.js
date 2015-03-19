var programmers = [
{ name: "Bob", occupation: "programmer", awesomeIndex: 7, },
{ name: "Alice", ccupation: "programmer", awesomeIndex: 9, },
{ name: "Zaphod", occupation: "President of the Galaxy" }
];

// $(document).ready(function() {

// }

var jsButton = document.getElementById("javascript-button");
var javascriptFunction = function (arrayOfProgrammers) {
  console.log ("hello");
};

jsButton.addEventListener("click", javascriptFunction, false);
