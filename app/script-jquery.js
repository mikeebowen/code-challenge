$(document).ready(function(){
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

  $("#jquery-button").on("click", function () {
    var avArray = [];
    var divisor = 0;
    for (var i = 0; i < programmersArray.length; i++) {
      if (programmersArray[i]["awesomeIndex"]) {
        divisor++;
        avArray.push(programmersArray[i]["awesomeIndex"]);
        avAwesome = _.sum(avArray)/(divisor);
      }
    }
    $("#awesome-index").html(avAwesome);
  })
});
