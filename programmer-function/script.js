var programmers = [
{ name: "Bob", occupation: "programmer", awesomeIndex: 7, },
{ name: "Alice", ccupation: "programmer", awesomeIndex: 9, },
{ name: "Zaphod", occupation: "President of the Galaxy" }
];

var jsButton = document.getElementById("javascript-button");
var javascriptFunction = function () {
  var averageAwesome = 0;
  for (var i = 0; i < programmers.length; i++) {
    if (programmers[i]["awesomeIndex"]){
      averageAwesome += programmers[i]["awesomeIndex"];
    }
  }
document.getElementById("awesome-index").innerHTML = averageAwesome;
};

jsButton.addEventListener("click", javascriptFunction, false);
