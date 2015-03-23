// Get the average value of aweseomIndex with native JavaScript
// create array of programmers
var programmers = [
{ name: "Bob", occupation: "programmer", awesomeIndex: 7, },
{ name: "Alice", ccupation: "programmer", awesomeIndex: 9, },
{ name: "Zaphod", occupation: "President of the Galaxy" },
{ name: "Alice", ccupation: "programmer", awesomeIndex: 5, },
{ name: "Joe", ccupation: "programmer", awesomeIndex: 4, },
{ name: "Bob", ccupation: "programmer", awesomeIndex: 10, },
{ name: "July", ccupation: "programmer", awesomeIndex: 1, },
{ name: "Megan", occupation: "plumber" }
];
// get the js button from the dom and assign it to a variable
var jsButton = document.getElementById("javascript-button");
var javascriptFunction = function () {
  // create variables for function
  var sumAverageAwesome = 0;
  var averageAwesome = 0;
  var divisor = 0;
  // loop through programmers array
  for (var i = 0; i < programmers.length; i++) {
    // if there is an awesomeIndex add 1 to the divisors, add the awesomeIndex to a sum and then divide to get average
    if (programmers[i]["awesomeIndex"]){
      divisor++;
      sumAverageAwesome += programmers[i]["awesomeIndex"];
      averageAwesome = sumAverageAwesome/divisor;
    }
  }
  // get the item with the id of awesome-index and assign it the averageAwesome value
document.getElementById("awesome-index").innerHTML = averageAwesome;
};
// Listen for a click on the jsButton and then run the javascrtiptFunction
jsButton.addEventListener("click", javascriptFunction, false);
