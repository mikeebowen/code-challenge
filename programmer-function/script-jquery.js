//get average of awesomeIndex with JQuery and Lodash
$(document).ready(function(){
  // create array of programmers
  var programmersArray = [
  { name: "Bob", occupation: "programmer", awesomeIndex: 7, },
  { name: "Alice", ccupation: "programmer", awesomeIndex: 9, },
  { name: "Zaphod", occupation: "President of the Galaxy" },
  { name: "Alice", ccupation: "programmer", awesomeIndex: 5, },
  { name: "Joe", ccupation: "programmer", awesomeIndex: 4, },
  { name: "Bob", ccupation: "programmer", awesomeIndex: 10, },
  { name: "July", ccupation: "programmer", awesomeIndex: 1, },
  { name: "Megan", occupation: "plumber" }
  ];
  // on click of the button with id jquery-button fun the function
  $("#jquery-button").on("click", function () {
    // create variables for functions
    var avArray = [];
    var divisor = 0;
    // loop through programmers array
    for (var i = 0; i < programmersArray.length; i++) {
       // if there is an awesomeIndex add 1 to the divisors, add the awesomeIndex to a sum and then divide to get average
      if (programmersArray[i]["awesomeIndex"]) {
        divisor++;
        avArray.push(programmersArray[i]["awesomeIndex"]);
        avAwesome = _.sum(avArray)/(divisor);
      }
    }
    // get the item with the id of awesome-index and assign it the averageAwesome value
    $("#awesome-index").html(avAwesome);
  })
});
