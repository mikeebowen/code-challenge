var programmers = [
{ name: "Bob", occupation: "programmer", awesomeIndex: 7, },
{ name: "Alice", ccupation: "programmer", awesomeIndex: 9, },
{ name: "Zaphod", occupation: "President of the Galaxy" },
{ name: "Alice", ccupation: "programmer", awesomeIndex: 5, },
{ name: "Joe", ccupation: "programmer", awesomeIndex: 4, },
{ name: "Bob", ccupation: "programmer", awesomeIndex: 10, },
{ name: "July", ccupation: "programmer", awesomeIndex: 1, }
];

var jsButton = document.getElementById("javascript-button");
var javascriptFunction = function () {
  var sumAverageAwesome = 0;
  var averageAwesome = 0;
  var divisor = 0;
  for (var i = 0; i < programmers.length; i++) {
    if (programmers[i]["awesomeIndex"]){
      divisor++;
      sumAverageAwesome += programmers[i]["awesomeIndex"];
      averageAwesome = sumAverageAwesome/divisor;git s
    }
  }
document.getElementById("awesome-index").innerHTML = averageAwesome;
};

jsButton.addEventListener("click", javascriptFunction, false);
